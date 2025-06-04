
import { supabase } from './supabase'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    // Insert the contact form data into Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Error saving contact message:', error)
      throw error
    }

    // You can set up Supabase Edge Functions to send emails
    // For now, we'll just save to database
    return { success: true, data }
  } catch (error) {
    console.error('Failed to send message:', error)
    return { success: false, error }
  }
}

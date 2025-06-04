
import { supabase, isSupabaseConfigured } from './supabase'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData) => {
  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    console.log('Contact form submission (Supabase not configured):', formData)
    return { 
      success: true, 
      message: 'Thank you for your message! Please set up Supabase to enable email delivery.' 
    }
  }

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

    return { success: true, data }
  } catch (error) {
    console.error('Failed to send message:', error)
    return { success: false, error }
  }
}

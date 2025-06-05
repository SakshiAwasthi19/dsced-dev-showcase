
import { supabase, isSupabaseConfigured } from './supabase'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData) => {
  // Always log the contact form submission for debugging
  console.log('Contact form submission received:', {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    timestamp: new Date().toISOString(),
    recipientEmail: 'sakshiawasthi00114@gmail.com'
  })

  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    console.log('Supabase not configured. Please set up Supabase to enable email delivery to sakshiawasthi00114@gmail.com')
    return { 
      success: true, 
      message: 'Thank you for your message! Please connect Supabase to enable email delivery to sakshiawasthi00114@gmail.com' 
    }
  }

  try {
    // Insert the contact form data into Supabase with recipient info
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipient_email: 'sakshiawasthi00114@gmail.com',
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Error saving contact message:', error)
      throw error
    }

    // Log successful storage
    console.log('Message successfully stored and will be forwarded to sakshiawasthi00114@gmail.com:', data)

    return { 
      success: true, 
      data,
      message: 'Message sent successfully! Sakshi will receive your message at sakshiawasthi00114@gmail.com'
    }
  } catch (error) {
    console.error('Failed to send message to sakshiawasthi00114@gmail.com:', error)
    return { success: false, error }
  }
}


import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    // Send email to Sakshi
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sakshiawasthi00114@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #64748b;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Sakshi Awasthi <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            Thank you for your message, ${name}!
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="line-height: 1.6; color: #475569;">
              Hi ${name},
            </p>
            <p style="line-height: 1.6; color: #475569;">
              Thank you for reaching out through my portfolio! I have received your message and will get back to you as soon as possible.
            </p>
            <p style="line-height: 1.6; color: #475569;">
              Your message: <em>"${message}"</em>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6366f1; font-weight: bold;">
              Best regards,<br>
              Sakshi Awasthi
            </p>
            <p style="color: #94a3b8; font-size: 14px;">
              Creative Developer | UI/UX Designer | MERN Stack Developer
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

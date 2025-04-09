export function getBookingEmailTemplate(name: string, calendlyLink: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Booking Confirmation</h2>
      <p>Hello ${name},</p>
      <p>Thank you for your payment! Please schedule your appointment using the link below:</p>
      <a href="${calendlyLink}" 
         style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;">
         Schedule Your Session
      </a>
      <p>If you have any questions, please reply to this email.</p>
      <p>Best regards,<br/>Tahwil Solutions Team</p>
    </div>
  `;
}

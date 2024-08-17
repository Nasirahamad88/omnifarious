import nodemailer from "nodemailer";

// POST /api/email
export async function POST(req) {
  const { name, email, message } = await req.json(); // Parse JSON body

  try {
    // Configure your SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false, // Use true for 465, false for other ports
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Error sending email. Please try again later." }),
      { status: 500 }
    );
  }
}

// Handle other methods (e.g., GET)
export async function GET() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
  });
}

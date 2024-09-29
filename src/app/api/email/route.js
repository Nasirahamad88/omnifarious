import nodemailer from "nodemailer";

// POST /api/email
export async function POST(req) {
  try {
    // Parse JSON body
    const { name, email, message } = await req.json();

    // Validate the request body
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400 }
      );
    }

    // Check if SMTP credentials are available
    const { SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return new Response(
        JSON.stringify({ error: "Email service is not configured properly." }),
        { status: 500 }
      );
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_PORT === "465", // Use TLS for port 465, otherwise false
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Set up email options
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_TO, // You can customize the recipient here
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error.message);

    // Return a more descriptive error
    return new Response(
      JSON.stringify({
        error: "Failed to send email. Please try again later.",
        details: error.message, // Optional: Include error details for debugging purposes
      }),
      { status: 500 }
    );
  }
}

// Handle unsupported methods like GET
export async function GET() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Allow": "POST" }, // Inform client only POST is allowed
  });
}

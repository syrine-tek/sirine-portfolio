import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      // 1. Try Web3Forms
      let response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: "4362fd29-14b1-40a0-b3af-cbea39d975c7",
          from_name: "Portfolio Sirine Tekaya",
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          subject: `[Portfolio] ${formData.subject}`,
          message: formData.message,
        }),
      });

      let result = await response.json().catch(() => null);

      // 2. Fallback to FormSubmit.co with anti-spam table formatting & reply-to
      if (!result || !result.success) {
        const fsResponse = await fetch("https://formsubmit.co/ajax/syrinetekaya@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            _subject: `[Portfolio Contact] ${formData.subject}`,
            message: formData.message,
            _template: "table",
            _captcha: "false",
          }),
        });

        const fsResult = await fsResponse.json().catch(() => null);

        if (fsResponse.ok || (fsResult && (fsResult.success === "true" || fsResult.success === true))) {
          result = { success: true };
        }
      }

      clearTimeout(timeoutId);

      if (result && result.success) {
        setStatus("Merci ! Votre message a été envoyé avec succès. 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Transmission failed");
      }
    } catch (error) {
      clearTimeout(timeoutId);
      window.location.href = `mailto:syrinetekaya@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `De: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      setStatus("Redirection vers votre application e-mail...");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 6000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        {/* Section Title with Code Tags */}
        <h2 className="code-section-title">
          <span className="code-tag">&lt;</span> Contact <span className="code-tag">/&gt;</span>
        </h2>

        <div className="contact-content">

          {/* ===== LEFT: Info ===== */}
          <div className="contact-info">
            <div className="availability-badge" style={{ marginBottom: "24px" }}>
              <span className="availability-dot" />
              Open to new opportunities
            </div>

            <h3>Let's work together</h3>
            <p>
              Interested in working together or discussing a project
              opportunity? Feel free to reach out — I'll get back to you
              within 24–48 hours.
            </p>

            <a className="contact-item" href="mailto:syrinetekaya@gmail.com">
              <i className="bx bx-envelope" />
              <span>
                <strong>Direct email</strong>
                <small>syrinetekaya@gmail.com</small>
              </span>
            </a>

            <a className="contact-item" href="tel:+216 93203284">
              <i className="bx bx-phone" />
              <span>
                <strong>Phone</strong>
                <small>+216 93203284</small>
              </span>
            </a>

            <div className="contact-item">
              <i className="bx bx-map" />
              <span>
                <strong>Location</strong>
                <small>Teboulba,Monastir, Tunisia</small>
              </span>
            </div>

          </div>

          {/* ===== RIGHT: Form ===== */}
          <div className="contact-form-wrap">
            <p className="contact-tag">
              <i className="bx bx-message-rounded-dots" /> Start a conversation
            </p>
            <h3>Send me a message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-name">Your name</label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email">Email address</label>
                  <input
                    type="email"
                    id="cf-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="cf-subject">Subject</label>
                <input
                  type="text"
                  id="cf-subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-message">Your message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  maxLength={800}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-submit" id="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send message"} <i className="bx bx-send" />
              </button>

              {status && (
                <p style={{ color: "var(--green)", fontSize: "14px", fontWeight: 500 }}>
                  {status}
                </p>
              )}

              <p className="form-privacy">
                <i className="bx bx-lock-alt" />
                Your information is only used to reply to you.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

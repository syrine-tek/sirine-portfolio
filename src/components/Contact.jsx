import { useState } from "react";

const contactItems = [
  {
    icon: "bx bx-envelope",
    label: "Email",
    value: "syrinetekaya@gmail.com",
    href: "mailto:syrinetekaya@gmail.com",
  },
  {
    icon: "bx bx-phone",
    label: "Phone",
    value: "+216 93 203 284",
    href: "tel:+21693203284",
  },
  {
    icon: "bx bx-map",
    label: "Location",
    value: "Teboulba, Monastir, Tunisia",
    href: null,
  },
  {
    icon: "bxl bxl-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/sirine-tekaya",
    href: "https://linkedin.com/in/sirine-tekaya",
  },
  {
    icon: "bxl bxl-github",
    label: "GitHub",
    value: "github.com/syrine-tek",
    href: "https://github.com/syrine-tek",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending (mailto fallback)
    const mailto = `mailto:syrinetekaya@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="exp-header">
          <div className="exp-label">
            <span className="exp-label-bracket">[</span>
            <span className="exp-label-text">CONTACT.ENGINEER</span>
            <span className="exp-label-bracket">]</span>
          </div>
          <h2 className="exp-title">
            Get In <span className="exp-title-accent">Touch</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out —
            I&apos;m always open to new opportunities and challenges.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left: Info Cards */}
          <div className="contact-info-col">
            <div className="contact-info-header">
              <i className="bx bx-chip contact-info-icon-main" />
              <div>
                <h3 className="contact-info-title">Let&apos;s Connect</h3>
                <p className="contact-info-sub">Open to full-time, freelance &amp; collaborations</p>
              </div>
            </div>

            <div className="contact-info-cards">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-info-card"
                  >
                    <span className="contact-card-icon">
                      <i className={item.icon} />
                    </span>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{item.label}</span>
                      <span className="contact-card-value">{item.value}</span>
                    </div>
                    <i className="bx bx-link-external contact-card-arrow" />
                  </a>
                ) : (
                  <div key={item.label} className="contact-info-card contact-info-card--static">
                    <span className="contact-card-icon">
                      <i className={item.icon} />
                    </span>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{item.label}</span>
                      <span className="contact-card-value">{item.value}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Status Badge */}
            <div className="contact-status-badge">
              <span className="availability-dot" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-header">
                <i className="bx bx-send" />
                <span>Send a Message</span>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <div className="contact-input-wrap">
                    <i className="bx bx-user" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <div className="contact-input-wrap">
                    <i className="bx bx-envelope" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <div className="contact-input-wrap">
                  <i className="bx bx-edit" />
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <div className="contact-input-wrap contact-textarea-wrap">
                  <i className="bx bx-message-dots contact-textarea-icon" />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <i className="bx bx-loader-alt contact-spin" />
                    <span>Opening Mail Client…</span>
                  </>
                ) : status === "sent" ? (
                  <>
                    <i className="bx bx-check-circle" />
                    <span>Message Ready!</span>
                  </>
                ) : (
                  <>
                    <i className="bx bx-send" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="contact-success-msg">
                  <i className="bx bx-check" /> Your mail client has been opened with your message pre-filled.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

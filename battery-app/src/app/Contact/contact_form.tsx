import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="contact-section" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center' }}>
      <form className="contact-form" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '2.5rem', maxWidth: 420, width: '100%' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Contact Us</h2>
        {submitted ? (
          <div style={{ color: '#0070f3', fontWeight: 600, textAlign: 'center', marginBottom: '1rem' }}>
            Thank you for contacting us! We will get back to you soon.
          </div>
        ) : null}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #e0e0e0', fontSize: '1rem' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #e0e0e0', fontSize: '1rem' }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #e0e0e0', fontSize: '1rem' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #e0e0e0', fontSize: '1rem', resize: 'vertical' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? '#b3d4fc' : 'linear-gradient(90deg, #0070f3 0%, #034897 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '2rem',
              padding: '0.9rem 0',
              marginTop: '0.5rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,112,243,0.08)',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

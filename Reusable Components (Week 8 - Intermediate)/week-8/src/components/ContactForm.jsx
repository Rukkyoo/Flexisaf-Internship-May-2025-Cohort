function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Your email" required />
      <textarea placeholder="Your message" required />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;

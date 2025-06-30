function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Your email" required />
      <textarea placeholder="Your message" required />
      <button type="submit">Send</button>
      <p>
        Check{" "}
        <a
          href="https://github.com/Rukkyoo/Flexisaf-Internship-May-2025-Cohort/tree/main/Reusable%20Components%20(Week%208%20-%20Intermediate)/week-8"
          target="_blank"
        >
          GitHub
        </a>{" "}
        Repo
      </p>
    </form>
  );
}

export default ContactForm;

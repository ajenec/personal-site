

const ContactMe = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Enter your message"
          />
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;

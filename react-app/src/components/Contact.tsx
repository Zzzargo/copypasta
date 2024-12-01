import "../pages/HomePage.css";

function Contact() {
  return (
    <>
      <div className="contact-form-table">
        <div className="contact-form-left">
          <p className="contact-title">Contact Us</p>
          <form>
            <input className="forms" type="text" placeholder="First Name" required />
            <input className="forms" type="text" placeholder="Last Name" required />
            <input className="forms" type="email" placeholder="Email" required />
          </form>
        </div>
        <div className="contact-form-right">
          <textarea className="forms" placeholder="Your Message" required></textarea>
          <button type="button" className="btn btn-submit btn-success rounded-4">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;

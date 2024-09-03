import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,   
      from_email: formData.email, 
      message: formData.message,  
      to_name: "Veeti Karnaranta",       
    };

    emailjs
      .send(
        "service_eyll5o2",
        "template_7r99h59",
        templateParams,
        "POVvlKQYXViMUa5Bs"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setStatusMessage("");
          }, 3000);
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          setStatusMessage("Failed to send the message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSending}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSending}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSending}
          ></textarea>
        </div>
        <input
          className="hover btn"
          type="submit"
          value={isSending ? "Sending..." : "Submit"}
          disabled={isSending}
        />
      </form>
      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </section>
  );
}

export default Contact;

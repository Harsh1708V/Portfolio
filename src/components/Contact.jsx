import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants"; // Your constants file
import emailjs from "emailjs-com"; // Make sure you installed this

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("Clbzw6TViXQogu-U0"); // Replace with your user ID
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debugging the form data

    // Prepare email data
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    console.log("Email Data:", emailData); // Debugging the email data

    // Send the email using EmailJS (without template)
    emailjs
      .send(
        "service_rmzvzja",  // Replace with your service ID
        //"template_id",       // Use your template ID, or leave empty for no template
        emailData,           // Send the form data as the email content
        "Clbzw6TViXQogu-U0"  // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.email}</p>
        <div className="flex justify-center gap-6 my-4">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-white hover:text-gray-600" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-stone-700 rounded"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-stone-700 rounded"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-stone-700 rounded"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

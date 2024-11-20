import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kquke48", // Replace with your Service ID
        "template_mksji9f", // Replace with your Template ID
        formRef.current, // Your form reference
        "KyfNUoRDgyI2hWFJA" // Replace with your API Key
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully!");
          e.target.reset(); // Clear the form after submission
        },
        (error) => {
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section py-8 bg-[#432E54] text-white">
      <div className="text-center mb-7">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-lg text-[#FF7A8A] mt-2">
          Get in touch, I'd love to hear from you!
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-[#533C72] text-white rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-[#533C72] text-white rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 bg-[#533C72] text-white rounded-lg"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-[#FF7A8A] text-white font-semibold rounded-lg hover:bg-[#ff4f62]"
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="mt-4 text-center text-lg text-green-500 italic">
            {successMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;

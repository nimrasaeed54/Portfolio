emailjs
  .sendForm(
    "service_kquke48",  // Replace with your Service ID
    "template_mksji9f",  // Replace with your Template ID
    formRef.current,     // Your form reference
    "KyfNUoRDgyI2hWFJA"       // Replace with your API Key
  )
  .then(
    (result) => {
      alert("Message sent successfully!");
      e.target.reset();
    },
    (error) => {
      alert("Failed to send message. Please try again.");
    }
  );

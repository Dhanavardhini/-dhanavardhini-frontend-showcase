document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  emailjs.init("YOUR_USER_ID");  // Replace with your EmailJS User ID

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function (response) {
    alert("Your message has been sent successfully!");
  }, function (error) {
    alert("Failed to send message. Please try again.");
  });
});

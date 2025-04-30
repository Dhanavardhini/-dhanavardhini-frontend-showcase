declare var emailjs: any;  // Declare emailjs to prevent TS errors

// Function to validate email format
function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Function to validate that fields are not empty
function validateForm(name: string, email: string, message: string): boolean {
  if (name.trim() === "") {
    alert("Name is required.");
    return false;
  }
  if (email.trim() === "") {
    alert("Email is required.");
    return false;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (message.trim() === "") {
    alert("Message is required.");
    return false;
  }
  return true;
}

// Initialize EmailJS with your user ID
emailjs.init("user_YOUR_USER_ID");  // Replace with your EmailJS user ID

// Event listener for form submission
document.getElementById("contactForm")?.addEventListener("submit", function(event: Event) {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const message = (document.getElementById("message") as HTMLTextAreaElement).value;

  // Validate the form
  if (validateForm(name, email, message)) {
    // Prepare the template parameters
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send the email using emailjs service
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then((response: any) => {
        alert("Email sent successfully!");
      }, (error: any) => {
        alert("Failed to send email. Please try again.");
      });
  } else {
    alert("Form has errors. Please check and try again.");
  }
});

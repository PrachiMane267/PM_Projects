document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    
    // Here you can add code to process the form data (e.g., sending it to a server)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // After form submission, show a thank you message
    alert("Thank you for contacting us! We will get back to you shortly.");
    
    // Optionally, you can reset the form
    document.getElementById("contact-form").reset();
  });
  
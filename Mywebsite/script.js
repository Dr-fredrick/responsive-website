// Smooth scroll to section when navigation link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Basic contact form validation (optional)
  function validateContactForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    if (!name.value || !email.value || !message.value) {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Simple email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    alert("Message sent successfully!");
    return true;
  }
  const button = document.getElementById('toggle-theme');
button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

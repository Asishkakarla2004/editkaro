document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Implement Google Sheets integration here
    alert('Thank you for subscribing with: ' + email);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    // Implement Google Sheets integration here
    alert('Thank you for contacting us, ' + name);
});

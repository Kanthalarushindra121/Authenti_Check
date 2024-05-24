const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Send the form data to the server
  // ...

  // Clear the form fields
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#message').value = '';
});
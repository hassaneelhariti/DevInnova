// Add simple animations
document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector('.cta-btn');
  
    ctaButton.addEventListener('mouseover', () => {
      ctaButton.style.backgroundColor = '#ff3300';
    });
  
    ctaButton.addEventListener('mouseout', () => {
      ctaButton.style.backgroundColor = '#ff6600';
    });
  
    
  });
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    if (hamburger && menu && closeMenu) {
        // Open the menu when the hamburger is clicked
        hamburger.addEventListener('click', function () {
            menu.classList.add('active'); // Show the menu
        });

        // Close the menu when the close icon is clicked
        closeMenu.addEventListener('click', function () {
            menu.classList.remove('active'); // Hide the menu
            closeMenu.classList.toggle('rotated'); // Rotate the close button when clicked
        });
    }
});

/*cokies  */
// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Save the cookie
}

// Function to get a cookie by name
function getCookie(name) {
  const nameWithEqual = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.indexOf(nameWithEqual) === 0) {
          return c.substring(nameWithEqual.length, c.length);
      }
  }
  return "";
}

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Set cookies to store form data (set them to expire in 7 days)
  setCookie('name', name, 7);
  setCookie('email', email, 7);
  setCookie('subject', subject, 7);
  setCookie('message', message, 7);

  // Optionally, show a message that the form is submitted
  alert('Your form data has been saved!');
});

// Function to load data from cookies into the form (if available)
function loadFormData() {
  const name = getCookie('name');
  const email = getCookie('email');
  const subject = getCookie('subject');
  const message = getCookie('message');

  // Populate the form with saved cookie values
  if (name) {
      document.getElementById('name').value = name;
  }
  if (email) {
      document.getElementById('email').value = email;
  }
  if (subject) {
      document.getElementById('subject').value = subject;
  }
  if (message) {
      document.getElementById('message').value = message;
  }
}

// Call the loadFormData function when the page loads to pre-fill the form
document.addEventListener('DOMContentLoaded', loadFormData);

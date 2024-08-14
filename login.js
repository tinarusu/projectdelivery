document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.login-container');
    const loginButton = document.querySelector('#loginButton');
  
    loginButton.addEventListener('click', function() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
  
        if (email.trim() === '' || password.trim() === '') {
            console.error('Email/password wrong typed.');
            return;
        }
  
        const userData = {
            email: email,
            password: password
        };
  
        loginUser(userData);
    });
  
    function loginUser(userData) {
        fetch('http://localhost:3000/users?email=' + userData.email + '&password=' + userData.password)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                throw new Error('Invalid email or password');
            }
            
            localStorage.setItem('isAuthenticated', 'true');
    
            console.log('Login successful!');
            window.location.href = 'logged.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
  });
  document.addEventListener('DOMContentLoaded', () => {
      const contButton = document.getElementById('contButton');
      const contDropdown = document.getElementById('contDropdown');
      const menuButton = document.getElementById('menuButton');
      const menuDropdown = document.getElementById('menuDropdown');
  
      // Toggle dropdown visibility
      function toggleDropdown(button, dropdown) {
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
  
      // Event listeners for button clicks
      contButton.addEventListener('click', () => {
          toggleDropdown(contButton, contDropdown);
      });
  
      menuButton.addEventListener('click', () => {
          toggleDropdown(menuButton, menuDropdown);
      });
  
      // Close dropdowns when clicking outside of them
      document.addEventListener('click', (event) => {
          if (!contButton.contains(event.target) && !contDropdown.contains(event.target)) {
              contDropdown.style.display = 'none';
          }
          if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
              menuDropdown.style.display = 'none';
          }
      });
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
      const gif = document.getElementById('titleGif');
  })
  document.addEventListener('DOMContentLoaded', () => {
      const menuButton = document.getElementById('menuButton');
  
      menuButton.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  });
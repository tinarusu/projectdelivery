document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('FirstName').value;
        const lastName = document.getElementById('LastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        saveUserData(userData);
    });

    function saveUserData(userData) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Details cannot be saved!');
            }
            console.log('Details have been saved!');
            window.location.href = 'registred.html';
        })
        .catch(error => {
            console.error('Eroare:', error);
        });
    }
});
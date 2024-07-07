const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

let users = [
    { username: 'Adedamola', password: 'adedamola123' },
    { username: 'Victory', password: 'victory123' }
];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        let isValid = false;
        users.forEach((user) => {
            if (user.username === username && user.password === password) {
                isValid = true;
            }
        });

        if (isValid) {
            // Login successful, redirect to dashboard or whatever
            console.log('Login successful!');
            window.location.href = 'Victory Present.html';

        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});
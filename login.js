function handleLogin(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (validateLogin(email, password)) {
        window.location.href = 'landing.html';
    } else {
        alert('Login gagal. Periksa email dan password Anda.');
    }
}

function validateLogin(email, password) {
    return email === "test@example.com" && password === "123456";
}

document.getElementById('login-form').addEventListener('submit', handleLogin);
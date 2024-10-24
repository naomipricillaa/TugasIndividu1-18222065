function handleSignup(event) {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (validateSignup(password, confirmPassword)) {
        alert('Pendaftaran berhasil!');
        redirectToLogin();
    } else {
        alert('Password dan konfirmasi password tidak cocok.');
    }
}

function validateSignup(password, confirmPassword) {
    return password === confirmPassword;
}

function redirectToLogin() {
    window.location.href = 'login.html';
}

document.getElementById('signup-form').addEventListener('submit', handleSignup);
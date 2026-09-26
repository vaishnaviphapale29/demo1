const form = document.getElementById('loginForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    formMessage.textContent = 'Please enter both email and password.';
    formMessage.className = 'form-message error';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'form-message error';
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = 'Password must be at least 6 characters long.';
    formMessage.className = 'form-message error';
    return;
  }

  formMessage.textContent = 'Login successful! Welcome back.';
  formMessage.className = 'form-message success';
  form.reset();
});

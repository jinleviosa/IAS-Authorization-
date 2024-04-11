const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (enteredUsername === 'admin' && enteredPassword === 'password') {
    var link = document.createElement('a');
          link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('[InternetShortcut]\nURL=https://www.pup.edu.ph/\n');
          link.download = 'https://www.pup.edu.url';
          link.click();;
  } else {
    window.location.href = 'noAuth.html';
  }
});
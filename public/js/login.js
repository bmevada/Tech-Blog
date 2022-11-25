async function loginFormHandler(event) {
    event.preventDefault();

    // User Login
    // const email = document.querySelector('#email-login').value.trim();
    const username= document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Send a POST request to the API
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Then, redirect to the dashboard page
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


document.getElementById('loginForm').addEventListener('submit')
function login()
{
event.preventDefault();

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;


    const correctUsername = 'darvie';
    const correctPassword = 'maypa';

    if (username == correctUsername && password == correctPassword)
    {
        alert('Login Successful!');
        window.location.href = 'Redido_Exam.html';
    }
    else 
    {
        alert('Invalid Username or Password!')
    }
}



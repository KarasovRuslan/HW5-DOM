document.getElementById("log_button").addEventListener("click", () => {
    document.getElementById("user_out").style.display = "flex";
    document.getElementById("log_out").innerHTML = 'Login: ' + document.getElementById("user_name").value;
    document.getElementById("pass_out").innerHTML = 'Password: ' + document.getElementById("user_pass").value;
    localStorage.setItem('Login', (document.getElementById("user_name").value))
    localStorage.setItem('Password', (document.getElementById("user_pass").value))
});

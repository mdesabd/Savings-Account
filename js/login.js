//Only for login page----

document.getElementById('login-submit').addEventListener('click', function () {
    //get usar email--
    const emailField = document.getElementById('usar-email');
    const usarEmail = emailField.value;

    //get usar password--
    const passwordField = document.getElementById('usar-password');
    const usarPassword = passwordField.value;

    if (usarEmail == 'esa.ce2020@gmail.com' && usarPassword == 01683476483) {
    window.location.href = "banking.html"
    //এটা পেজের লিংক
    // console.log('valid usar');
}

    else {
    console.log('you are not a valid usar');
}

})
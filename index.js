function validateform() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var usernameFlag = true;
    var passwordFlag = true;

    if (username.value == "") {
        document.getElementById("usererror").innerHTML = "Username is empty";
        usernameFlag = false;
    } else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML = "Username requires a minimum of 3 characters";
        usernameFlag = false;
    } else {
        document.getElementById("usererror").innerHTML = "";
    }

    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "Password is empty";
        passwordFlag = false;
    } else if (password.value.length < 8) {
        document.getElementById("passerror").innerHTML = "Password must be at least 8 characters long";
        passwordFlag = false;
    } else if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)) {
        document.getElementById("passerror").innerHTML = "Password must contain both uppercase and lowercase letters";
        passwordFlag = false;
    } else {
        document.getElementById("passerror").innerHTML = "";
    }

    if (usernameFlag && passwordFlag) {
        return true;
    } else {
        return false;
    }
}

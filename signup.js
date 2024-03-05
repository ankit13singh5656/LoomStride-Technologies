function validateSignup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var phoneNumber = document.getElementById("phoneNumber");

    var emailFlag = true;
    var passwordFlag = true;
    var firstNameFlag = true;
    var lastNameFlag = true;
    var phoneNumberFlag = true;

    // Validation for email
    if (email.value == "" || !isValidEmail(email.value)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        emailFlag = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Validation for password (you can add more criteria as needed)
    if (password.value == "" || password.value.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
        passwordFlag = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    // Validation for first name
    if (firstName.value == "") {
        document.getElementById("firstNameError").innerHTML = "First Name is required";
        firstNameFlag = false;
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    // Validation for last name
    if (lastName.value == "") {
        document.getElementById("lastNameError").innerHTML = "Last Name is required";
        lastNameFlag = false;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    // Validation for phone number
    if (phoneNumber.value == "" || !isValidPhoneNumber(phoneNumber.value)) {
        document.getElementById("phoneNumberError").innerHTML = "Invalid phone number";
        phoneNumberFlag = false;
    } else {
        document.getElementById("phoneNumberError").innerHTML = "";
    }

    // Check if all fields are valid
    if (emailFlag && passwordFlag && firstNameFlag && lastNameFlag && phoneNumberFlag) {
        // Show a success message using alert
        alert('Registration successful!');

        // Perform any additional actions, such as submitting the form or redirecting
        // For now, let's prevent form submission for this example
        return false;
    } else {
        // Prevent form submission if there are validation errors
        return false;
    }
}

// Helper function to validate email format
function isValidEmail(email) {
    // You can use a regular expression for more robust email validation
    // This is a simple example
    return /\S+@\S+\.\S+/.test(email);
}

// Helper function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
    // You can use a regular expression for more robust phone number validation
    // This is a simple example
    return /^\d{10}$/.test(phoneNumber);
}

function validatepassword() {
    var x = document.forms["password-form"]["password"].value;
    if (x != "NS220706DO") {
        alert("Password Incorrect");
        return false;
    }
}
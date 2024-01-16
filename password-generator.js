function generatePassword() {
    var length = parseInt(document.getElementById("length").value);
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;
    var charset = "";
    var password = "";

    if (includeUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
        charset += "0123456789";
    }
    if (includeSymbols) {
        charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    if (length < 8 || length > 20) {
        document.getElementById("error").textContent = "Password length must be between 8 and 20 characters.";
        return;
    } else {
        document.getElementById("error").textContent = "";
    }

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}

  
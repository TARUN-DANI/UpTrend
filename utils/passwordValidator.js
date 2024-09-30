// utils/passwordValidator.js
function validatePassword(password) {
    // Minimum length check (can be configurable)
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    // Regular expressions for validation
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!upperCaseRegex.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!lowerCaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!digitRegex.test(password)) {
        return "Password must contain at least one digit.";
    }
    if (!specialCharRegex.test(password)) {
        return "Password must contain at least one special character.";
    }

    // If all conditions pass
    return "Password is strong.";
}

module.exports = { validatePassword };
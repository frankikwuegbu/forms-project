function validation(values) {
    let error = {};
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (!password_pattern.test(values.password)) {
        error.password = "Invalid credentials";
    } else {
        error.password = ""
    };

    if (values.password[0] === values.confirmPassword[0]) {
        error.confirmPassword = ""
    } else {
        error.confirmPassword = "Passwords do not match"
    };

    return error;
};

export default validation;
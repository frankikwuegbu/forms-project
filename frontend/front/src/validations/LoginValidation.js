function validation(values) {
    let error = {};
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (!password_pattern.test(values.password)) {
        error.password = "Invalid credentials";
    } else {
        error.password = ""
    };

    return error;
};

export default validation;
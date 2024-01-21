/**
 * Function to sanitize input values
 */
const sanitizeInputValue = (input_val) => {
    // strip html tags
    const stripped = input_val.replace(/<\/?[^>]+(>|$)/g, "");
    // remove extra white space
    const santitized_input = stripped.replace(/\s+/g, ' ').trim();
    // return it
    return santitized_input
}

/**
 * Function to sanitize all the fields values
 */
const sanitizeFieldsValue = (email, name, subject, message) => {
    const sanitize_client_name = sanitizeInputValue(name);
    const sanitize_client_email = sanitizeInputValue(email);
    const sanitize_email_subject = sanitizeInputValue(subject);
    const sanitize_email_message = sanitizeInputValue(message);
    
    return {
        san_email: sanitize_client_email,
        san_name: sanitize_client_name,
        san_subject: sanitize_email_subject,
        san_message: sanitize_email_message,
    };
}

export { sanitizeInputValue, sanitizeFieldsValue }
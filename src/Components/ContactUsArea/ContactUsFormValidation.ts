class ContactUsFormValidation {

    public static fullNameValidation = {
        required: "שדה חובה",
        minLength: {
            value: 5,
            message: "שם מלא חייב לכלול לפחות 5 תווים"
        },
        maxLength: {
            value: 50,
            message: "שם מלא יכול לכלול עד 50 תווים"
        }
    }

    public static phoneNumberValidation = {
        required: "שדה חובה",
        pattern: {
            value: /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/,
            message: "מספר טלפון לא חוקי"
        },
        minLength: {
            value: 9,
            message: "מספר טלפון חייב לכלול לפחות 9 תווים"
        },
        maxLength: {
            value: 16,
            message: "מספר טלפון יכול לכלול עד 16 תווים"
        }
    }

    public static messageValidation = {
        required: "שדה חובה",
        minLength: {
            value: 5,
            message: "הודעה חייבת לכלול לפחות 5 תווים"
        },
        maxLength: {
            value: 2000,
            message: "הודעה יכולה לכלול עד 2000 תווים"
        }
    }
    
}

export default ContactUsFormValidation;
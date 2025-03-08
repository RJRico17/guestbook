export default function validateForm(data) {
    const errors = [];
    if (!data.fname || data.fname.trim() === "") {
        errors.push("First name is required");
    }
    if (!data.lname || data.lname.trim() === "") {
        errors.push("Last name is required");
    }
    if (!data.title || data.title.trim() === "") {
        errors.push("Title is required");
    }
    if (!data.email || data.email.trim() === "" || 
        data.email.indexOf("@") === -1 ||
        data.email.indexOf(".") === -1) {
        errors.push("Email is required and must be valid");
    }
    if (!data.company || data.company.trim() === "") {
        errors.push("Company is required");
    }
    if (!data.linkedin || data.linkedin.trim() === "") {
        errors.push("Linkedin is required");
    }

    if (data.howmeet === "none") {
        errors.push("Meeting required");
    }
    const validMeets = ["school","work","perchance"];
    if (validMeets.includes(data.howMeet) === false) {
        errors.push("Hacker");
    }
    return {
        isValid: errors.length === 0,
        errors
    }
}
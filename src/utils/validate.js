export const checkValidData = (email , password , confirmPassword , name , isSignIn) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name);

    if(!isValidEmail) return "Email is not valid";
    if (!isValidPassword) return "Password is not valid";

    if(!isSignIn){
    if (!isNameValid) return "Name is not valid";
    if (password !== confirmPassword) return "Confirm Password is not valid";
    }

    return null;
}
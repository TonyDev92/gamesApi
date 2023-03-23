const User = require('../api/models/user.model');

const validateEmail = (email) => {

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(String(email).toLocaleLowerCase());
}

const validatePassword = (password) => {

    const regexPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; //una letra mayus, una letra minus, un numero, un caracter especial, min 8 caracteres

    return regexPassword.test(String(password));
}

const validateEmailOnUse = async (email) => {
    
    const user = await User.find({email: email});

    return user.length;
}

module.exports = {validateEmail, validateEmailOnUse, validatePassword};
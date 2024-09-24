let User_name = document.getElementById("User_name");
let user_email = document.getElementById("user_email");
let user_phoneNumber = document.getElementById("user_phoneNumber");
let user_password = document.getElementById("user_password");
let user_confirm_password = document.getElementById("user_confirm_password");

let button_register = document.getElementById("button_register");

// Bandera para validar
let is_valid = true;

// Función para validar nombre
function valname() {
    const validName = User_name.value.trim()
    const nameVal = /^([A-Za-záéíóúüñÑ]{3,} ){0,1}[A-Za-záéíóúüñÑ]{3,} [A-Za-záéíóúüñÑ]{2,}([ ]?[A-Za-záéíóúüñÑ]{2,})?$/;
    return nameVal.test(validName);
}//valname


// Función para validar número telefónico
function valPhone() {
    const phoneValid = user_phoneNumber.value.trim();
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phoneValid); 
}//valPhone

// Función para validar correo electrónico
function valEmail() {
    const validEmail = user_email.value.trim()
    const emailValo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailValo.test(validEmail);
}//valEmail

// Función para validar contraseña
function valPassword() {
    const validPassword = user_password.value.trim()
    const passwordVal = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return passwordVal.test(validPassword);
}//valPassword

button_contactenos.addEventListener("click", function(event){
    event.preventDefault();

    User_name.style.border = "";
    user_email.style.border = "";
    user_phoneNumber.style.border = "";
    user_password.style.border = "";
    user_confirm_password.style.border = "";

    
    is_valid = true;

    // Validación del nombre
    if(!valname()){
        User_name.style.border = "solid red medium";
        showAlert(User_name, `El nombre de usuario no es válido`); 
        is_valid = false;
    } else {
        clearAlert(User_name); // Limpiar alerta si el campo es válido
    }

    // Validación del correo electrónico
    if (!valEmail()) {
        user_email.style.border = "solid red medium";
        showAlert(user_email, `El correo no es válido`); 
        is_valid = false;
    } else {
        clearAlert(user_email); // Limpiar alerta si el campo es válido
    }

     // Validación del teléfono
     if (!valPhone()) {
        user_phoneNumber.style.border = "solid red medium";
        showAlert(user_phoneNumber, `El número no es válido`); 
        is_valid = false;
    } else {
        clearAlert(user_phoneNumber); // Limpiar alerta si el campo es válido
    }
    
     // Validación de contraseña
     if (!valPassword()) {
        user_password.style.border = "solid red medium";
        showAlert(user_password, `Contraseña inválida`); 
        is_valid = false;
    } else if (user_confirm_password.value.trim() != user_password.value.trim()){
        user_confirm_password.value.style.border = "solid red medium";
        showAlert(user_password, `La contraseña no coincide`); 
        is_valid = false;
    }
});
let User_name = document.getElementById("User_name");
let user_email = document.getElementById("user_email");
let user_phoneNumber = document.getElementById("user_phoneNumber");
let user_password = document.getElementById("user_password");
let user_confirm_password = document.getElementById("user_confirm_password");
let confirm_checkbox = document.getElementById("flexCheckDefault");
const feedback = document.getElementById('checkboxFeedback');
let button_register = document.getElementById("button_register");


// Bandera para validar
let is_valid = true;

// Función para validar nombre
function valname() {
    const validName = User_name.value.trim();
    const nameVal = /^([A-Za-záéíóúüñÑ]{3,} ){0,1}[A-Za-záéíóúüñÑ]{3,} [A-Za-záéíóúüñÑ]{2,}([ ]?[A-Za-záéíóúüñÑ]{2,})?$/;
    return nameVal.test(validName);
}//valname


// Función para validar número telefónico
function valPhone() {
    const phoneValid = user_phoneNumber.value.trim();
    const phoneRegex = /^(?!0000000000)\d{10}$/;
    return phoneRegex.test(phoneValid); 
}//valPhone

// Función para validar correo electrónico
function valEmail() {
    const validEmail = user_email.value.trim();
    const emailValo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailValo.test(validEmail);
}//valEmail

// Función para validar contraseña
function valPassword() {
    const validPassword = user_password.value.trim();
    const passwordVal = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return passwordVal.test(validPassword);
}//valPassword

// Función para confirmar contraseña
// function confPassword() {
//     const confirmPassword = user_confirm_password.value.trim();
//     const passwordIn = user_password.value.trim();
//     return passwordIn.test(confirmPassword);
//}//confPassword

// Función para eliminar alerta
function clearAlert(element) {
    const alert = element.parentNode.querySelector('.alert');
    if (alert) {
        alert.remove(); 
    }
}//clearAlert

// Función para mostrar alerta
function showAlert(element, message) {
    clearAlert(element); 
    element.insertAdjacentHTML("afterend",`
    <div class="alert alert-danger d-flex align-items-center" role="alert" style="display: block;">
    <i class="bi bi-exclamation-triangle flex-shrink-0 me-2" aria-label="Danger:"></i>
    ${message}
    </div>
    `);
}

    // Evento click del botón
    button_register.addEventListener("click", function(event){
    event.preventDefault();

    User_name.style.border = "";
    user_email.style.border = "";
    user_phoneNumber.style.border = "";
    user_password.style.border = "";
    user_confirm_password.style.border = "";
    
    
    is_valid = true;



    // Validación del nombre
    if(!valname()){
        User_name.style.border = "solid red medium"
        showAlert(User_name, `El nombre de usuario no es válido`); 
        is_valid = false;
    } else {
        clearAlert(User_name); // Limpiar alerta si el campo es válido
    }

    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        array.push(key)
    }
    
    // Validación del correo electrónico
    if (!valEmail()) {
        user_email.style.border = "solid red medium";
        showAlert(user_email, `El correo no es válido`); 
        is_valid = false;
    } else if (array.includes(user_email.value.trim())) {
        user_email.style.border = "solid red medium";
        showAlert(user_email, `El correo ya existe`); 
        is_valid = false;
    } else {
        clearAlert(user_email); // Limpiar alerta si el campo es válido
    }

    

    // Validación del correo electrónico existente
    // if (array.includes(user_email.value.trim())) {
    //     user_email.style.border = "solid red medium";
    //     showAlert(user_email, `El correo ya existe`); 
    //     is_valid = false;
    // } else {
    //     clearAlert(user_email); // Limpiar alerta si el campo es válido
    // }

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
    }else{
        clearAlert(user_password);
    }
    if (user_confirm_password.value.trim()==="") {
        user_confirm_password.style.border = "solid red medium";
        showAlert(user_confirm_password, `Campo vacio`); 
        is_valid = false;     
    } else if (user_password.value.trim() != user_confirm_password.value.trim()){
        user_confirm_password.style.border = "solid red medium";
        showAlert(user_confirm_password, `La contraseña no coincide`); 
        is_valid = false;     
    }else{
        clearAlert(user_confirm_password);
    }

    if (!confirm_checkbox.checked) {
        confirm_checkbox.classList.add('is-invalid');
        feedback.style.display = 'block';
        is_valid = false; 
    }else{
        confirm_checkbox.classList.remove('is-invalid');
        feedback.style.display = 'none';
    }

    // Si los datos son válidos, enviar el formulario
    if (is_valid) {
        // Datos a enviar
        const Usuario = {
            nombre: User_name.value.trim(),
            correo: user_email.value.trim(),
            telefono: user_phoneNumber.value.trim(),
            contraseña: user_password.value.trim()
        };

         localStorage.setItem(`${user_email.value.trim()}`,JSON.stringify(Usuario));

        User_name.value = "";
        user_email.value = "";
        user_phoneNumber.value = "";
        user_password.value = "";
        user_confirm_password.value = "";
        confirm_checkbox.checked = false;
    
    }
    
});
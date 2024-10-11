let User_name = document.getElementById("User_name");
let user_email = document.getElementById("user_email");
let user_phoneNumber = document.getElementById("user_phoneNumber");
let user_password = document.getElementById("user_password");
let user_confirm_password = document.getElementById("user_confirm_password");
let confirm_checkbox = document.getElementById("flexCheckDefault");
const feedback = document.getElementById('checkboxFeedback');
let button_register = document.getElementById("button_register");
let alert_container = document.getElementById("alert-container")


// Bandera para validar
let is_valid = true;

// Función para validar nombre
function valname() {
    const validName = User_name.value.trim();
    const nameVal = /^([A-Za-záéíóúüñÑÁÉÍÓÚÜ]{3,} ){0,1}[A-Za-záéíóúüñÑÁÉÍÓÚÜ]{3,} [A-Za-záéíóúüñÑÁÉÍÓÚÜ]{2,}([ ]?[A-Za-záéíóúüñÑÁÉÍÓÚÜÁÉÍÓÚÜ]{2,})?$/;
    return nameVal.test(validName);
}//valname


// Función para validar número telefónico
function valPhone() {
    const phoneValid = user_phoneNumber.value.trim();
    const phoneRegex = /^(?!0\d{9})\d{10}$/;
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
    clearAlert(alert_container)

    User_name.style.border = "";
    user_email.style.border = "";
    user_phoneNumber.style.border = "";
    user_password.style.border = "";
    user_confirm_password.style.border = "";
    
    
    is_valid = true;



    // Validación del nombre
    if(!valname()){
        User_name.style.border = "solid red medium"
        showAlert(User_name, `Ingresa un nombre de al menos tres letras y un apellido`); 
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
        showAlert(user_email, `El correo electrónico debe tener un formato válido (e.g., ejemplo@dominio.com).`); 
        is_valid = false;
    } else if (array.includes(user_email.value.trim())) {
        user_email.style.border = "solid red medium";
        showAlert(user_email, `El correo ya existe.`); 
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
        showAlert(user_phoneNumber,`El número de teléfono debe tener un formato válido (e.g., 55XXXXXXXX).`); 
        is_valid = false;
    } else {
        clearAlert(user_phoneNumber); // Limpiar alerta si el campo es válido
    }
    
     // Validación de contraseña
     if (!valPassword()) {
        user_password.style.border = "solid red medium";
        showAlert(user_password, `Contraseña inválida. Mínimo 8 caracteres, al menos 1 caracter especial, 1 mayúscula, 1 minúscula y 1 número.`); 
        is_valid = false;
    }else{
        clearAlert(user_password);
    }
    if (user_confirm_password.value.trim()==="") {
        user_confirm_password.style.border = "solid red medium";
        showAlert(user_confirm_password, `Campo vacio.`); 
        is_valid = false;     
    } else if (user_password.value.trim() != user_confirm_password.value.trim()){
        user_confirm_password.style.border = "solid red medium";
        showAlert(user_confirm_password, `La contraseña no coincide.`); 
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
            contraseña: user_password.value.trim(),
            bolsaDeCompras: []

        };

         localStorage.setItem(`${user_email.value.trim()}`,JSON.stringify(Usuario));

        User_name.value = "";
        user_email.value = "";
        user_phoneNumber.value = "";
        user_password.value = "";
        user_confirm_password.value = "";
        confirm_checkbox.checked = false;

        alert_container.insertAdjacentHTML("afterbegin",`
        <div class".alert">
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        </svg>
        <div class="alert alert-success d-flex justify-content-center align-items-center text-center" role="alert" style="height: 100px; background-color: #d4edda !important; color: #155724;">
        <svg class="bi flex-shrink-0 me-2" width="40" height="40" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div style="font-size: 40px;">
        ¡Su registro ha sido exitoso!
        </div>
        </div>
        </div>
            `)
        setInterval(function() {  //Cambiar a una página después de un cierto tiempo 
                window.location.href ="../login.html"; 
            },2000);
    
    }
    
});
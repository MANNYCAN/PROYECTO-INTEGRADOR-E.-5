let User_id = document.getElementById("User_id");
let user_email = document.getElementById("user_email");
let user_phoneNumber = document.getElementById("user_phoneNumber");
let user_message = document.getElementById("user_message");

let button_contactenos = document.getElementById("button_contactenos");

// Bandera para validar
let is_valid = true;

// URL del formulario para enviar datos
const formUrl = 'https://formspree.io/f/meojdblr';

// Función para validar número telefónico
function valPhone() {
    const phoneValid = user_phoneNumber.value.trim();
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phoneValid); 
}//valPhone

// Función para validar correo electrónico
function valEmail(email) {
    const emailValo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailValo.test(email);
}//valEmail

// Función para eliminar alerta
function clearAlert(element) {
    const alert = element.parentNode.querySelector('.alert_user');
    if (alert) {
        alert.remove(); 
    }
}//clearAlert

// Función para mostrar alerta
function showAlert(element, message) {
    clearAlert(element); 
    element.insertAdjacentHTML("afterend",`
        <div class="alert_user alert-danger d-flex align-items-center" role="alert" style="display: block;">
            <i class="bi bi-exclamation-triangle bi flex-shrink-0 me-2 " aria-label="Danger:"></i>
            <div>
                ${message}
            </div>
        </div>
    `);
}//clearAlert

// Evento click del botón de contacto
button_contactenos.addEventListener("click", function(event){
    event.preventDefault();
    User_id.style.border = "";
    user_email.style.border = "";
    user_phoneNumber.style.border = "";
    user_message.style.border = "";
    
    is_valid = true;
    
    // Validación del nombre
    if(User_id.value.trim().length < 3){
        User_id.style.border = "solid red medium";
        showAlert(User_id, `El nombre de usuario no es válido`); 
        is_valid = false;
    } else {
        clearAlert(User_id); // Limpiar alerta si el campo es válido
    }

    // Validación del teléfono
    if (!valPhone()) {
        user_phoneNumber.style.border = "solid red medium";
        showAlert(user_phoneNumber, `El número no es válido`); 
        is_valid = false;
    } else {
        clearAlert(user_phoneNumber); // Limpiar alerta si el campo es válido
    }

    // Validación del correo electrónico
    if (!valEmail(user_email.value.trim())) {
        user_email.style.border = "solid red medium";
        showAlert(user_email, `El correo no es válido`); 
        is_valid = false;
    } else {
        clearAlert(user_email); // Limpiar alerta si el campo es válido
    }

    // Validación del mensaje
    if (user_message.value.trim().length > 500) {
        user_message.style.border = "solid red medium";
        showAlert(user_message, `El mensaje es muy extenso`); 
        is_valid = false;
    } else {
        clearAlert(user_message);
    }

    // Si los datos son válidos, enviar el formulario
    if (is_valid) {
        // Datos a enviar
        const formData = {
            nombre: User_id.value.trim(),
            correo: user_email.value.trim(),
            telefono: user_phoneNumber.value.trim(),
            mensaje: user_message.value.trim()
        };

        // Enviar datos con fetch
        fetch(formUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json(); // Parsear la respuesta JSON
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Limpiar los campos después de enviar
            User_id.value = "";
            user_phoneNumber.value = "";
            user_email.value = "";
            user_message.value = "";
            User_id.focus();
            window.alert("SE HAN ENVIADO SUS DATOS CON ÉXITO"); 
        })
        .catch(error => {
            window.alert('Error:', error);
        });
    }
});
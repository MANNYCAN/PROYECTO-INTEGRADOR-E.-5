let User_id = document.getElementById("User_id");
let user_email = document.getElementById("user_email");
let user_phoneNumber = document.getElementById("user_phoneNumber");
let user_message = document.getElementById("user_message");
let alert_container = document.getElementById("container_alert")
let button_contactenos = document.getElementById("button_contactenos");

// Bandera para validar
let is_valid = true;

// URL del formulario para enviar datos
const formUrl = 'https://formspree.io/f/meojdblr';

// Función para validar número telefónico
function valPhone() {
    const phoneValid = user_phoneNumber.value.trim();
    const phoneRegex = /^(?!0\d{9})\d{10}$/;
    return phoneRegex.test(phoneValid); 
}//valPhone

// Función para validar correo electrónico
function valEmail(email) {
    const emailValo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailValo.test(email);
}//valEmail

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

// Evento click del botón de contacto
button_contactenos.addEventListener("click", function(event){
    event.preventDefault();
    clearAlert(alert_container);
    User_id.style.border = "";
    user_email.style.border = "";
    user_phoneNumber.style.border = "";
    user_message.style.border = "";
    
    is_valid = true;
    
    // Validación del nombre
    if(User_id.value.trim().length < 3){
        User_id.style.border = "solid red medium";
        showAlert(User_id, `El nombre de usuario debe tener al menos 3 caracteres.`); 
        is_valid = false;
    } else {
        clearAlert(User_id); // Limpiar alerta si el campo es válido
    }

    // Validación del teléfono
    if (!valPhone()) {
        user_phoneNumber.style.border = "solid red medium";
        showAlert(user_phoneNumber, `El número de teléfono debe tener un formato válido (e.g., 55XXXXXXXX).`); 
        is_valid = false;
    } else {
        clearAlert(user_phoneNumber); // Limpiar alerta si el campo es válido
    }

    // Validación del correo electrónico
    if (!valEmail(user_email.value.trim())) {
        user_email.style.border = "solid red medium";
        showAlert(user_email, `El correo electrónico debe tener un formato válido (e.g., ejemplo@dominio.com).`); 
        is_valid = false;
    } else {
        clearAlert(user_email); // Limpiar alerta si el campo es válido
    }

    // Validación del mensaje
    if (user_message.value.trim().length === 0) {
        user_message.style.border = "solid red medium";
        showAlert(user_message, `Por favor escribe algún mensaje`); 
        is_valid = false;
    }else if (user_message.value.trim().length > 500) {
        user_message.style.border = "solid red medium";
        showAlert(user_message, `El mensaje es muy extenso`); 
        is_valid = false;
    } else {
        clearAlert(user_message);
    }

    // Si los datos son válidos, enviar el formulario
    if (is_valid) {
        // Datos a enviars
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
                ¡Se han enviado sus datos con éxito.!
                </div>
                </div>
                </div>
                    `);
        })
        .catch(error => {
            alert_container.insertAdjacentHTML("afterbegin",`
            <div class".alert">
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol></svg>
            <div class="alert alert-danger d-flex justify-content-center align-items-center text-center" role="alert" style="height: 100px; background-color: #f8d7da !important; color: #721c24;">
            <svg class="bi flex-shrink-0 me-2" width="40" height="40" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill"/></svg>
            <div style="font-size: 40px;">
            Error ${error}
            </div>
            </div>
            </div>
                `);
            
        });
    }
});
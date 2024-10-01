const user_email= document.getElementById("user_email");
const user_password = document.getElementById("user_password");
const button_login = document.getElementById("button_login");
const alert_container = document.getElementById("alert-container");


let is_valid=true;





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

function clearAlert(element) {
    const alert = element.parentNode.querySelector('.alert');
    if (alert) {
        alert.remove(); 
    }
}//clearAlert


button_login.addEventListener("click", function(event){
    event.preventDefault();
    user_email.style.border = "";
    user_password.style.border = "";


    // Validación del nombre de usuario que no tenga campos 
    if(user_email.value.trim().length === 0){
        user_email.style.border = "solid red medium";
        showAlert(user_email, `Ingrese un nombre de usuario`); 
        is_valid = false;
    } else {
        clearAlert(user_email); // Limpiar alerta si el campo es válido
    }
    //Validación si el usario NO ingresó contraseña
    if(user_password.value.trim().length === 0){
        user_password.style.border = "solid red medium";
        showAlert(user_password, `Ingrese su contraseña`); 
        is_valid = false;
    } else {
        clearAlert(user_password); // Limpiar alerta si el campo es válido
    }
    //Validacion si el usuario se equivoca en alguna opcion 
    //Si se equivoca en el correo
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        array.push(key)
    }

    
    if(!array.includes(user_email.value.trim())){
        //user_password.style.border = "solid red medium";
        user_email.style.border = "solid red medium";
        showAlert(user_email, `Usuario no encontrado`); 
        user_password.value = "";
    } else { let contS=(JSON.parse(localStorage.getItem(user_email.value.trim()))).contraseña
        if(!(user_password.value.trim()===contS)){
            user_password.style.border = "solid red medium";
            //user_email.style.border = "solid red medium";
            showAlert(user_password, `La contraseña no coincide`); 
        }
    }//else
    
   

if(is_valid){
    for(let i =0;i<localStorage.length;i++){
        let key = localStorage.key(i); //Aqui tengo el user_email
        const value = JSON.parse(localStorage.getItem(key));
        let contraseñaUsuario= value.contraseña;// Aqui la contraseña
        if( key===user_email.value.trim() && contraseñaUsuario === user_password.value.trim()){
            alert_container.insertAdjacentHTML("afterbegin",`
                <div class".alert">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <div class="alert alert-success d-flex align-items-center" role="alert"  style="height: 100px;">
                <svg class="bi flex-shrink-0 me-2" width="40" height="40" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div style="font-size: 40px; text-align: center;">
                ¡Sesión iniciada!
                </div>
                </div>
                </div>
                    `)
                //alert_container.scrollIntoView({ behavior: "smooth", block: "start" });
            //Limpiar los campos
            localStorage.setItem('sesion_activa', JSON.stringify({
            email: user_email.value.trim(),
            name: (JSON.parse(localStorage.getItem(user_email.value.trim()))).nombre,
            timestamp: Date.now()}));
            user_email.value = "";
            user_password.value = "";
            setInterval(function() {  //Cambiar de página después de un tiempo
            window.location.href ="../index.html";
            },2000);
        }//if
    }//for
}//if_valid


})

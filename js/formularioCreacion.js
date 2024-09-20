const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const button_publicar = document.getElementById("button_publicar");
const imgId = document.getElementById("uploadedimage");

const cloudName = "dntc09dgq"; // replace with your own cloud name
const uploadPreset = "preset_Team5"; // replace with your own upload preset

const myWidget = cloudinary.createUploadWidget(
    {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    },
    (error, result) => {
    if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
        }
    }
);

const upload_widget =document.getElementById("upload_widget").addEventListener("click",function () {
    myWidget.open();
  },
  false
);



//Bandera
let is_valid = true;

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
}//showAlert



// Evento para subir la informacion 
button_publicar.addEventListener("click",function(event){
    event.preventDefault();

    productName.style.border = "";
    productPrice.style.border = "";
    productDescription.style.border = "";

    is_valid = true;

     // Validación del nombre del producto
     if(productName.value.trim().length < 3){
        productName.style.border = "solid red medium";
        showAlert(productName, `El nombre del producto no es válido`); 
        is_valid = false;
    } else {
        clearAlert(productName); // Limpiar alerta si el campo es válido
    }

    // Validar precio del producto
    let precio=Number(productPrice.value);
    if(precio==0 || precio<0){
        productPrice.style.border = "solid red medium";
        showAlert(productPrice, `El precio del producto no es válido`); 
        is_valid = false;
    }else{
        clearAlert(productPrice); // Limpiar alerta si el campo es válido
    }

     // Validación de la descripción
     if (productDescription.value.trim().length > 15 ) {
        productDescription.style.border = "solid red medium";
        showAlert(productDescription, `La descripción es muy larga`); 
        is_valid = false;
    } else if(productDescription.value.trim().length==0){
        productDescription.style.border = "solid red medium";
        showAlert(productDescription, `Agregue una descripción`); 
        is_valid = false;
    } else {
        clearAlert(productDescription);
    }

    if(is_valid){
    // Crear objeto JSON con la información del formulario
    const productData = {
    name: productName.value,
    img: 'https://m.media-amazon.com/images/I/31Dmajx-C3L._AC_SY580_.jpg',
    description: productDescription.value,
    price: parseInt(productPrice.value) // Convertir a número
    };

    // Convertir el objeto a formato JSON
    const jsonProductData = JSON.stringify(productData);

    // Guardar el objeto JSON en localStorage
    localStorage.setItem("productData", jsonProductData);

    }
    productName.value = "";
    productDescription.value = "";
    productPrice.value = "";
    //productImage.value = "";
    productName.focus();
    



});

//EN ESTA PARTE PONDRÉ EL CLOUDING






//AQUI TERMINA CLOUDING



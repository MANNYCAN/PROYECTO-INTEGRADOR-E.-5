const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const button_publicar = document.getElementById("button_publicar");
const containerImg = document.getElementById("containerImg");
const sucessAlert = document.getElementById("sucessAlert");
//Constantes para src
var imgId = document.getElementById("uploadedimage");
//var srcImg = imgId.src;



const cloudName = "dntc09dgq"; // replace with your own cloud name
const uploadPreset = "preset_Team5"; // replace with your own upload preset

//FUNCION CLOUDINARY
const myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    },
    (error, result) => {
    if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
        imgId.style.display = "inline-block";
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
let contaD=0;

//Arreglo en donde vamos a guardar los elementos registrados
//let arrayProductos =[];


//Funcion para crear un id
function generarIDUnico() {
    return Math.floor(Math.random() * 1000000);
}

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



// Evento para subir la informacion 
button_publicar.addEventListener("click",function(event){
    event.preventDefault();
    let id=0;
    productName.style.border = "";
    productPrice.style.border = "";
    productDescription.style.border = "";
    is_valid = true;

     // Validación del nombre del producto
     if(productName.value.trim().length < 3){
        productName.style.border = "solid red medium";
        showAlert(productName, `El nombre del producto debe tener al menos 3 caracteres.`); 
        is_valid = false;
    } else {
        clearAlert(productName); // Limpiar alerta si el campo es válido
    }

    // Validar precio del producto
    let precio=Number(productPrice.value);
    if(precio==0 || precio<0){
        productPrice.style.border = "solid red medium";
        showAlert(productPrice, `El precio debe ser mayor a 0.`); 
        is_valid = false;
    }else if(isNaN(productPrice.value)){
        productPrice.style.border = "solid red medium";
        showAlert(productPrice, `El precio debe ser un número válido, no se admiten letras.`); 
        is_valid = false;
    }else{
        clearAlert(productPrice); // Limpiar alerta si el campo es válido
    }

     // Validación de la descripción
     if (productDescription.value.trim().length > 70 ) {
        productDescription.style.border = "solid red medium";
        showAlert(productDescription, `La descripción es muy larga`); 
        is_valid = false;
    } else if(productDescription.value.trim().length==0){
        productDescription.style.border = "solid red medium";
        showAlert(productDescription, `Por favor, agregue una descripción del producto.`); 
        is_valid = false;
    } else {
        clearAlert(productDescription);
    }
    // Validar que la imagen esté cargada

    let srcImg = imgId.src; // Aquí accedes al valor del src de la imagen cargada
    console.log(srcImg);
    
    if (srcImg === "https://res-console.cloudinary.com/dntc09dgq/media_explorer_thumbnails/56fa97afe737c1301576f2d2ae1076df/detailed") {
        showAlert(containerImg, `Favor de cargar imagen`); 
        is_valid = false;
    } else {
        clearAlert(containerImg); // Limpiar alerta si el campo es válido
    }//ifvalidimg
    

    if(is_valid){
    // Crear objeto JSON con la información del formulario
    //imgId.style.display = "inline-block";
    imgId.remove();
    //aqui se remueve la imagen cuando se validan todos los campos
    id= generarIDUnico();
    contaD=contaD+1;
    const productData = {
        name: productName.value,
        img: srcImg,
        description: productDescription.value,
        price: parseInt(productPrice.value), // Convertir a número
        modelo: id  //id que lo ocuparemos cuando querrámos eliminar un elemento
    };
    //arrayProductos.push(productData)
    // Convertir el objeto a formato JSON
    const jsonProductData = JSON.stringify(productData);
    //arrayProductos.push(productData);

    // Guardar el objeto JSON en localStorage
    //localStorage.setItem(`${id}`, jsonProductData);
    //localStorage.setItem("holaa",JSON.stringify(arrayProductos));
    localStorage.setItem(`${localStorage.length}`,jsonProductData);
    productName.value = "";
    productDescription.value = "";
    productPrice.value = "";
    //productImage.value = "";
    productName.focus();
    sucessAlert.insertAdjacentHTML("afterbegin",`
        <div class".alert">
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        </svg>
        <div class="alert alert-success d-flex justify-content-center align-items-center text-center" role="alert" style="height: 100px; background-color: #d4edda !important; color: #155724;">
        <svg class="bi flex-shrink-0 me-2" width="40" height="40" role="img" aria-label="Success:">
        <use xlink:href="#check-circle-fill"/>
        </svg>
        <div style="font-size: 40px;">
        ¡Se publicó el producto EXITOSAMENTE!
        </div>
        </div>
        </div>
        `);

    }

});
/*  

    localStorage.setItem("holaa",JSON.stringify(arrayProductos)); */

//EN ESTA PARTE PONDRÉ EL CLOUDING






//AQUI TERMINA CLOUDING



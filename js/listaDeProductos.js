let productCard = document.getElementById("productCard");
const BotonFiltro=document.getElementById("BotonFiltro");
const prendaBusca = document.getElementById("prendaBusca");
const BotonTodo=document.getElementById("BotonTodo");
const carritoModal = document.getElementById("carritoModal");
const contadorCarritoC=document.getElementById("contadorCarritoC");

let arregloProductos= [];

////////////////////// Funcion de JC style="width: 18rem; height: 24rem;
function addItem(item) {

    function generarCalificacion() {
        return Math.ceil(Math.random() * 3 + 2); 
    }
    

    function mostrarEstrellas(numEstrella) {
        const estrella = `<i class="bii bi-star-fill" style="display: inline-block; margin: 0; padding-left: 3px;"></i>`;
        let estrellasHTML = '';
        for (let i = 0; i < numEstrella; i++) {
            estrellasHTML += estrella;
        }
        return estrellasHTML
    }

    const itemHTML = ` 
    <br>
    <div class="card" style="width: 18rem; display: flex; flex-direction: column; justify-content: space-between; align-items: center;  margin: 40px auto;">
  <div style="width: 100%; display: flex; justify-content: center;">
    <img src="${item.img}" class="card-img-top" alt="${item.name}" style="max-width: 100%; height: 300px; object-fit: cover;">
  </div>
  <div class="card-body" style="flex-grow: 1; width: 100%; display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
    <div>
      <h3 class="card-title">${item.name}</h3>
    </div>
    <p class="card-text descripcion">${item.description}</p>
    <div class="card-text descripcion">$ ${item.price} MXN ${mostrarEstrellas(generarCalificacion())}</div>
  </div>
  <button type="button" id=${item.modelo} class="btnCard" style="margin: 10px auto;" onclick="agregarProductosCarrito(event)" >Agregar a Carrito</button>   
</div>
`  //Agregar después la referencia a la página del articulo individual
    

    productCard.insertAdjacentHTML("beforeend", itemHTML);
    
}

addItem({
    name: "Tenis DDM",
    img: './assets/tennismuertos.png',
    description: "Tenis de gamuza edición día de muertos",
    price: 1500,
    modelo: 5467

});
arregloProductos.push({
    name: "Tenis DDM",
    img: './assets/tennismuertos.png',
    description: "Tenis de gamuza edición día de muertos",
    price: 1500,
    modelo: 5467

});
addItem({
    'name': 'Tenis DDM V2',
    'img': './assets/Tenismuertos2.png',
    'description': 'Tenis deportivos nego-morado ddm',
    'price': 2200,
    modelo: 12
})
arregloProductos.push(
    {
        name: 'Tenis DDM V2',
        img: './assets/Tenismuertos2.png',
        description: 'Tenis deportivos nego-morado ddm',
        price: 2200,
        modelo: 12
    }
)
addItem({
    'name': 'Sudadera DDM',
    'img': './assets/Sudaderadm.png',
    'description': 'Sudadera negra día de muertos',
    'price': 800,
    modelo: 13
});
arregloProductos.push(
    {
        name: 'Sudadera DDM',
        img: './assets/Sudaderadm.png',
        description: 'Sudadera negra día de muertos',
        price: 800,
        modelo: 13
    }
)
addItem({
    'name': 'Sudadera para mujer',
    'img': './assets/sud 1.jpg',
    'description': 'Sudadera deportiva para toda ocasión - Verde',
    'price': 250,
    modelo: 14
})
arregloProductos.push(
    {
        'name': 'Sudadera para mujer',
        'img': './assets/sud 1.jpg',
        'description': 'Sudadera deportiva para toda ocasión - Verde',
        'price': 250,
        modelo: 14
    }
)
addItem({
    'name': 'Suéter térmico',
    'img': './assets/sud 2.jpg',
    'description': 'Suéter térmico para soportar temperaturas frías - Negro',
    'price': 300,
    modelo: 15
});
arregloProductos.push(
    {
        'name': 'Suéter térmico',
        'img': './assets/sud 2.jpg',
        'description': 'Suéter térmico para soportar temperaturas frías - Negro',
        'price': 300,
        modelo: 15
    }
)
addItem({
    'name': 'Sudadera Azul',
    'img': './assets/sud 3.jpg',
    'description': 'Sudadera casual deportiva para correr - Azul Marino',
    'price': 350,
    modelo: 16
})
arregloProductos.push(
    {
        'name': 'Sudadera Azul',
        'img': './assets/sud 3.jpg',
        'description': 'Sudadera casual deportiva para correr - Azul Marino',
        'price': 350,
        modelo: 16
    }
)
addItem({
    'name': 'Camisa sin tirantes',
    'img': './assets/sud 4.jpg',
    'description': 'Camisa sin tirantes transpirable - Negro/Verde',
    'price': 200,
    modelo: 17
})
arregloProductos.push(
    {
        'name': 'Camisa sin tirantes',
        'img': './assets/sud 4.jpg',
        'description': 'Camisa sin tirantes transpirable - Negro/Verde',
        'price': 200,
        modelo: 17
    }
)
addItem({
    'name': 'Top diseñado para correr',
    'img': './assets/top 2.jpg',
    'description': 'Top para mujer - Negro',
    'price': 150,
    modelo: 18
});
arregloProductos.push(
    {
        'name': 'Top diseñado para correr',
        'img': './assets/top 2.jpg',
        'description': 'Top para mujer - Negro',
        'price': 150,
        modelo: 18
    }
)
addItem({
    'name': 'Top elástico',
    'img': './assets/top 1.jpg',
    'description': 'Top para mujer - Negro',
    'price': 150,
    modelo: 19
})
arregloProductos.push(
    {
        'name': 'Top elástico',
        'img': './assets/top 1.jpg',
        'description': 'Top para mujer - Negro',
        'price': 150,
        modelo: 19
    }
)
addItem({
    'name': 'Gorro para invierno',
    'img': './assets/gorra 1.jpg',
    'description': 'Gorro para correr diseñado para frías temperaturas- Verde militar',
    'price': 150,
    modelo: 20
});
arregloProductos.push(
    {
        'name': 'Gorro para invierno',
        'img': './assets/gorra 1.jpg',
        'description': 'Gorro para correr diseñado para frías temperaturas- Verde militar',
        'price': 150,
        modelo: 20
    }
)
addItem({
    'name': 'Gorra para correr',
    'img': './assets/gorra 2.jpg',
    'description': 'Gorra diseñada para correr  grandes distancias - Rosa',
    'price': 150,
    modelo: 21
})
arregloProductos.push(
    {
        'name': 'Gorra para correr',
        'img': './assets/gorra 2.jpg',
        'description': 'Gorra diseñada para correr  grandes distancias - Rosa',
        'price': 150,
        modelo: 21
    }
)
addItem({
    'name': 'Gorra deportiva',
    'img': './assets/gorra 4.jpg',
    'description': 'Gorra transpirable deportiva - Negra',
    'price': 150,
    modelo: 22
    
})
arregloProductos.push({
    'name': 'Gorra deportiva',
    'img': './assets/gorra 4.jpg',
    'description': 'Gorra transpirable deportiva - Negra',
    'price': 150,
    modelo: 22
    
})

function encontrarRegresarProductoPorId(array,id){ //Funcion para que me regrese un obj por medio de su modelo
    const encontrado = array.find(ob => ob.modelo === id);
    return encontrado;
}

//window.addEventListener("load", function(event){
let arrraP= [];   

    for (let i = 0; i < this.localStorage.length; i++) {
        let key = this.localStorage.key(i);
        const value = JSON.parse(this.localStorage.getItem(key));
        key=Number(key);
        arrraP[key]=value;
       
        
    }

    arrraP.forEach(element => {
        addItem(element);
    });


    arrraP.forEach(element => {
        if(element!==null){
            arregloProductos.push(element)
        }
    });
   
    

    //Subiremos arreglo total de productos al local, con el fin de que por medio de su id pueda identificarlos en el carrito
    localStorage.setItem("AllProducts", JSON.stringify(arregloProductos));
    
    
    /////// AQUI EMPIEZO A ESCIRBIR EL CODIGO PARA IMPLEMENTAR EL FILTRADO 
   

    BotonFiltro.addEventListener("click", function(event){
        event.preventDefault();
        if(prendaBusca.value!==""){
        while (productCard.firstChild) {
            productCard.removeChild(productCard.firstChild);
          }
        const filtrado = (productos = [], texto) => {
            return productos.filter(item => item.name.toLowerCase().trim().includes(texto.toLowerCase().trim()));
        }  
        const productosFiltrados = filtrado(arregloProductos, prendaBusca.value);
        productosFiltrados.forEach(i => addItem(i));
    }else{
        window.alert("Escribe algo")
    }
    });

    BotonTodo.addEventListener("click",function(event){
        event.preventDefault();
        while (productCard.firstChild) {
        productCard.removeChild(productCard.firstChild);}
        arregloProductos.forEach(i => addItem(i));
        prendaBusca.value="";
    });
    function iniciarConTodoCarrito(){
        if(localStorage.getItem("sesion_activa") !== null){
        let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
        let cont=(JSON.parse(localStorage.getItem(`${emaill}`))).bolsaDeCompras.length;

            contadorCarritoC.insertAdjacentHTML("afterbegin",
                `
                ${cont}
                <i class="bi bi-cart2"> </i>
                `
    
            );
        }
    }
    iniciarConTodoCarrito();


// Aqui empiezo a regirstra el progreso del boton de agregar a carrito
function agregarProductosCarrito(event){ //Agregue event para traer el id del boton ya que el id del boton estara asociado a el id del producto
    if(localStorage.getItem("sesion_activa") !== null){
        let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
       
        //(JSON.parse(localStorage.getItem(`${emaill}`))).contador++;
        //(JSON.parse(localStorage.getItem("sesion_activa"))).contador++;
         //Seccion para desarrollar la busqueda del producto en un arreglo del local storage y agregarlo a un arreglo que tiene como propiedad la persona
         const idDelBoton =parseInt(event.target.id);  //obtienes el id
         //window.alert((encontrarRegresarProductoPorId(arregloProductos,idDelBoton)).name)
       // window.alert(idDelBoton);
        //window.alert(arregloProductos[0].name + idDelBoton)
         //Ir por el producto
        let productoEncontrado=encontrarRegresarProductoPorId(arregloProductos, idDelBoton);
        //window.alert(productoEncontrado.name)
        let arregloConNuevoValor=(JSON.parse(localStorage.getItem(`${emaill}`))).bolsaDeCompras
        arregloConNuevoValor.push(productoEncontrado)
        

        
        let datos={
            nombre:(JSON.parse(localStorage.getItem(`${emaill}`))).nombre,
            correo:(JSON.parse(localStorage.getItem(`${emaill}`))).correo,
            telefono: (JSON.parse(localStorage.getItem(`${emaill}`))).telefono,
            contraseña: (JSON.parse(localStorage.getItem(`${emaill}`))).contraseña,
            bolsaDeCompras: arregloConNuevoValor
        }
        localStorage.setItem((JSON.parse(localStorage.getItem(`${emaill}`))).correo, JSON.stringify(datos))
        //window.location.reload();
        while (contadorCarritoC.firstChild) {
            contadorCarritoC.removeChild(contadorCarritoC.firstChild);
          }
        contadorCarritoC.insertAdjacentHTML("afterbegin",
            `
            ${arregloConNuevoValor.length}
            <i class="bi bi-cart2"> </i>
            `

        );
       


    }else{
        $('#carritoModal').modal('show');  // Para que se le aparezca un modal que le dice que debe de iniciar o regirstrase antes de agregar al carrito
    }   
};
//Funciones para redirigir a otra pagina cuando presionas los botones que salen cuando el usuario quiere agregar a carrito y no esta con sesion activa
function irAReferenciaRegistrar() {
    window.location.href = "../registroUsuarios.html";
}
function irAReferenciaInicioSesion() {
    window.location.href = "../login.html";
}





    //if(this.localStorage.getItem("productData")!=null){
       // nuevoArray = JSON.parse(this.localStorage.getItem("productData"));
        //arregloProductos.push(productData);
       //this.localStorage.setItem("productArray",JSON.stringify(arregloProductos));
       //addItem(productData);
       //this.localStorage.removeItem("productData");
       
       // let nuevoArray= JSON.parse(this.localStorage.getItem("productArray"));
      // window.alert("SE REGISTRO EL PRODUCTO CORRECTAMENTE);  ENVIADO SUS DATOS CON ÉXITO"); 
    //alertMensaje.innerHTML=`Hola, <strong>${this.localStorage.getItem("nombre")} </strong>, bienvenido/a de nuevo`;
    //}//if nombre!=null

    //alertMensaje.style.display="block"; //Para que se muestre, si esto solo agregas al div pero no lo muestra

//});//load

//for(let i=0; i<nuevoArray.length;i++){
    //addItem(nuevoArray[i])
//}
let productCard = document.getElementById("productCard");

//let arregloProductos= [];

////////////////////// Funcion de JC style="width: 18rem; height: 24rem;
function addItem(item) {
    const itemHTML = `     
    <br>
    
    <div class="card" style="width: 18rem; display: inline-flex;">
    <img src="${item.img}" class="card-img-top d-block mx-auto" alt="..." style="max-width: 300px; height:300px;">
    <div class="card-body">
    <h2 class="card-title">${item.name}</h2>
    <p class="card-text descripcion">${item.description}</p>
    <p class="card-text descripcion">$ ${item.price} <i class="bii bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    </p>
    <a href="#" class="btnCard">Agregar a Carrito</a>  
    </div>
    </div>`  //Agregar después la referencia a la página del articulo individual
    

    productCard.insertAdjacentHTML("beforeend", itemHTML);
}

addItem({
    name: "Calcetas",
    img: './assets/calcetas 1.jpg',
    description: "Calcetas transpirables - Gris",
    price: 250,

});

addItem({
    'name': 'Short',
    'img': './assets/short 1.jpg',
    'description': 'Short diseñado para correr - Gris',
    'price': 250
})

addItem({
    'name': 'Blusa',
    'img': './assets/sud 5.jpg',
    'description': 'Blusa diseñada para ejercicios de yoga - Negro',
    'price': 250
});
addItem({
    'name': 'Sudadera para mujer',
    'img': './assets/sud 1.jpg',
    'description': 'Sudadera deportiva para toda ocasión - Verde',
    'price': 250
})
addItem({
    'name': 'Suetér térmico',
    'img': './assets/sud 2.jpg',
    'description': 'Suetér térmico para soportar temperaturas frías - Negro',
    'price': 250
});

addItem({
    'name': 'Sudadera Azul',
    'img': './assets/sud 3.jpg',
    'description': 'Sudadera casual deportiva para correr - Azul Marino',
    'price': 250
})
addItem({
    'name': 'Camisa sin tirantes',
    'img': './assets/sud 4.jpg',
    'description': 'Camisa sin tirantes transpirable - Negro/Verde',
    'price': 250
})
addItem({
    'name': 'Top diseñado para correr',
    'img': './assets/top 2.jpg',
    'description': 'Top para mujer - Negro',
    'price': 250
});

addItem({
    'name': 'Top elástico',
    'img': './assets/top 1.jpg',
    'description': 'Top para mujer - Negro',
    'price': 250
})
addItem({
    'name': 'Gorro para invierno',
    'img': './assets/gorra 1.jpg',
    'description': 'Gorro para correr diseñado para frías temperaturas- Verde militar',
    'price': 250
    
})
addItem({
    'name': 'Gorra para correr',
    'img': './assets/gorra 2.jpg',
    'description': 'Gorra diseñada para correr  grandes distancias - Rosa',
    'price': 250
})
addItem({
    'name': 'Gorra deportiva',
    'img': './assets/gorra 4.jpg',
    'description': 'Gorra transpirable deportiva - Negra',
    'price': 250
    
})



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
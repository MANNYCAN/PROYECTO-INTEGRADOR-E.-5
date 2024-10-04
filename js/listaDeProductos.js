let productCard = document.getElementById("productCard");

//let arregloProductos= [];

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
  <a href="#" class="btnCard" style="margin: 10px auto;">Agregar a Carrito</a>    
</div>`  //Agregar después la referencia a la página del articulo individual
    

    productCard.insertAdjacentHTML("beforeend", itemHTML);
}

addItem({
    name: "Calcetas",
    img: './assets/calcetas 1.jpg',
    description: "Calcetas transpirables - Gris",
    price: 100,

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
    'price': 300
});
addItem({
    'name': 'Sudadera para mujer',
    'img': './assets/sud 1.jpg',
    'description': 'Sudadera deportiva para toda ocasión - Verde',
    'price': 250
})
addItem({
    'name': 'Suéter térmico',
    'img': './assets/sud 2.jpg',
    'description': 'Suéter térmico para soportar temperaturas frías - Negro',
    'price': 300
});

addItem({
    'name': 'Sudadera Azul',
    'img': './assets/sud 3.jpg',
    'description': 'Sudadera casual deportiva para correr - Azul Marino',
    'price': 350
})
addItem({
    'name': 'Camisa sin tirantes',
    'img': './assets/sud 4.jpg',
    'description': 'Camisa sin tirantes transpirable - Negro/Verde',
    'price': 200
})
addItem({
    'name': 'Top diseñado para correr',
    'img': './assets/top 2.jpg',
    'description': 'Top para mujer - Negro',
    'price': 150
});

addItem({
    'name': 'Top elástico',
    'img': './assets/top 1.jpg',
    'description': 'Top para mujer - Negro',
    'price': 150
})
addItem({
    'name': 'Gorro para invierno',
    'img': './assets/gorra 1.jpg',
    'description': 'Gorro para correr diseñado para frías temperaturas- Verde militar',
    'price': 150
    
})
addItem({
    'name': 'Gorra para correr',
    'img': './assets/gorra 2.jpg',
    'description': 'Gorra diseñada para correr  grandes distancias - Rosa',
    'price': 150
})
addItem({
    'name': 'Gorra deportiva',
    'img': './assets/gorra 4.jpg',
    'description': 'Gorra transpirable deportiva - Negra',
    'price': 150
    
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
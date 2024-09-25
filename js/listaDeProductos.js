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
    name: "t-shirt",
    img: 'https://static.vecteezy.com/system/resources/previews/007/375/417/non_2x/yellow-t-shirt-sport-jersey-design-vector.jpg',
    description: "Camiseta deportiva Lorem Ipsum - amarillo",
    price: 250,

});

addItem({
    'name': 'Polo Shirt',
    'img': 'https://static.vecteezy.com/system/resources/previews/030/549/791/non_2x/blue-pink-polo-sport-shirt-mockup-template-design-vector.jpg',
    'description': 'Camiseta deportiva Polo Lorem ipsum Azul-Coral',
    'price': 250
})

addItem({
    'name': 'Sweatshirt',
    'img': 'https://i.etsystatic.com/34486961/r/il/85664e/3710756254/il_fullxfull.3710756254_20o9.jpg',
    'description': 'Sweatshirt Lorem ipsum dolor sit amet-Negra',
    'price': 250
});
addItem({
    'name': 'Hoodie',
    'img': 'https://m.media-amazon.com/images/I/B1mEhjGJ2nL._CLa%7C2140%2C2000%7CB1DbPA8tJ5L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
    'description': 'Lorem ipsum dolor sit happens - Negra',
    'price': 250
})
addItem({
    'name': 'Zip-Up Hoodie',
    'img': 'https://gear.blizzard.com/cdn/shop/products/0017_OVERMS0016_B.jpg?v=1655226354',
    'description': 'Sudadera Overwatch - Negra',
    'price': 250
});

addItem({
    'name': 'Pants',
    'img': 'https://down-mx.img.susercontent.com/file/2795ac229047aa8806fd15bce994a83a',
    'description': 'Pants cómodo deportivo Casual Jogger Gym Con Bolsas',
    'price': 250
})
addItem({
    'name': 'Shorts Deportivos',
    'img': 'https://m.media-amazon.com/images/I/61O8LyjUH1L._AC_SX385_.jpg',
    'description': 'Short con banda elástica, malla forrada con bolsillos - Negro',
    'price': 250
})
addItem({
    'name': 'Shorts Deportivos',
    'img': 'https://www.ostu.com/dw/image/v2/BHFM_PRD/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dw1c56f2a3/images/hi-res/Todo/shorts-deportivos-mujer-40190209-3289_5.jpg?sw=700&sh=700',
    'description': 'Short corto running - Rosa',
    'price': 250
});

addItem({
    'name': 'Tenis Running',
    'img': 'https://resources.sears.com.mx/medios-plazavip/t1/171406873202jpg?scale=500&qlty=75',
    'description': 'Tennis running para mujer - Gris y rosa',
    'price': 250
})
addItem({
    'name': 'Tenis Running',
    'img': 'https://contents.mediadecathlon.com/p2153073/k$7afcb111890f17fe7bac5b717dc05e29/tenis-de-running-para-mujer-jogflow-500k1-negro.jpg?format=auto&quality=40&f=452x452',
    'description': 'Tennis running para mujer - Verde militar',
    'price': 250
    
})
addItem({
    'name': 'Gorro de ciclismo',
    'img': 'https://m.media-amazon.com/images/I/31Dmajx-C3L._AC_SY580_.jpg',
    'description': 'Gorro de cicliscmo eklaborado con licra - Negro, Gris',
    'price': 250
})
addItem({
    'name': 'Gorra deportiva',
    'img': 'https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDBOBVONJTSI/1500x1500/6439786074D95-Gorro-Script-Logo-Cap.webp',
    'description': 'Horra deportiva - Lila',
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
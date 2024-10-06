const tablaListaCompras=document.getElementById("tablaListaCompras");
const btnClear=document.getElementById("btnClear");
const totalEnProductos=document.getElementById("totalEnProductos");
const cantidadAPagar=document.getElementById("cantidadAPagar");
const contadorTabla=document.getElementById("contadorTabla");


/* 
function iniciar() {
    let emaill = (JSON.parse(localStorage.getItem("sesion_activa"))).email;
    let usuarioArreglo = (JSON.parse(localStorage.getItem(emaill))).bolsaDeCompras;

    // Actualizar la cantidad total de productos
    totalEnProductos.textContent = usuarioArreglo.length;

    // Reducir los objetos a un contador y mantener el orden con un índice
    const contador = usuarioArreglo.reduce((acc, obj) => {
        const key = JSON.stringify(obj);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    // Transformar el contador en un array de objetos, manteniendo el orden de inserción
    let resultado = Object.keys(contador).map(key => ({
        objeto: JSON.parse(key),
        repeticiones: contador[key],
    }));

    // Ordenar los productos por la propiedad `timestamp` o `id` para mantener el orden original
    resultado.sort((a, b) => a.objeto.timestamp - b.objeto.timestamp);

    // Actualizar el número de diferentes productos en la tabla
    contadorTabla.textContent = resultado.length;

    // Limpiar la tabla antes de agregar nuevos elementos
    tablaListaCompras.innerHTML = "";

    // Inicializar la suma total
    let suma = 0;

    // Insertar los nuevos valores en la tabla
    for (let i = 0; i < resultado.length; i++) {
        const { name, price, modelo } = resultado[i].objeto;
        const repeticiones = resultado[i].repeticiones;

        tablaListaCompras.insertAdjacentHTML("beforeend", `
            <tr>
               <td>${i + 1}</td>
               <td>${name}</td>
               <td>${repeticiones}</td>
               <td>$ ${price} MXN</td>
               <td>
                   <button type="button" data-id="${modelo}" title="Agregar" onclick="funcionIncrementar(this)">
                       <i class="bi bi-plus"></i>
                   </button>
                   <button type="button" data-id="${modelo}" title="Quitar" onclick="funcionDecrementar(this)">
                       <i class="bi bi-dash"></i>
                   </button>
               </td>
            </tr>
        `);

        // Calcular el total por producto y agregarlo a la suma
        suma += price * repeticiones;
    }

    // Mostrar la cantidad total a pagar
    cantidadAPagar.textContent = `$ ${suma} MXN`;
} */



/* function iniciar() {
    let emaill = (JSON.parse(localStorage.getItem("sesion_activa"))).email;
    let usuarioArreglo = (JSON.parse(localStorage.getItem(emaill))).bolsaDeCompras;

    // Actualizar la cantidad total de productos
    totalEnProductos.textContent = usuarioArreglo.length;

    // Reducir los objetos a un contador
    const contador = usuarioArreglo.reduce((acc, obj) => {
        const key = JSON.stringify(obj);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    // Transformar el contador en un array de objetos
    const resultado = Object.keys(contador).map(key => ({
        objeto: JSON.parse(key),
        repeticiones: contador[key],
    }));

    // Actualizar el número de diferentes productos en la tabla
    contadorTabla.textContent = resultado.length;

    // Limpiar la tabla antes de agregar nuevos elementos
    tablaListaCompras.innerHTML = "";

    // Inicializar la suma total
    let suma = 0;

    // Insertar los nuevos valores en la tabla
    for (let i = 0; i < resultado.length; i++) {
        const { name, price, modelo } = resultado[i].objeto;
        const repeticiones = resultado[i].repeticiones;

        tablaListaCompras.insertAdjacentHTML("beforeend", `
            <tr>
               <td>${i + 1}</td>
               <td>${name}</td>
               <td>${repeticiones}</td>
               <td>$ ${price} MXN</td>
               <td>
                   <button type="button" data-id="${modelo}" title="Agregar" onclick="funcionIncrementar(this)">
                       <i class="bi bi-plus"></i>
                   </button>
                   <button type="button" data-id="${modelo}" title="Quitar" onclick="funcionDecrementar(this)">
                       <i class="bi bi-dash"></i>
                   </button>
               </td>
            </tr>
        `);

        // Calcular el total por producto y agregarlo a la suma
        suma += price * repeticiones;
    }

    // Mostrar la cantidad total a pagar
    cantidadAPagar.textContent = `$ ${suma} MXN`;
}
 */







function iniciar(){
tablaListaCompras.innerHTML = "";
let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
let usuarioArreglo=(JSON.parse(localStorage.getItem(emaill))).bolsaDeCompras;

totalEnProductos.insertAdjacentHTML("afterbegin",` ${usuarioArreglo.length}`);


const contador = usuarioArreglo.reduce((acc, obj) => {
    // Convertir el objeto en una cadena de texto usando JSON.stringify
    const key = JSON.stringify(obj);
    
    // Si el objeto ya está en el acumulador (acc), incrementamos su contador
    if (acc[key]) {
      acc[key]++;
    } else {
      // Si no está, lo inicializamos con 1
      acc[key] = 1;
    }
  
    return acc; // Retornamos el acumulador en cada iteración
  }, {});

  const resultado = Object.keys(contador).map(key => ({
    objeto: JSON.parse(key),
    repeticiones: contador[key],
  }));

  resultado.sort((a, b) => a.objeto.modelo - b.objeto.modelo);  //ordenar
  contadorTabla.insertAdjacentHTML("afterbegin",`${resultado.length}`);

  let suma=0;
  for(let i=0;i<resultado.length;i++){

    tablaListaCompras.insertAdjacentHTML("beforeend",`
        <tr>
               <td>${i+1}</td>
               <td>${resultado[i].objeto.name}</td>
               <td>${resultado[i].repeticiones}</td>
               <td>$ ${resultado[i].objeto.price} MXN</td>
               <td> 
                <button type="button" data-id=${resultado[i].objeto.modelo} title="Agregar" onclick="funcionIncrementar(this)">
                <i class="bi bi-plus"></i>
                </button>
                <button type="button" data-id=${resultado[i].objeto.modelo} title="Quitar" onclick="funcionDecrementar(this)">
                <i class="bi bi-dash"></i>
                </button>
               </td> 
        </tr>
       `)

    let precio= resultado[i].objeto.price;
    let cant= resultado[i].repeticiones;
    let total=precio*cant;
    suma+=total;
 }
    cantidadAPagar.insertAdjacentHTML("afterbegin", `$ ${suma} MXN`);
}
iniciar();
btnClear.addEventListener("click",function(event){
    event.preventDefault();
    let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
    while (tablaListaCompras.firstChild) {
        tablaListaCompras.removeChild(tablaListaCompras.firstChild);
      }
    let usuarioArreglo=[]
    while (totalEnProductos.firstChild) {
        totalEnProductos.removeChild(totalEnProductos.firstChild);
      }
    while (cantidadAPagar.firstChild) {
        cantidadAPagar.removeChild(cantidadAPagar.firstChild);
      }
    while (contadorTabla.firstChild) {
        contadorTabla.removeChild(contadorTabla.firstChild);
      }
    let datos={
        nombre:(JSON.parse(localStorage.getItem(`${emaill}`))).nombre,
        correo:(JSON.parse(localStorage.getItem(`${emaill}`))).correo,
        telefono: (JSON.parse(localStorage.getItem(`${emaill}`))).telefono,
        contraseña: (JSON.parse(localStorage.getItem(`${emaill}`))).contraseña,
        bolsaDeCompras: usuarioArreglo
    }
    localStorage.setItem((JSON.parse(localStorage.getItem(`${emaill}`))).correo, JSON.stringify(datos))
})//limpiar 

 function encontrarRegresarProductoPorId(array,id){ //Funcion para que me regrese un obj por medio de su modelo
    const encontrado = array.find(ob => ob.modelo === id);
    return encontrado;
}


function funcionIncrementar(event){
    let idDelBoton =event.getAttribute('data-id')// parseInt(event.target.id);
    idDelBoton=parseInt(idDelBoton);
    //window.alert(idDelBoton+1);
    let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
    //window.alert(emaill)
    let usuarioArreglo=(JSON.parse(localStorage.getItem(emaill))).bolsaDeCompras;
    //window.alert(usuarioArreglo[0].name)
    
    let productoAAgregar=encontrarRegresarProductoPorId(JSON.parse(localStorage.getItem("AllProducts")),idDelBoton);
    //window.alert(productoAAgregar.price)
    usuarioArreglo.push(productoAAgregar);
    //window.alert(usuarioArreglo[5].name)


     
    let datos={
        nombre:(JSON.parse(localStorage.getItem(emaill))).nombre,
        correo:(JSON.parse(localStorage.getItem(emaill))).correo,
        telefono: (JSON.parse(localStorage.getItem(emaill))).telefono,
        contraseña: (JSON.parse(localStorage.getItem(emaill))).contraseña,
        bolsaDeCompras: usuarioArreglo
    }

    localStorage.setItem(emaill,JSON.stringify(datos));
    
    while (tablaListaCompras.firstChild) {
        tablaListaCompras.removeChild(tablaListaCompras.firstChild);
      }
    while (totalEnProductos.firstChild) {
        totalEnProductos.removeChild(totalEnProductos.firstChild);
      }
    while (cantidadAPagar.firstChild) {
        cantidadAPagar.removeChild(cantidadAPagar.firstChild);
      }
    while (contadorTabla.firstChild) {
        contadorTabla.removeChild(contadorTabla.firstChild);
    }
    iniciar();
}



function funcionDecrementar(event){

    let idDelBoton =event.getAttribute('data-id')// parseInt(event.target.id);
    idDelBoton=parseInt(idDelBoton);
    //window.alert(idDelBoton+1);
    let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
    //window.alert(emaill)
    let usuarioArreglo=(JSON.parse(localStorage.getItem(emaill))).bolsaDeCompras;
    //window.alert(usuarioArreglo[0].name)
    
    //let productoAAgregar=encontrarRegresarProductoPorId(JSON.parse(localStorage.getItem("AllProducts")),idDelBoton);
    //window.alert(productoAAgregar.price)
    //usuarioArreglo.push(productoAAgregar);
    //window.alert(usuarioArreglo[5].name)
    const index= usuarioArreglo.findIndex(obj => obj.modelo===idDelBoton);
    if(index !== -1){
        usuarioArreglo.splice(index, 1);
        
        let datos={
            nombre:(JSON.parse(localStorage.getItem(emaill))).nombre,
            correo:(JSON.parse(localStorage.getItem(emaill))).correo,
            telefono: (JSON.parse(localStorage.getItem(emaill))).telefono,
            contraseña: (JSON.parse(localStorage.getItem(emaill))).contraseña,
            bolsaDeCompras: usuarioArreglo
        }
        localStorage.setItem(emaill,JSON.stringify(datos));
    
        while (tablaListaCompras.firstChild) {
            tablaListaCompras.removeChild(tablaListaCompras.firstChild);
          }
        while (totalEnProductos.firstChild) {
            totalEnProductos.removeChild(totalEnProductos.firstChild);
          }
        while (cantidadAPagar.firstChild) {
            cantidadAPagar.removeChild(cantidadAPagar.firstChild);
          }
        while (contadorTabla.firstChild) {
            contadorTabla.removeChild(contadorTabla.firstChild);
          }
        iniciar();
    }


     
   

   
   

} 
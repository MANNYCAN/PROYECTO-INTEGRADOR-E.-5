const tablaListaCompras=document.getElementById("tablaListaCompras");
const btnClear=document.getElementById("btnClear");
const totalEnProductos=document.getElementById("totalEnProductos");
const cantidadAPagar=document.getElementById("cantidadAPagar");
const contadorTabla=document.getElementById("contadorTabla");


function iniciar(){

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
                <button onclick="funcionIncrementar(event)" id=${resultado[i].objeto.modelo}S>
                <i class="bi bi-plus"></i>
                </button>
                <button onclick="funcionDecrementar(event)" id=${resultado[i].objeto.modelo}R>
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
}//iniciar

iniciar(); //Iniciamos
 
btnClear.addEventListener("click",function(event){
    event.preventDefault();
    while (tablaListaCompras.firstChild) {
        tablaListaCompras.removeChild(tablaListaCompras.firstChild);
      }
    usuarioArreglo=[]
    while (totalEnProductos.firstChild) {
        totalEnProductos.removeChild(totalEnProductos.firstChild);
      }
    while (cantidadAPagar.firstChild) {
        cantidadAPagar.removeChild(cantidadAPagar.firstChild);
      }
    while (contadorTabla.firstChild) {
        contadorTabla.removeChild(contadorTabla.firstChild);
      }

    window.location.reload();
    let datos={
        nombre:(JSON.parse(localStorage.getItem(`${emaill}`))).nombre,
        correo:(JSON.parse(localStorage.getItem(`${emaill}`))).correo,
        telefono: (JSON.parse(localStorage.getItem(`${emaill}`))).telefono,
        contraseña: (JSON.parse(localStorage.getItem(`${emaill}`))).contraseña,
        bolsaDeCompras: usuarioArreglo
    }
    localStorage.setItem((JSON.parse(localStorage.getItem(`${emaill}`))).correo, JSON.stringify(datos))
})//limpiar 

/* function encontrarRegresarProductoPorId(array,id){ //Funcion para que me regrese un obj por medio de su modelo
    const encontrado = array.find(ob => ob.modelo === id);
    return encontrado;
}


function funcionIncrementar(event){
    let idDelBoton =(event.target.id).substring(0, (event.target.id).length - 1);
    idDelBoton=parseInt(idDelBoton);
    let emaill=(JSON.parse(localStorage.getItem("sesion_activa"))).email;
    let usuarioArreglo=(JSON.parse(localStorage.getItem(emaill))).bolsaDeCompras;
    let productoAAgregar=encontrarRegresarProductoPorId(JSON.parse(localStorage.getItem("AllProducts")),idDelBoton);
    usuarioArreglo.push(productoAAgregar);
    localStorage.setItem(emaill,usuarioArreglo);
    while (tablaListaCompras.firstChild) {
        tablaListaCompras.removeChild(tablaListaCompras.firstChild);
      }
    usuarioArreglo=[]
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
    let idDelBoton =(event.target.id).substring(0, texto.length - 1);
    idDelBoton=parseInt(idDelBoton);

} */
const localGuardar = (clave,valor) =>  {localStorage.setItem(clave,valor)};
const sesionGuardar = (clave,valor) =>  {sessionStorage.setItem(clave,valor)};

    /* ------ CICLOS Y ARRAY ------- */
    let btn = document.getElementById("btn");
    btn.addEventListener("click",capturar);

function capturar () { 
   function clientes (prestamo, tiempo,porcentaje,edad){
        this.prestamo = parseFloat (prestamo);
        this.tiempo = tiempo;
        this.porcentaje = parseFloat(porcentaje);
        this.edad = edad;
    }
    let prestamoCapturado = document.getElementById("prestamo").value;
    let tiempoCapturado = document.getElementById("duracion").value;
    let porcentajeCapturado = document.getElementById("porcentaje").value;
    let edadCapturado = document.getElementById("edad").value;

    nuevoCliente = new clientes (prestamoCapturado, tiempoCapturado, porcentajeCapturado, edadCapturado);
    console.log(nuevoCliente);

    agregar();
   
    /*---------- JSON & STORAGE --------- */
    let nom = document.getElementById("nombre").value;
    let apel = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
     
    localGuardar("nombre", nom.toUpperCase() );
    localGuardar("apellido", apel.toUpperCase());
    localGuardar("email",email);
    localGuardar("edad",edadCapturado);

    
    sesionGuardar("presupuesto",prestamoCapturado);
    sesionGuardar("duracion",tiempoCapturado);
    sesionGuardar("porcentaje",porcentajeCapturado);
}

       /*------- FUNCIONES Y DOM --------  */
 let num = 1;

const baseDatos = [];
function agregar (){

    resultado = ((nuevoCliente.prestamo * nuevoCliente.porcentaje)/100);
    pagoTotal = (nuevoCliente.prestamo + resultado);
    pagoMensual= (pagoTotal / (nuevoCliente.tiempo * 12));
    console.log(baseDatos);
    document.getElementById("table").innerHTML +='<tbody><td>'+ nuevoCliente.prestamo + '</td><td>' + resultado + '</td><td>'  + parseFloat(pagoMensual) + '</td><td>' + pagoTotal + '</td></tbody>';
    baseDatos.push (nuevoCliente);

    console.log(baseDatos);

    let cliente1 = baseDatos.filter ((el) => el.prestamoCapturado > 45000);
    let cliente2 = baseDatos.find ((el) => el.tiempoCapturado == "4"); 
    console.log(cliente1);
    console.log(cliente2);

    localGuardar("deudaMensual",pagoMensual);
    localGuardar("deudaTotal",pagoTotal);


    localStorage.clear();
    
      /* ------- PROMISE Y FETCH -------- */

      fetch ('https://reqres.in/api/users',{
        method:'POST',
        body: JSON.stringify({
            userId:num++,
            nombre :"nicolas",
            apellido:"alegre",
            email:"nicolasalegre4@gmail.com",
        }),
        
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
    .then ((response) => response.json())
    .then ((data) => console.log(data)) 

};

/* const lista = document.querySelector('#listado');

const pedirPosts = async () => {
    const resp = await fetch('./data.json')
    const data = await resp.json()
   
    data.forEach((data) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <h4>Moneda: ${data.monedaD}</h4>
        <p>Cotizacion Actual: ${data.cotizacionDOficialCompra}</p>
        <p>Cotizacion Actual: ${data.cotizacionDOficialVenta}</p>
        <hr/>
        `
        lista.append(li)
    })
}

pedirPosts() */


/* ----- EVENTOS ------ */
let boton = document.getElementById("menu")
boton.onmousedown = () =>{console.log("barra nav utilizada")};

let input1  = document.getElementById("nombre")
input1.addEventListener('input', () => {console.log(input1.value)})

let input2  = document.getElementById("apellido")
input2.addEventListener('input', () => {console.log(input2.value)})

let input3  = document.getElementById("email")
input3.addEventListener('input', () => {console.log(input3.value)})

let requisito1  = document.getElementById("requisito1");
let requisito2  = document.getElementById("requisito2");
requisito1.onchange = () => {console.log("Preguntas Frecuentes")};
requisito2.onchange = () => {console.log("Preguntas Frecuentes")}

let miFormulario = document.getElementById("btnPrestamo");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Prestamo Calculado");    
}

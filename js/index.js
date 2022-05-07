/* ------ CICLOS Y ARRAY ------- */
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
     
    const localGuardar = (clave,valor) =>  {localStorage.setItem(clave,valor)};
    localGuardar("Nombre", nom.toUpperCase() );
    localGuardar("Apellido", apel.toUpperCase());
    localGuardar("Email",email);
    localGuardar("Edad",edadCapturado);
    
    console.log(localStorage.getItem('Nombre'));
    console.log(localStorage.getItem('Apellido'));
    console.log(localStorage.getItem('Email'));
    console.log(localStorage.getItem('Edad'));

    const sesionGuardar = (clave,valor) =>  {sessionStorage.setItem(clave,valor)};
    sesionGuardar("Presupuesto",prestamoCapturado);
    sesionGuardar("Duracion",tiempoCapturado);
    sesionGuardar("Porcentaje",porcentajeCapturado);

    console.log(sessionStorage.getItem('Presupuesto'));
    console.log(sessionStorage.getItem('Duracion'));
    console.log(sessionStorage.getItem('Porcentaje'));
}

/*------- FUNCIONES Y DOM --------  */
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

    localStorage.setItem("Deuda Total",pagoTotal);
};



/* -------- OPERADORES AVANZADOS ------- */
baseDatos.edadCapturado > 18 ? console.log ("Está habilidado para tener un prestado") : console.log("Es menor de edad para un prestamo"); 
baseDatos.tiempoCapturado < 5 ? console.log("Tendrá una reducción de intereses") : console.log("No tendrá beneficios");

/* ------- PROMISE Y FETCH -------- */

fetch ('https://api.emailjs.com/api/v1.0/email/send',{
    method:'POST',
    body: JSON.stringify({
        nombre:localStorage.getItem('nombre'),
        apellido:localStorage.getItem('apellido'),
        id:"8",
        deudaTotal:"12000",
        email:localStorage.getItem('email')
    }),
    
    headers:{
        'Content-type': 'application/json;charset-UTF-8'
    },
})
.then ((response) => response.json())
.then ((data) => console.log(data))
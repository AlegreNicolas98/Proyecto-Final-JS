/* ------ CICLOS Y ARRAY ------- */
function capturar () { 
   function clientes (nombre, prestamo, tiempo, correo,porcentaje){
        this.nombre = nombre.toUpperCase();
        this.prestamo = parseFloat (prestamo);
        this.tiempo = tiempo;
        this.correo = correo;
        this.porcentaje = parseFloat(porcentaje);
    }
    let nombreCapturado = document.getElementById("nombre").value;
    let prestamoCapturado = document.getElementById("prestamo").value;
    let tiempoCapturado = document.getElementById("duracion").value;
    let correoCapturado = document.getElementById("correo").value;
    let porcentajeCapturado = document.getElementById("porcentaje").value;

    nuevoCliente = new clientes (nombreCapturado, prestamoCapturado, tiempoCapturado, correoCapturado,porcentajeCapturado);
    console.log(nuevoCliente);

    agregar();
}

/*------- FUNCIONES Y DOM --------  */
let baseDatos = [];
function agregar (){
    resultado = ((nuevoCliente.prestamo * nuevoCliente.porcentaje)/100);
    pagoTotal = (nuevoCliente.prestamo + resultado);
    pagoMensual= (pagoTotal / (nuevoCliente.tiempo * 12));
    baseDatos.push (nuevoCliente);
    console.log(baseDatos);
    document.getElementById("table").innerHTML +='<tbody><td>'+ nuevoCliente.nombre + '</td><td>' + nuevoCliente.prestamo + '</td><td>' + resultado + '</td><td>'  + parseFloat(pagoMensual) + '</td><td>' + pagoTotal + '</td></tbody>';
};


const cliente1 = baseDatos.filter ((el) => el.prestamoCapturado > 45000);
const cliente2 = baseDatos.find ((el) => el.tiempoCapturado === "12 meses"); 
console.log(cliente1);
console.log(cliente2);

const usuariosMail = baseDatos.map((el) => el.correoCapturado);
console.log(usuariosMail);

const morosos = baseDatos.map ((el) => el.nombreCapturado);
console.log(morosos);

/*---------- JSON & STORAGE --------- */
let usuario = localStorage.setItem("nombre", nombre);
usuario = localStorage.setItem("apellido", apellido);

let correo = localStorage.setItem("correo",usuariosMail);
const guardarSesion = (clave, valor) => { sessionStorage.setItem(clave, valor)}; 
guardarSesion("infoCliente", JSON.stringify(morosos));
guardarSesion ("prestamos", JSON.stringify(cliente1));
guardarSesion ("duracion", JSON.stringify(cliente2));
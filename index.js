let nombre = prompt ("¿Cual es tu nombre?");
alert ("Bienvenido " + nombre.toUpperCase() + " a Thora Bank");

function capturar () { 
   function clientes (nombre, prestamo, tiempo, correo){
        this.nombre = nombre.toUpperCase();
        this.prestamo = parseFloat (prestamo);
        this.tiempo = tiempo;
        this.correo = correo;
    }
    let nombreCapturado = document.getElementById("nombre").value;
    let prestamoCapturado = document.getElementById("prestamo").value;
    let tiempoCapturado = document.getElementById("duracion").value;
    let correoCapturado = document.getElementById("correo").value;

    nuevoCliente = new clientes (nombreCapturado, prestamoCapturado, tiempoCapturado, correoCapturado);
    console.log(nuevoCliente);

    agregar();
}

let baseDatos = [];
function agregar (){
    baseDatos.push (nuevoCliente);
    console.log(baseDatos);
    document.getElementById("table").innerHTML +='<tbody><td>'+ nuevoCliente.nombre + '</td><td>' + nuevoCliente.prestamo + '</td><td>' + nuevoCliente.tiempo +'</td></tbody>';
};

const cliente1 = baseDatos.filter ((el) => el.prestamoCapturado > 45000);
const cliente2 = baseDatos.find ((el) => el.tiempoCapturado === "12 meses"); 
console.log(cliente1);
console.log(cliente2);

const morosos = baseDatos.map ((el) => el.nombreCapturado);
console.log(morosos);
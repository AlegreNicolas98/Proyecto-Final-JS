let nombre = prompt ("¿Cual es tu nombre?");
console.log(nombre);

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
}





/* const solicitud1 = new solicitudes ({id:"juan", prestamo: 15000 , duracion:"12 meses"} );
const solicitud2 = new solicitudes ({id:"ricardo", prestamo: 50000, duracion: "24 meses"});
const solicitud3 = new solicitudes ({id:"florencia", prestamo: 100000, duracion: "48 meses"});
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

const clientes = [solicitud1, solicitud2, solicitud3];

const resultado = clientes.filter ((el) => el.prestamo > 45000);
const resultado2 = clientes.find ((el) => el.duracion === "12 meses"); 
console.log(resultado);
console.log(resultado2);

clientes.push({id:"rocio", prestamo: 150000, duracion:"72 meses"});
console.log(clientes);

const morosos = clientes.map ((el) => el.id);
console.log(morosos); */
let nombre = prompt ("¿Cual es tu nombre?");
alert ("tu nombre es " + nombre);

let prestamo =parseFloat (prompt ("¿Cuanto dinero estas necesitando?"));
console.log (prestamo);

let tiempo = parseFloat (prompt ("¿Durante cuantos meses queres pagar?"));
console.log (tiempo);


function credito (prestamo,interes,tiempo) {
    return ((prestamo*interes) /tiempo);
}

const credito1 = credito (prestamo,15,tiempo);
console.log ("Tendras que pagar $" + credito1 + " pesos por mes durante " + tiempo + " meses.");


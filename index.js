let nombre = prompt ("¿Cual es tu nombre?");
alert ("tu nombre es " + nombre);
let prestamo = prompt ("¿Cuanto dinero estas necesitando?");
console.log (prestamo);
let tiempo = prompt ("¿Durante cuantos meses queres pagar?");
console.log (tiempo);


function credito (prestamo,interes,tiempo) {
    return ((prestamo*interes) /tiempo);
}

const credito1 = credito (prestamo,15,tiempo);
console.log ("tendras que pagar " + credito1 + " por mes durante " + tiempo + " meses.");


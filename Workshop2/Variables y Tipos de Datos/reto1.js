const travel = prompt("¿Cuál es tu lugar de destino?").toLowerCase();
let x = 1;
let value_day = 500;

while (x < 2) {
    let days = prompt("¿Cuál es la cantidad de días que te quedarás?");
    let cash = prompt("¿Cuál es tu presupuesto?");
    let budget = days * value_day;
    if (cash < budget) {
        alert("No tienes el suficiente presupuesto, amigo.");
    } else {
        alert("Con tu presupuesto sí puedes viajar.");
        let change = prompt("¿Quieres cambiar algo? Si/No");
        if (change == "no") {
            alert(`Perfecto, ahora vas a viajar a ${travel} los próximos ${days} días.`);
            x += 1;
        } else if (change == "si") {
            alert("Listo, amigo. Comencemos de nuevo.");
        }
    }
}

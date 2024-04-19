let budgetInit = parseFloat(prompt("Ingresa tu presupuesto inicial"));
let budgetFood = parseFloat(prompt("Ingresa lo presupuestado para la comida"));
let budgetPlace = parseFloat(prompt("Ingresa lo presupuestado para el alojamiento"));
let budgetTrans = parseFloat(prompt("Ingresa lo presupuestado para el transporte"));
let budgetEmerge = parseFloat(prompt("Ingresa los gastos en caso de emergencia"));

let budgetGastos = budgetFood + budgetPlace + budgetTrans + budgetEmerge;
let budgetRest = budgetInit - budgetGastos;

alert(`Tu presupuesto restante es ${budgetRest}`);

let extraProducts = [];

let continuarComprando = true;

while (continuarComprando) {
    let move = prompt("¿Quieres seguir comprando? (si/no)").toLowerCase();

    if (move === "no") {
        alert("Gracias por la compra");
        continuarComprando = false;
    } else if (move === "si") {
        let nameArticle = prompt("¿Cuál es el nombre del producto?");
        let priceArticle = parseFloat(prompt(`¿Cuál es el precio de ${nameArticle}?`));

        if (budgetRest >= priceArticle) {
            extraProducts.push({ name: nameArticle, cost: priceArticle });
            budgetRest -= priceArticle;
            alert(`Te queda ${budgetRest}`);
        } else {
            alert("No tienes suficiente presupuesto para este artículo");
        }
    } else {
        alert("Por favor, responde 'si' o 'no'");
    }

   
}

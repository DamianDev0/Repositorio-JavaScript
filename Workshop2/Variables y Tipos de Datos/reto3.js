let budgetInit = parseFloat(prompt("Ingresa, Julian, tu presupuesto inicial"));
let budgetFood = parseFloat(prompt("Ingresa lo presupuestado para la comida"));
let budgetPlace = parseFloat(prompt("Ingresa lo presupuestado para el alojamiento"));
let budgetTrans = parseFloat(prompt("Ingresa lo presupuestado para el transporte"));
let budgetEmerge = parseFloat(prompt("Ingresa los gastos en caso de emergencia"));

let budgetGastos = budgetFood + budgetPlace + budgetTrans + budgetEmerge;
let budgetrest = budgetInit - budgetGastos;

alert(`Tu presupuesto restante es ${budgetrest}`);

let extraProducts = [];

let i = 0;

while (i !== 2) {
    let move = prompt("¿Quieres seguir comprando? (si/no)");

    if (move === "no") {
        alert("Gracias por la compra");
        i = 2;
    } else if (move === "si") {
        if (budgetrest > budgetEmerge) {
            alert("Puedes comprar otro artículo extra");
            let nameArticle = prompt("¿Cuál es el nombre del producto?");
            let priceArticle = parseFloat(prompt(`¿Cuál es el precio del ${nameArticle}?`));
            extraProducts.push({ name: nameArticle, cost: priceArticle });
            budgetrest -= priceArticle;

            alert(`Te queda ${budgetrest}`);
        } else {
            alert("No tienes suficiente presupuesto para comprar otro artículo extra");
            i = 2;
        }
    }
}

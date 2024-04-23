
//se le pregunta al usuario 
function chosee() {
    let budgetDay = parseFloat(prompt("Cuales el es tu presupuesto diario"));
    let out = parseFloat(prompt("cuanto es el presupuesto para salida / libros"));
    let saving = parseFloat(prompt("caunto quieres ahorrar?"));
    return { presupuesto: budgetDay, salida: out, ahorro: saving };
}

//se pregunta al usuario cuantos libros desea comprar y su costo
function books() {
    let numberBoks = parseFloat(prompt("cuantos libros quieres comprar"));
    let costBooks = parseFloat(prompt("cuanto cuestan los libros"));
    return { cantidadBooks: numberBoks, precioBooks: costBooks };
}

//se hace un calculo sobre las finanzas del usuario
function finace(book, budget) {
    const { presupuesto, salida, ahorro } = budget;
    const { cantidadBooks, precioBooks } = book;
    let budgetAllDays = presupuesto + salida + ahorro;
    let prestBooks = cantidadBooks * precioBooks;

    if (budgetAllDays > (prestBooks +budgetAllDays)) {
        alert("listo mi bro puedes comprar unos libros");
    } else {
        alert("no te alcanza maquinola");
    }
}

//se imprimen las funciones
let budget = chosee();
let book = books();

finace(book, budget);

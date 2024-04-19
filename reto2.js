function chosee() {
    let budgetDay = parseFloat(prompt("Cuales el es tu presupuesto diario"));
    let out = parseFloat(prompt("cuanto es el presupuesto para salida / libros"));
    let saving = parseFloat(prompt("caunto quieres ahorrar?"));
    return { presupuesto: budgetDay, salida: out, ahorro: saving };
}

function books() {
    let numberBoks = parseFloat(prompt("cuantos libros quieres comprar"));
    let costBooks = parseFloat(prompt("cuanto cuestan los libros"));
    return { cantidadBooks: numberBoks, precioBooks: costBooks };
}

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

let budget = chosee();
let book = books();

finace(book, budget);

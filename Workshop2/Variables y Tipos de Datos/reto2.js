let souvenirs = []; //lista vacia para ingresar los datos del usuario

let budget = parseFloat(prompt("Ingrese su presupuesto:")); //se le prunta al usuario su preusupuesto

//se pregunta los datos del souvenir
function getSouvenir() {
    let name = prompt("Ingrese el nombre del souvenir:");
    let cost = parseFloat(prompt("Ingrese el costo del souvenir:"));
    let available = prompt("El souvenir está disponible? (true/false)") === "true";

    return { name, cost, available };
}

// se le indica cual survenir desea comprar
function buySouvenir() {
    let option = prompt("Ingrese el número del souvenir que desea comprar (0 para salir):");
    while (option !== "0" && !isNaN(parseInt(option))) {
        let index = parseInt(option) - 1;
        if (souvenirs[index] && souvenirs[index].available) {
            if (budget >= souvenirs[index].cost) {
                alert(`Compraste ${souvenirs[index].name} por $${souvenirs[index].cost}.`);
                budget -= souvenirs[index].cost;
                alert(`budget restante: $${budget}`);
            } else {
                alert("No tienes suficiente presupuesto para comprar este souvenir.");
            }
        } else {
            alert("Souvenir no disponible.");
        }

        option = prompt("Ingrese el número del souvenir que desea comprar (0 para salir):");
    }
}


// se muestra los datos ingresados
function showsouvenirs() {
    console.log("Souvenirs ingresados:");
    souvenirs.forEach((souvenir, index) => {
        alert(`${index + 1}. name: ${souvenir.name}, cost: $${souvenir.cost}, available: ${souvenir.available}`);
    });
}

//se verifica si los tipos de datos ingresados son validos o no
function CheckindOfDates(souvenir) {
    if (typeof souvenir.name !== 'string' ||
        typeof souvenir.cost !== 'number' ||
        typeof souvenir.available !== 'boolean') {
        console.error("Error: Los tipos de datos ingresados no son válidos.");
        return false;
    }
    return true;
}



// Ingreso de souvenirs
let addMoreSouvenirs = true;
while (addMoreSouvenirs) {
    let nuevoSouvenir = getSouvenir();
    if (CheckindOfDates(nuevoSouvenir)) {
        souvenirs.push(nuevoSouvenir);
    }

    let continuar = prompt("Desea agregar otro souvenir? (true/false)");
    addMoreSouvenirs = continuar === "true";
}



// buy souvenirs
buySouvenir();

// Mostrar souvenirs ingresados
showsouvenirs();
``

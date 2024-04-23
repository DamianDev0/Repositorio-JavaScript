
//se pregunta el usuario para definir que cosas llevar
function state() {
    let weather = prompt("Como esta el clima el dia de hoy, soleado 0 lluvioso?").toLocaleLowerCase();
    let luggage = parseFloat(prompt("cual es el peso de tu maleta?"));
    let limit = parseFloat(prompt("cual es limite de el peso de la maleta?"));
    let trip = Number(prompt("cuantos son los dias que te vas a quedar mi bro?"));
    let spacerest = limit - luggage;
    alert(`el espacio disponible de tu maleta es de ${spacerest}`);

    let init = true;
// se evaluan los datos ngresads por el usuario en este ciclo while
    while (init == true) {
        if (luggage > limit) {
            alert("mi bro debe sacar cosas de esa maleta, estas sobrepasando el peso limite");
            break;
        }
        // si el dia es lluvioso el usuario debera llevar si o si la sombrilla
        if (weather == "lluvioso" && trip > 4) {
            alert(" con esa cantidad de dias te recomiendo que mejor lleves la sombrilla");
            let weigtumbrella = (parseFloat(prompt("cuanto es el peso de la sombrilla")));
            let less = spacerest - weigtumbrella;
            alert("el espacio disponible priorizando la sombrilla es de" + " " + less);

            if (spacerest <= limit) {
                let option = prompt(`quieres llevar otro objecto que no pese mas que  ${less} si/no`);
                if (option == "si") {
                    let productname = prompt("cual es el nombre del accesorio");
                    let productweigth = parseFloat(prompt(`cual es el peso de ${productname}`));
                    let less3 = less -= productweigth;
                    alert(`listo bro ahora se ha agregado el producto y el espacio que te queda disponible es de ${less3}`);
                    break;
                }
            }

        } // se define de que si el dia es soleado el uauario deberia llevar mas cosas
        if (weather == "soleado") {
            alert("tal vez deberias llevar un accesorio mas");
            let assets = (prompt("que accesorio quisieras llevar?"));
            let weigthAssets = (parseFloat(prompt("Cual es el peso de tu accesorio")));
            let less2 = spacerest -= weigthAssets;
            alert(`el espacio de tu maleta con el accesorio:${assets} ahora es de ${less2}`);

            if (less2 == 0) {
                alert("mi bro ya no puedes llevar nada mas");
                break;
            }
            continue;

        }
    }
}

state();
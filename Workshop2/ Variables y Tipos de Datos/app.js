// Reto 1: El Viaje de Julian

// Descripción: Julian está planificando un viaje y necesita un programa en JavaScript que lo ayude a organizar su itinerario.Este programa debe permitirle definir y ajustar el destino, la duración del viaje en días y el presupuesto estimado para el viaje.Es importante que Julian pueda modificar algunos de estos datos a medida que planifica,
//  mientras que otros permanecerán constantes.

// const viaje = "argentina";
// let dias = promt("cual es la cantidad de dias que te quedaras")
// let presupuesto = promt("cual es tu presupuesto")
// const costoDiario = prompt("cuanto sera el costo diario")

const travel = prompt("cual es tu lugar de destino").toLowerCase();
let x = 1;
let value_day = 500;


while( x < 2){
    let days = prompt("cual es la cantidad de dias que te quedaras");
    let cash = prompt("cual es tu presupuesto");
    let budget = days*value_day;
    if (cash<budget){
        alert("no tienes el suficiente presupuesto mi bro");
     }else{
        alert("con tu presupuesto si puedes viajar");
        let change = prompt("quieres cambiar algo si/no");
        if(change =="no"){
            alert(`perfecto ahora vas a viajar a ${travel} los proximos ${days} dias`);
            x+=1;
            if (change == "si"){
                alert("list0 mi bro comenzemos de nuevo");
            }
        }

     }
    
}

     







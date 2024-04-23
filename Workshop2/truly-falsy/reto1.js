function status(){ //se hace una funcion para ver los estados de nergia,clima,y trbajo
    let levelEnergy = prompt("¿Cuál es tu nivel de energía hoy? 0 para mal, 1 para bien");
    let weather = prompt("¿Cómo está el clima el día de hoy? 0 para mal, 1 para bien");
    let levelJob = prompt("¿Cuál es tu nivel de carga laboral? 0 para muy pesada, 1 para bien");

    return {levelEnergy, weather, levelJob};
}

// se hace la funcion para tomar la decision para el usuario
function test(){
    let testStatus = status();
    while(i != 1){
        alert("Ya hemos recopilado tus datos");
        if(testStatus.levelEnergy == "1" && testStatus.weather == "1" && testStatus.levelJob == "1"){
            alert("Listo, puedes salir a correr.");
            i = 1;
        }
        else if(testStatus.levelEnergy == "1" || testStatus.weather == "1" || testStatus.levelJob == "1"){
            alert("Mejor quédate haciendo proyectos profesionales.");
            i = 1;
        }
        else{
            alert("Tómate un break.");
            i = 1;
        }
    }
}

let i = 0;
test();

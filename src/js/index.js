//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Base } from "./component/base.jsx";


//render your react application

ReactDOM.render(<Home 
    startCounter={startCounter} 
    pauseInterval={pauseInterval} 
    resetInterval={resetInterval}
    />, document.querySelector("#app")
);

let myInterval;

let counter = 0;

function pauseInterval () {
    clearInterval (myInterval)
}

function resetInterval () {
    clearInterval (myInterval)
    counter = 0
    startCounter()
    setIsRunning(false);
}

function startCounter () { 
    clearInterval(myInterval); // Se detiene el intervalo anterior si está en ejecución,evita aceleración de los números al pulsar el mismo botón varias veces
    
    myInterval= setInterval(function () {
    const hours = Math.floor(counter / 3600); // Calcula las horas 1 hora=3600 seg
    const minutes = Math.floor(counter / 60) % 60; // Calcula los minutos 1 min=60 seg
    const seconds = counter % 60; // Calcula los segundos
  
    const six = Math.floor(hours / 10) % 10; // decenas de horas
    const five = hours % 10; // unidades de horas
    const four = Math.floor(minutes / 10) % 6; // decenas de minutos
    const three = minutes % 10; // unidades de minutos
    const two = Math.floor(seconds / 10) % 6; // decenas de segundos
    const one = seconds % 10; //unidades de segundos
  
    counter++;


    ReactDOM.render(<Base startCounter={startCounter} pauseInterval={pauseInterval} resetInterval={resetInterval} digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector('#app'))
}, 1000);
};


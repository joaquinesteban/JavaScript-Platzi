//Titulo
const h1 = document.querySelector("#titulo");

// Input
const calculo1 = document.querySelector("#input1");
const calculo2 = document.querySelector("#input2");


//Button
const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const divicion = document.querySelector("#divicion");
const multiplicacion = document.querySelector("#multiplicacion");

//Parrafo
const parrafito = document.getElementById("parrafito");

h1.innerHTML = "Calculadora Basica";

//Eventos

suma.addEventListener("click", calculadora1);
resta.addEventListener("click", calculadora2);
divicion.addEventListener("click", calculadora3);
multiplicacion.addEventListener("click", calculadora4);

function calculadora1() {
    let suma1 = parseInt(calculo1.value ) + parseInt(calculo2.value);
    return parrafito.innerText = 'El Resultado es '+ suma1;

}  

function calculadora2(){
    let resta1 = parseInt(calculo1.value ) - parseInt(calculo2.value);
    return parrafito.innerHTML = 'El resultado es '+ resta1;
}
 
function calculadora3(){
    let divicion1 = parseInt(calculo1.value ) / parseInt(calculo2.value);
    return parrafito.innerHTML = 'El resultado es '+ divicion1;
}

function calculadora4(){
    let multiplicacion1 = parseInt(calculo1.value ) * parseInt(calculo2.value);
    return parrafito.innerHTML = 'El resultado es ' + multiplicacion1;
}

  // parrafito.innerText = 'El Resultado es $ '+ sumaImput;

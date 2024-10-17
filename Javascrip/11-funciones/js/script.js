/*Funcion
Conjunto de instrucciones que se ejecutan cuando se las llama */
//Defiinit una funcion
function calculadora(){
    var mensaje = alert("Hola soy una funcion. me llaman para que haga funciones");
}
calculadora();

//Funciones donde se pide ingresar valor
function calcular (n1,n2, mostrar = false){
    if ( mostrar == false){
        alert("Tenes que activarme con true")
    }else {
        var suma = n1 + n2;
        return suma;
    }

}
var nr1 = parseInt(prompt("Ingrese el valor 1"));
var nr2 = parseInt(prompt("Ingrese el valor 2"));
var mostrar = parseInt(prompt("Mostrar"));
alert(calcular( nr1, nr2, mostrar));
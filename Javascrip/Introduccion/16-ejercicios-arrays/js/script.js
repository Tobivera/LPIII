/*Ejercicios array*/
'user strict'
/*
crear un programa que:
1 pida 6 numeros ingresados por pantalla
2 mostrar el array enteron en el cuerpo de la pagina
3 mostrar array ordenado
4 invertir el orden y mostrarlo
5 mostrar cuantos elementos tiene 
6 buscar el valor introducido por el usario y que nos muestre tambien su indice 
*/
//crear funcion para imprimir los resultados en el cuerpo de la pagina 
function mostrarArray(elementos, texto=""){
    document.write("<h1>Contenido del array"+ texto +"</h1>");
    var resultado = numeros.forEach((elementos, indice) => {
        document.write("<ul>")
        document.write("<li>"+ elementos+ "</li>")
        document.write("</ul>")
        });
}

var numeros = new Array(6);

for (var i = 0; i < numeros.length; i++){
    numeros[i] = parseFloat(prompt("Introduce nros"));
}
document.write("<h1>Contenido del array</h1>");
var resultado = numeros.forEach((valores) => {
document.write("<ul>")
document.write("<li>"+ valores+ "</li>")
document.write("</ul>")
});
console.log(numeros);
 
//mostrar y ordenarlo
var ordenar = numeros.sort(function(a,b) { return a-b});
console.log(ordenar);

//invertir el orden y mostrarlo
numeros.reverse();
//utilizar funcion creada anteriormente
mostrarArray(numeros, " En orden reverso ");

//mostrar cuantos elementos tiene 
document.write("<h1> El array tiene: "+ numeros.length+"</h1>");

//buscar el valor introducido por el usario y que nos muestre tambien su indice 
var busqueda = parseInt(prompt("Buscar un numero", 0));
var posición = numeros.findIndex(numeros => numeros == busqueda);
var valor = numeros.find(numeros => numeros == busqueda);
if(posición && posición !=-1){
    document.write("El valor es: "+valor+" y la posicion esta en: "+posición);
}else{
    document.write("No encontrado o no es un nro");
}
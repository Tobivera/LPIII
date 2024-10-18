/*Array arreglos matrices predeterminados en js*/
'user strict'
//variable normal
var nombre ="Tobias Vera";
/*Definir un array */
var nombres = ["juan Lopez", "Carlos Alcaras", "Gustavo Cerati","Carlos Spineta", 52, true
];
//otras formaas de establecer un array
var lenguajes = new Array("Java", "PHP", "Javascrip", "Python", "C++");
console.log(nombres);
console.log(lenguajes);

//acceder a elementos
console.log("El lenguaje 2 es: "+lenguajes[2]);

//Imprimir un elemento ingresando el numero de indice 
var seleccion = parseInt(prompt("Qué lenguaje seleccionar??",0));
if(seleccion>=lenguajes.length){
    alert("Introduce nro menor, no existe esa posición "+ lenguajes.length);
}else{
    alert(lenguajes[seleccion]);
}

//Recorrer array
//1for
document.write("<h1>Imprimir elementos con for</h1>");
document.write("<ul>");
for(var i=0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

//2 forech recomendada
document.write("<h1>Imprimir elementos con foreach</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, array) => {
    console.log(elemento);
    console.log(indice);
    console.log(array);
    document.write("<li>"+"El inidce es: "+indice+" = "+elemento+"</li>");
});
document.write("</ul>");

//3 recorrer con for in
document.write("<h1>Imprimir elementos con for in</h1>");
document.write("<ul>");
for(let lenguaje in lenguajes){
    document.write("<li>"+"El lenguaje es: "+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");




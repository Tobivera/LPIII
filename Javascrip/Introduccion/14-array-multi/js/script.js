/*Array multidimensionales predeterminados en js*/
'user strict'
var categorias =  ["z", "x", "Acción", "Comedia", "Terror"];
var peliculas =  ["Peli de accion", "peli comedia", "peli Terror"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

//1- operaciones con array
//1.1 añadir elementos push
peliculas.push("Batman");
console.log(peliculas);

//1.2- quitar elementos
peliculas.pop();
//peliculas.pop();
//peliculas.pop();
console.log(peliculas);

//1.3- añadir elementos con promt
var elemento="";
do{
    elemento=prompt("Introduce una peli: ");
    peliculas.push(elemento);
}while(elemento != "PARAR");

//1.4- Recorrer array y mostrar valores en pantalla
peliculas.forEach((pelis)=>{
    document.write("Peliculas: "+pelis+"<br>");
});

//2- Combertir array en texto
var pelistring = peliculas.join();
console.log(typeof pelistring, pelistring);

//3- Combertir texto a array
var cadena = "texto1, texto2, texto3";
cadena.split();
console.log(cadena.split());

//4- Ordenar array en orden alfabetico
categorias.sort();
console.log(categorias);

//Invertir orden reverse
peliculas.reverse();
console.log(peliculas);
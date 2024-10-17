/*Ejercicio
Utilizar un blucle y mostrar las medidas y el promedio de un usuario
hsata que el usuario ingrese un nro negativo  */

var suma =0;
contador=0;

do{
    var numero = parseInt(prompt('Ingrese nros hsta que ingrese un negativo',0));
    if (contador==3){
        alert('Si qieres parar ingrese un numero negativo');
    }
    if (isNaN(numero)){
        numero=0;
    }else if (numero >=0){
        suma= suma + numero;
        contador++
    }
    
}while (numero>=0){
    alert('La suma es '+suma);
    alert ('El promedio es:'+suma / contador);
}


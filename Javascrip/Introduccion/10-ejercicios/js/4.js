/*Ejercicio
Mostrar todos nros que son para pares e impares entre dos valores ingresados  */

'use sctrict'

var nro1 = parseInt(prompt('Ingrese el 1er valor'));
var nro2 = parseInt(prompt('Ingrese el 2er valor'));

while (nro1 < nro2){
    nro1++;
    if (nro1 % 2 != 0){
        document.write(nro1, 'Es impar<br>');

    }else if (nro1 % 2==0){
        document.write(nro1, 'Es par<br>')
    }
}



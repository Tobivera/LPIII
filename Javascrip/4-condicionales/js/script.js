/*condicionales */

var numero =8;
if(numero>10){
    alert('El numero es '+numero);
}
else if(numero==10){
    alert('Es numero es '+numero);

}
else{
    alert('El numero es '+numero);
}

//switch
var edad=81;
var imprimir="";

switch(edad){
    case 18:
        imprimir="Eres menor de edad";
        break;
    case 50:
        imprimir="Eres adulto";
        break;
    case 80:
        imprimir="Eres muy adulto";    
        break;
    default:
        imprimir="Tienes otra edad";    
}
document.write(imprimir);
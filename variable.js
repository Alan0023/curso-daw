//const y let
const precio1 = 5;                              //Esta variable nunca va a cambiar
const precio2 = 6;
let total = precio1 + precio2; //res = 11                 
//Esta varible puede cambiar
total= precio1 * 2 + precio2; //res = 16
//si tratamos de asignar nuevos valores a las variables constantes, ,nos dará un error
//y el código se detendra   





//números y strings
const pi= 3.14;     // sabemos que esta varible contendra un valor constante

let nombre = 'Alan'
let edad = '34';

console.log(edad + pi)      //suma de dos números res = 37.14
edad ='34';                 //ahora estoy escribiendo un número como un string
console.log(edad + pi)      // suma de número y string res = 343.14


//valor undefined
let coche;      //hemos declarado la variable pero no le hemos asignado ningún valor

console.log(coche); //
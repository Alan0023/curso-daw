
const palabras = [
    "perro",
    "conejo",
    "gato",
    "oso",
    "pollo",
    "langostino",
    "murcielago"
]
const pollo = [
    "p",
    "o",
    "l",
    "l",
    "o"

]


//Imprimir palabra
//Guardo el contenedor donde vamos a mostrar
let displayPalabra = document.getElementById('palabra');

//Elegimos una palabra del array
//Escojer un número al azar del 0 al 5
let random = Math.floor(); // 0 - 1 incluyendo decimales
random = Math.random() * palabras.length;
//redondeamos el valor de random para eliminar los decimales, creando así un número
//valido para el indice del array
random = Math.floor(Math.random() * palabras.length); // 0 - 5 sin decimales

//cada vez que se carga  la página, se selecciona un ítem del arrau con el ídice aleatorio
let palabra = palabras[random];

//Imprimir la palabra
// Contamos la longitud de la palapra(numero de letras que tiene)
let longitud = palabra.length;
//console.log(longitud);

//Declaro una variable para imprimir los guiones 
let texto = "";
for (let indice = 0; indice < longitud; indice++) {

    //Guardo un guion en la variable por cada letra que tiene nuestra palabra
    texto += "_";



}

// Se imprimen los guiones, ocultando la palabra de juego
displayPalabra.innerHTML = texto;

//Botones
//Vamos a asignar el evento click a cada botón desde JS
//Asi nos ahorramos tener que escribir en cada boton desde HTML


//con clases
//Seleccionamos todos los elementos que tengan una clase
//Al guardar elementos por clase, me los devuelve en un ARRAY
//const botones = document.getElementsByClassName('btn');


//Seleccionamos los hijos del div "tablero"
//Los hijos son todos los botones que contiene el div
const botones = document.getElementById('tablero').childNodes;

//Vamos añadir un Event Listener a cada botón
//Event Listener es asignarle un tipo de evento al elemento HTML que ejecutara
//un bloque de código cuando el evento se cumpla
//Por ejemplo, al hacer click sobre un boton o cuando pasemos el cursor por encima

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", juego)
}
//Declaramos un array en el que iremos guardando los aciertos
let aciertos = [];
//Contador aciertos
let contador = 0;
//Vidas del usuario, si se agotan pierde la partida
let vidas= 7;
//Digamos que tenemos la palabra "perro" y pulsamos la o 
//Queremos guardar aquellas letras que hemos acertado
let ejemplo = [
    "_", //p
    "_", //e
    "_", //r
    "_", //r
    "o"


]
//Entonces, seguidamente mostramos al usuario el contenido den pantalla que podemos 
//imprimir en pantalla  "_ _ _ _ o"

//si luego usamos la "r" el resultado quedaria
ejemplo = [
    "_", //p
    "_", //e
    "r",
    "r",
    "o",
]// Y si imprimimos los cambios el resulatado en la pantalla sería"_ _ r r o"

function juego() {
    console.log("Has pulsado un boton")

    //Tomamos el contexto del botón con this
    //Guardamos la letra que contiene el botón en una variable
    let letra = this.innerHTML;
    //Transformo la letra en minúscula
    letra = letra.toLowerCase();


    let exitos = 0;



    //Recorremos la palabra caracter a caracter, en busca de coincidencias.
    // con la letra pulsada
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i])

        //Comprobamos si la letra de la palabra coincide con la letra del btn
        if (palabra[i] == letra) {
            console.log("Hay una coincidencia")
            //Guardamos la letra acertada en el array de aciertos en la misma posicion que tiene la palabra
            aciertos[i] = letra;
            //Cada vez que hay un acierto, el contador aumenta
            contador++;
            //Contamos los exitos cada vez que pulsamos un boton
            exitos++;


        }
        else if (!aciertos[i]) {
            //Si entra en el else, es que no han habido coincidencias
            //La condicion if()solo se cumple cuando la posición array aun no tiene ningún valor
            aciertos[i] = "_";
        }
        console.log(texto);
        console.log(aciertos);


    }
     // Si no hay éxitos al pulsar el botón me resto una vida
     if (exitos == 0) {
        vidas--;
        this.style.backgroundColor = 'red';
    } else {
        this.style.backgroundColor = 'green';
    }
    

    //Creamos el string para imprimir en pantalla y le quitamos las comas del array
    //Sin el join la palabra "conejo" se vería "i,o,n,e,j,o"
    texto = aciertos.join("")
    displayPalabra.innerHTML = texto;

    console.log(letra);


    //Al final comprobamos si hemos ganado
    ganar();




}
//Creamos una función donde comprobemos si hemos ganado una partida y en ese caso,
//mostrar un anuncio
function ganar() {
    //Comprobar que el numero de aciertos es igual a la longitud de la palabra
    if (contador == palabra.length) {
        //mensaje de has ganado

        setTimeout(function () {
            // window.alert('has ganado')
            // location.reload();

        }, 1000)

    }

    //Comprobamos que ya no hay guiones vacios
    //Contador guiones
    let guiones = 0;

    //Recorremos el array de aciertos en busca de guiones
    for (let i = 0; i < aciertos.length; i++) {
        if (aciertos[i] == "_") {
            guiones++;
        }
    }

    //Si hemos contado los guiones y no hay, es porque la palabra esta completa y, por tanto, hemos ganado
    if (guiones == 0) {
        setTimeout(function () {
            window.alert('has ganado')
            location.reload();
        }, 1000)
    }

}



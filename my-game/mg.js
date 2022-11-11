const tabla = [
    "abaratar",
    "diluviar",
    "maltratar",
    "abarcar", 
    "diseminar",
    "correr", 
    "volar" , 
    "cantar", 
    "jugar", 
    "ayudar", 
    "silvar" ,
    "conversar" , 
    "recoger" , 
    "golpear"
];

let displayPalabra = document.getElementById('tablero')


let random = Math.floor();
random = Math.random() * tabla.length;

random = Math.floor(Math.random() * tabla.length);

let tablero = tabla[random];

let longitud = tablero.length;

let palabras = "";
for (let i = 0; i < longitud; i++) {
    
    palabras +="_";
}
displayPalabra.innerHTML = palabras;


const teclado = document.getElementById('tablero').childNodes;

for (let i = 0; i < botones.length; i++) {
   
    botones[i].addEventListener("click", juego)
}

let coincidencias = [];

let aciertos = 0;

function juego() {
    console.log("click")
    let letra = this.innerHTML;

    letra = letra.toLowerCase();
    let exitos = 0;

    for (let i = 0; i < tablero.length; i++) {
        
        console.log(tablero[i]);


        if(tablero[i]== letra){
            console.log("Has acertado :)")

            coincidencias[i] = letra;

            aciertos++;
            exitos++;


        }

        else if(!coincidencias[i]){
            coincidencias[i]="_";
        }
        
    }
    
}



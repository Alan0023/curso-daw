const display = document.getElementById('display');
const displayLetras = document.getElementById('displayLetras');

let texto = '';
let arrayNumeros = [];

// Queremos imprimir todos los números pares del 1 al 20

for (let i = 3; i < 100; i = i + 3) {
    texto += i + " ";
}

//Hacemos lo mismo pero del 100 al 0

texto = '';

for (let i = 100; i >= 3; i = i -1) {
    texto += i + " ";
    
}


display.innerHTML = texto;
console.log(arrayNumeros)

const letras = [
    "a",
    "e",
    "i",
    "o",
    "u"
]

texto = '';

for (let i = 0; i < letras.length; i++) {
    texto += letras[i] + " ";

}

displayLetras.innerHTML = letras.join(' ');
function calcularPropina() {
    // Tomamos los datos que ha introducido el usuario
    var cuenta = document.getElementById('cuentaTotal').value;
    var servicio = document.getElementById('calidadServ').value;
    var personas = document.getElementById('numPersonas').value;

    // Calculo la propina que debe pagar cada uno y lo guardo en una variable
    var resultado = cuenta * servicio / personas;

    // Accedo al elemento donde quiero imprimir el resultado
    var parrafo = document.getElementById('pResultado');
    resultado = resultado.toFixed(2);
   
    if(resultado > 0){
         // Lo muestro porque está oculto por defecto
    parrafo.style.visibility = 'visible';
    // Y lo relleno con el texto que quiero mostrar
    parrafo.innerHTML = resultado + "€ por persona";

    }
    // Imprimimos los datos en la consola
    console.log(cuenta + " €");
   
}


// Para obtener la propina hay que multiplicar el gasto por la calidad del servicio para obtener el correspondiente porcentaje y, por tanto, la propina total

// Seguidamente dividir la propina entre el número de comensales para obtener lo que debe pagar cada uno
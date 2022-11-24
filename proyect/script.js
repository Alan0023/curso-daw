//función sencilla
//
   document.body.style.background =color;
   console.log('has pulsado el boton') 
//} 
for (let i = 0; i < array.length; i++) {
    buttons[i].addEventListener('click',colores)
    
}
function colores(){
    let color =this.style.backgroundColor;
    document.body.style.background = color;
    console.log('has pulsado un boton');
    console.log(buttons);
}

function colorReset() {
    document.body.style.background = 'linear-gradient(90deg,rgb(41, 56, 97), black)';
}

   
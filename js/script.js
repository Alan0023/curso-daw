console.log('todo ok')
//El código númerico del border-radius
let outputcode = document.querySelector('.output-code');
//array con los sliders
const sliders = document.querySelectorAll('input[type="range"]');
//recorremos el array para asignar un evento a cada slider
sliders.forEach(function (slider) {
    slider.addEventListener('change', createBlod);
});
//array con input númericos
const inputs = document.querySelectorAll('input[type="number"]');

//asignamoso eventos a los inputs 
inputs.forEach(function (input) {
    input.addEventListener('change', createBlod);
})
//funcoión que crea un bold nuevo cada vez que alteremos un slider o input
function createBlod() {
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;


    //recogemos los valores numéricos de altura y anchura 
    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    //creamos una variable que reúna todos los valores
    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${radiusFour}%`

    //Escribimos el css del blob con los datos de los inputs
    document.querySelector('.output').style.cssText = 
    `border-radius:${borderRadius};
    height:${blobHeight}px;
    width:${blobWidth}px;`;


    //imprimimos en pantalla el valor del border-radius 
    document.querySelector('.output-code').innerHTML = `${borderRadius}`;

}

function copy(){
    var r = document.createRange();
    r.selectNode(outputcode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}


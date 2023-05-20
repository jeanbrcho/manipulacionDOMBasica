// seleccionamos las etiquetas del HTML, ID's o clases y las agremamos a una variable para poder usarlas y manipularlas con javascript
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");

// llamamos a la variable que seleccionó la etiqueta, ID o clase del HTMl y le aplicamos el escuchador de eventos, como parametros se pone el evento que quieres que escuche y la funcion que quieres que se ejecute sin los parentesis
btn.addEventListener("click", btnOnClick);


// esta es la funcion que se ejecutará
function btnOnClick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;
}
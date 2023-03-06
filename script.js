const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

btn.addEventListener('click', btnOnClick)
form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(evento) {
    //console.log({evento});
    //evento.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText
}

function btnOnClick() {
    let sumaInputs = input1.value + input2.value;
    console.log('Diste Click en el Boton');
    console.log(sumaInputs);
    pResultado.innerText = "Resultado: " + sumaInputs;
}


// con la función querySelector voy a seleccionar del HTML el H1

/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo'); // .parrafo
const pid = document.getElementById('pid'); // #pid
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});


//h1.innerHTML = "Instituto Superior Tecnologico <br>";
h1.innerText = "Instituto Superior Tecnologico <br>";


console.log(h1.getAttribute('class'));
//h1.setAttribute('Movil');
h1.classList.add('Tablet');
h1.classList.add('Movil');
h1.classList.remove('Desktop');
h1.classList.toggle('YouTube');

input.value = "Andy Velez";

const img = document.createElement('img');
img.setAttribute('src', 'https://m.media-amazon.com/images/I/51Z9wKv9cgL._UXNaN_FMjpg_QL85_.jpg');
console.log(img);
pid.append(img); 
//se representan lo seleccionado y colocado en las constantes
//diferentes formas de representar la info.
/*console.log(h1);
console.log(p);
console.log(parrafo);
console.log(pid);
console.log(input); */
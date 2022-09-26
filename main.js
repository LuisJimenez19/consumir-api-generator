'use strict'
// /* Usa el metodo get por defecto */
// let request = fetch('https://api.adviceslip.com/advice')


/* seleccionar los elementos */

const adviceContainer = document.querySelector('.advice'); /* Contenedor donde van los consejos y el indice */
const btnGenerator = document.querySelector('.btnGenerator'); /* Boton que lleva toda la interactividad */
const modalError = document.querySelector('.errorModal-background');

btnGenerator.addEventListener('click', () => {
    /* Le doy la clase para animarlo, y después se la quito */
    btnGenerator.classList.add('btnGenerator--active');
    setTimeout(() => {btnGenerator.classList.remove('btnGenerator--active');}, 300)

    /* Hago la peición y dibujo */
    getAdvice()
})


const getAdvice = async () => {
    let data; /* almacena el json de la petición */

    let request = await fetch('https://api.adviceslip.com/advice').catch((e)=> modalError.classList.toggle('d-none'))

    data = await request.json()
    
    
    let index = data.slip.id 
    let advice = data.slip.advice

    adviceContainer.innerHTML = 
    `<h1 class="advice__title">Advice <span id="indexAdvice">#${index}</span> </h1>
    <p class="advice__paragraph">"${advice}"</p>`
    
}

modalError.addEventListener('click', () => {
    modalError.classList.toggle('d-none')
})








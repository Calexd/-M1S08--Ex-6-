let color = document.getElementById('colorInput');
let button = document.getElementById('buttonClass');
let classToClass = document.querySelectorAll('.elements')

console.log(classToClass)

button.addEventListener('click', () => {
    classToClass.forEach(elemento => {
        elemento.classList.add('globotexto')
    })
});



const main = document.querySelector('main')
const btnMain = document.getElementById('btn-main')

const btn = document.getElementById('btn-header')

btn.addEventListener('click', ()=>{
    const newElement = createButton()
    main.appendChild(newElement)
})

function createButton() {
    const newElement = document.createElement('button')
    newElement.textContent = 'Click me'
    newElement.classList.add('btn', 'btn-success')
    newElement.type = 'submit'
    return newElement
}

function btnDelete() {
    
}


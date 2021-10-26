const openModalButtons = document.querySelectorAll('[data-modal-target')
const closeModalButtons = document.querySelectorAll('[data-close-button')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = button.closest(".modal")
        openModal(modal)            
    })
})
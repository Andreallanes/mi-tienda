const $form= document.querySelector('#form')
const $buttonMailto= document.querySelector('#emailP')

form.addEventListener('submit', handleSubmit)
function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href',`mailto:?subject= Nombre:${form.get('fullname')}   Correo:${form.get('email')}  Peli:${form.get('peli')}&body=   Opinion:${form.get('reseña')}`)
    $buttonMailto.click()
}
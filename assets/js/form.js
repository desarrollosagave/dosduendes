const sendForm = document.querySelector('#f25a5fab_id input[type=submit]');
sendForm.setAttribute('id', 'sendForm');
sendForm.removeAttribute('style');
/* console.log('boton', sendForm); */

const inputsForm = document.querySelectorAll('#f25a5fab_id input');
const inputTextAreaForm = document.querySelector('#f25a5fab_id textarea');
inputTextAreaForm.setAttribute('class', 'inputsForm');
inputTextAreaForm.removeAttribute('style');

inputsForm.forEach(function (element) {
    element.setAttribute('class', 'inputsForm');
    element.removeAttribute('style');
});
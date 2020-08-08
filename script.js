document.querySelector('#button-login').addEventListener('click', function () {
  const inputEmail = document.querySelector('#user-email-phone').value;
  alert(inputEmail);
});

function personalizedGender() {
  if (!document.querySelector('#gender-custom')) {
    const newGenre = document.createElement('input');
    newGenre.name = 'gender-custom';
    newGenre.id = 'gender-custom';
    newGenre.placeholder = 'Gênero (opcional)';
    document.querySelector('.label-gender').parentNode.appendChild(newGenre);
  }
}
document.querySelector('.Personalizado').addEventListener('click', personalizedGender);

function removeCustom() {
  if (document.querySelector('#gender-custom')) {
    document.querySelector('#gender-custom').parentNode.removeChild(document.querySelector('#gender-custom'));
  }
}

function getInputs() {
  const arrayAux = document.querySelectorAll('input');
  const inputs = [];

  for (let i = 2; i < arrayAux.length; i += 1) {
    if (arrayAux[i].type !== 'radio') {
      inputs.push(arrayAux[i]);
    } else if (arrayAux[i] === 'radio' && arrayAux[i].checked) {
      inputs.push(arrayAux[i]);
    }
  }
  return inputs;
}

function checkValues(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      document.querySelector('.input-error').innerHTML = 'Campos inválidos';
    }
  }
}

document.querySelector('#Feminino').addEventListener('click', removeCustom);
document.querySelector('#Masculino').addEventListener('click', removeCustom);

const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const teste = getInputs();
  checkValues(teste);
});

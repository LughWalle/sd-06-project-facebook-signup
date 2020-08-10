document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));

function setNewErrorMsg(formField) {
  if (formField.value === '') {
    document.querySelector('#error-field').innerHTML = 'Campos inválidos';
  } else {
    const registerName = document.querySelector('#first-name').value;
    const registerLastname = document.querySelector('#last-name').value;
    document.querySelector('.right-content').innerHTML = `Olá, ${registerName} ${registerLastname}`;
  }
}

const formFields = document.querySelectorAll('.form-input');

document.querySelector('#facebook-register').addEventListener('click', () => {
  event.preventDefault();
  formFields.forEach(setNewErrorMsg);
});

document.querySelector('#gender-custom').addEventListener('click', () => {
  const customGenderInput = document.createElement('input');
  Object.assign(customGenderInput, {
    id: 'gender-custom-input',
    type: 'text',
    placeholder: 'Gênero (opcional)',
    name: 'gender-custom',
  });
  document.querySelector('#gender-custom-span').appendChild(customGenderInput);
});

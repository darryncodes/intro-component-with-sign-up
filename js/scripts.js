'use strict';

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();

  // reset form and remove success class
  setTimeout(function () {
    document.getElementById('form').reset();

    const removeSuccess = document.querySelectorAll('.form__group.success');
    [].forEach.call(removeSuccess, function (x) {
      x.classList.remove('success');
    });
  }, 2000);
});

function checkInputs() {
  // get the values from the inputs

  // trim to remove the whitespace
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    // show error
    // add error class
    setErrorFor(firstName, 'First Name cannot be empty');
  } else {
    // add success class
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty');
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement; // .form__group
  const small = formGroup.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formGroup.className = 'form__group error';
}

function setSuccessFor(input) {
  const formGroup = input.parentElement; // .form__group
  formGroup.className = 'form__group success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

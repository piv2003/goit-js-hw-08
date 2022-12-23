import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formData = {};//all input data in two fields

//getting refers for placing listeners and controlling input by fields
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textInput: document.querySelector('.feedback-form textarea'),
};

//placement of listeners &  control of access to the "local storage" no more than 500ms 
refs.form.addEventListener('input', throttle(setFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

//getting "parsed" data from "local storage" by Кey, with filling both input fields
getFormData();
function getFormData() {
  const formValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!formValues) return;
  refs.emailInput.value = formValues.email;
  refs.textInput.value = formValues.message;
}

//writing data of both form fields to "local storage" by Key in JSON format
function setFormData() {
  formData.email = refs.emailInput.value;
  formData.message = refs.textInput.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//output to the console contents of the fields upon submission. 
//clearing fields and "local storage".
function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
}


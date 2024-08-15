const feedbackFormEl = document.querySelector('.js-feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  const formDataFromLSKeys = Object.keys(formDataFromLS);
  for (const key of formDataFromLSKeys) {
    feedbackFormEl.elements[key].value = formDataFromLS[key];
  }
};

fillFormFields();

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (
    feedbackFormEl.elements.email.value.trim() === '' ||
    feedbackFormEl.elements.message.value.trim() === ''
  ) {
    alert('Fill all fields');
    return;
  }

  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form');
  formData = { email: '', message: '' };
};
feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

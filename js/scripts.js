
function validEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showError() {
  document.querySelector('.email__error').classList.add('error');
  document.querySelector('.email__error').classList.remove('hidden');
  document.querySelector('input').classList.add('error');
}
function removeError(){
  document.querySelector('.email__error').classList.remove('error');
  document.querySelector('.email__error').classList.add('hidden');
  document.querySelector('input').classList.remove('error');
}
function showSignup(){
  document.querySelector('.container').classList.remove('hidden');
  document.querySelector('.success').classList.add('hidden')
}
function showSuccess() {
  document.querySelector('.success').classList.remove('hidden')
  document.querySelector('.container').classList.add('hidden')
}
function subscribeClick(event){
  event.preventDefault();
  const email = document.getElementById('email').value;
  if (validEmail(email) === true) {
    showSuccess();
    removeError();
    document.getElementById('successMail').innerHTML = email
  }else{
    showError
  }
}
function dismissButton(event) {
  showSignup();
  document.getElementById('signupForm').reset();
}
document.querySelector('#signupForm').addEventListener(
  'submit',subscribeClick
)
document.getElementById('email').addEventListener(
  'blur',
  function (event) {
    const email = document.getElementById('email').value;
    if (validEmail(email) === true) {
      showSuccess();
      removeError();
      document.getElementById('successMail').innerHTML = email
  }else{
      showError();
  }
  }
)
document.getElementById('dismissButton').addEventListener(
  'click',dismissButton
)
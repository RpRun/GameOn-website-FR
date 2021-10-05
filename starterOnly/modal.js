function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector(".close")
const submit = document.querySelector(".btn-submit")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE MODAL FORM
const closeModal = () => {
  modalbg.style.display = "none";
}
// add event click to launch closeModal()
cross.addEventListener('click', closeModal);

// FORM

const form = document.querySelector('form')
const inputfirstName = document.querySelector('#first')
const inputlastName = document.querySelector('#last')

const inputEmail = document.querySelector('#email')
const inputBirthDate = document.querySelector('#birthdate')
const inputQuantity = document.querySelector('#quantity')
//inputLocations = checkedRadios
const inputLocations = document.querySelector(':checked')

const inputAcceptTermsOfUses = document.querySelector('#checkbox1')
const inputSignInNewsLetter = document.querySelector('#checkbox2')



// SUBMIT TIME

form.addEventListener('submit', (event) => {
  // prevent default action
  event.preventDefault();
 

  console.log(inputfirstName.value);
  console.log(inputlastName.value);

  console.log(inputEmail.value);
  
  console.log(inputBirthDate.value);
  console.log(inputQuantity.value);

  console.log(inputLocations.value);


  console.log(inputAcceptTermsOfUses.value);

  console.log(inputSignInNewsLetter.value);

// FirstName
  if (inputfirstName.value.length > 2) {
    console.log('ok');
    // isValid = true;
  }
  else {
    console.log('pas ok');
    // isValid = false;
  }
// LastName
  if (inputlastName.value.length > 2) {
    console.log('ok');
  }
  else {
    console.log('pas ok');
  }

// MailForm  validation

const validateMailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (inputEmail.value.match(validateMailForm)) {
  console.log('mail ok');
//   alert("Mail ID format is approved!");
// document.mailForm.mailText.focus();
// return true;
} else {
  console.log('mail pas boooonnn');
// alert("Mail ID format is not approved!");
// document.mailForm.mailText.focus();
// return false;
}

// Birthdate validation

// Quantity of tournament participation validation
const validateQuantity = /^[0-9]/;

if (inputQuantity.value.match(validateQuantity)) {
  console.log('ok la quantitee');
} else {
  console.log('no no nooo la quantitee');
}
 // SignInNewsLetter
 const elements = document.getElementsByName('location');
 for ( let i=0;i<elements.length;i++) {
  //  if(elements[i].value == "clean") {
  //    elements[i].checked = true;
  //  }
  console.log('mais pouet')
 }

});

// SUBMIT MODAL FORM
const submitModal = () => {
  console.log('modal submit')
}
// add event click to launch submitModal()
  submit.addEventListener('click', submitModal);










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
const inputFirstName = document.querySelector('#first')
const inputLastName = document.querySelector('#last')

const inputEmail = document.querySelector('#email')
const inputBirthDate = document.querySelector('#birthdate')
const inputQuantity = document.querySelector('#quantity')
//inputLocations = checkedRadios if  = document.querySelector(':checked') 
const inputLocations = document.querySelector(':checked')

const inputAcceptTermsOfUses = document.querySelector('#checkbox1')
const inputSignInNewsLetter = document.querySelector('#checkbox2')

// SUBMIT TIME

form.addEventListener('submit', (event) => {
  // prevent default action
  event.preventDefault();
 
  console.log(inputBirthDate.value);
  console.log(inputAcceptTermsOfUses.value);
  console.log(inputSignInNewsLetter.value);

// FirstName
  if (inputFirstName.value.length > 2) {
    console.log('ok le prénom:' , inputFirstName.value );
    // isValid = true;
  }
  else {
    console.log('pas ok veuillez renseigner votre prénom');
    // isValid = false;
  }
// LastName
  if (inputLastName.value.length > 2) {
    console.log('ok le nom:', inputLastName.value);
  }
  else {
    console.log('pas ok veuillez renseigner votre nom');
  }

// MailForm  validation

const validateMailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (inputEmail.value.match(validateMailForm)) {
  console.log('mail ok:', inputEmail.value);
//   alert("Mail ID format is approved!");
// document.mailForm.mailText.focus();
// return true;
} else {
  console.log('veuillez rentrer un mail valide');
// alert("Mail ID format is not approved!");
// document.mailForm.mailText.focus();
// return false;
}

// Birthdate validation

// Quantity of tournament participation validation
const validateQuantity = /^[0-9]/;

if (inputQuantity.value.match(validateQuantity)) {
  console.log('ok la quantitee:', inputQuantity.value);
} else {
  console.log('no no nooo la quantitee:', 'veuillez selectionner un nombre');
}
 // SignInNewsLetter
 const elements = document.getElementsByName('location');
 for (let i=0;i<elements.length;i++) {
   if(elements[i].value == "clean") {
     elements[i].checked = true;
   }
  console.log(elements[i].checked, elements[i].value)
 }

});

// SUBMIT MODAL FORM
const submitModal = () => {
  console.log('modal submit')
}
// add event click to launch submitModal()
  submit.addEventListener('click', submitModal);










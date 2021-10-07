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

// FORM SECTION

const form = document.querySelector('form')
const inputFirstName = document.querySelector('#first')
const inputLastName = document.querySelector('#last')
const inputEmail = document.querySelector('#email')

const inputQuantity = document.querySelector('#quantity')

const inputAcceptTermsOfUses = document.querySelector('#checkbox1')

const inputSignInNewsLetter = document.querySelector('#checkbox2')


// SUBMIT CHECKING

form.addEventListener('submit', (event) => {
  // prevent form to be submitted 
  event.preventDefault();
 
  
  console.log(inputAcceptTermsOfUses.value);
  console.log(inputSignInNewsLetter.value);

// FirstName
  if (inputFirstName.value.length > 2) {
    console.log('ok le prénom:' , inputFirstName.value );
    // isValid = true;
  }
  else {
    console.log('Veuillez renseigner votre prénom');
    // isValid = false;
  }
// LastName
  if (inputLastName.value.length > 2) {
    console.log('ok le nom:', inputLastName.value);
  }
  else {
    console.log('Veuillez renseigner un nom valide');
  }

// MailForm  validation using Regular Expressions

const validateMailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if (inputEmail.value.match(validateMailForm)) {
  console.log('mail ok:', inputEmail.value);
//   alert("Mail ID format is approved!");
// document.mailForm.mailText.focus();
// return true;
} else {
  console.log('Veuillez renseigner un mail valide');
// alert("Mail ID format is not approved!");
// document.mailForm.mailText.focus();
// return false;
}


// Birthdate validation using Regular Expressions (Regex)


const inputBirthDate = document.querySelector('#birthdate');

BirthDateIsValid = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

// /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; 
 if (inputBirthDate.value.match(BirthDateIsValid)) {
   console.log('Date de naissance:' + inputBirthDate.value);
 } else {
   console.log('date de naissance pas bon');
 }

// const checkDoB = () =>
// function checkDoB () {

    // regular expression to match required date format
    
    //  /^\d{4}\/\d{1,2}\/\d{1,2}$/;

//     if(inputBirthDate.value != '' && !inputBirthDate.value.match(BirthDateIsValid)) {
//       alert("Invalid date format: " + inputBirthDate.value);
//       inputBirthDate.focus();
//       return false;
//     }
//     alert("BOD OK");
//     return true;
//   }
// checkDoB ();

 console.log(inputBirthDate.value);


// Quantity of tournament participation validation
const validateQuantity = /^[0-9]/;

if (inputQuantity.value.match(validateQuantity)) {
  console.log('Nombre de participation(s):', inputQuantity.value);
} else {
  console.log( 'Participation aux précedents tournois:','veuillez selectionner un nombre');
}

 // AcceptTermsOfUses



// for (let i = 0; i < inputAcceptTermsOfUses.length; i++) {
//   if(inputAcceptTermsOfUses[i].value == "clean") {
//     inputAcceptTermsOfUses[i].checked = true;
//     return true
//    } else {
//      return false
//    }
  
// }
 








 // inputLocations Radios
 const inputLocations = document.getElementsByName('location');
 for (let i=0;i<inputLocations.length;i++) {
   if(inputLocations[i].value == "clean") {
    inputLocations[i].checked = true;
   }
  console.log(inputLocations[i].checked, inputLocations[i].value)
 }

});

// SUBMIT MODAL FORM
const submitModal = () => {
  console.log('modal submit')
}
// add event click to launch submitModal()
  submit.addEventListener('click', submitModal);










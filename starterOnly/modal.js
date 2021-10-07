///*
//  +-+-+-+-+ +-+-+-+-+-+-+-+
//  |M|E|N|U| |H|A|N|D|L|E|R|
//  +-+-+-+-+ +-+-+-+-+-+-+-+
//*/

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
 +-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+
 |/|/| |D|O|M| |E|l|e|m|e|n|t|s|
 +-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+
*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector(".close")
const form = document.querySelector('form')
const inputFirstName = document.querySelector('#first')
const inputLastName = document.querySelector('#last')
const inputEmail = document.querySelector('#email')
const inputBirthDate = document.querySelector('#birthdate');
const inputQuantity = document.querySelector('#quantity')
const inputLocations = document.getElementsByName('location');
const inputAcceptTermsOfUses = document.querySelector('#checkbox1')
const inputSignInNewsLetter = document.querySelector('#checkbox2')
const submit = document.querySelector(".btn-submit")

/*
 +-+-+-+-+-+
 |T|O|O|L|S|
 +-+-+-+-+-+
*/
const launchModal = () => {
  modalbg.style.display = "block";
}
const closeModal = () => {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// add event click to launch closeModal()
cross.addEventListener('click', closeModal);

/*
 +-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+
 |/|/| |F|O|R|M| |S|E|C|T|I|O|N|
 +-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+
*/
let userValue = {}

/*
 +-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+
 |/|/| |S|U|B|M|I|T| |C|H|E|C|K|I|N|G|
 +-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+
*/

form.addEventListener('submit', (event) => {

  // prevent form to be submitted 
  event.preventDefault();
 

  // FirstName
  if (inputFirstName.value.length > 2) {
    userValue.firstName = inputFirstName.value
  }
  else {
    console.log('Veuillez renseigner votre prénom');
  }


  // LastName
  if (inputLastName.value.length > 2) {
   userValue.lastName = inputLastName.value
  }
  else {
    console.log('Veuillez renseigner un nom valide');
  }


// MailForm  validation using Regular Expressions
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (inputEmail.value.match(regex)) {
  userValue.email = inputEmail.value
//   alert("Mail ID format is approved!");
// document.mailForm.mailText.focus();
// return true;
} else {
  console.log('Veuillez renseigner un mail valide');
// alert("Mail ID format is not approved!");
// document.mailForm.mailText.focus();
// return false;
}


// Birthdate validation 
 if (inputBirthDate.value.length>0) {
   userValue.birthDate = inputBirthDate.value
 } else {
   console.log('Veuillez renseigner votre date de naissance');
 }


// Quantity of tournament participation validation
if (inputQuantity.value>0||inputQuantity.value<100) {
  userValue.quantity = inputQuantity.value
} else {
  console.log( 'Participation aux précédents tournois:','veuillez selectionner un nombre');
}

// inputLocations Checkboxes
let cities = []
for (let i=0;i<inputLocations.length;i++) {
  if(inputLocations[i].checked) {
    cities.push(inputLocations[i].value)
  }
}
userValue.cities = cities

 // inputTermsOfUses
if (inputAcceptTermsOfUses.checked) {
  userValue.cgu = true 
} else {
  userValue.cgu = false
}

checkInput (userValue)

});

const checkInput = (olala) => {
  console.log('on a un truc là:', olala);
}


// const checkDoB = () => 
//     if(inputBirthDate.value != '' && !inputBirthDate.value.match(BirthDateIsValid)) 
//       alert("Invalid date format: " + inputBirthDate.value);
//       inputBirthDate.focus();
//       return false;
//     
//     alert("BOD OK");
//     return true;

// checkDoB ();

// SUBMIT MODAL FORM
// const submitModal = () => {
//   console.log('modal submit')
// }
// // add event click to launch submitModal()
//   submit.addEventListener('click', submitModal);






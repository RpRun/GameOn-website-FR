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

  userValue.firstName = inputFirstName.value
  userValue.lastName = inputLastName.value
  userValue.email = inputEmail.value
  userValue.birthDate = inputBirthDate.value
  userValue.quantity = inputQuantity.value

  // inputLocations Checkboxes
  let cities = []
  for (let i = 0; i < inputLocations.length; i++) {
    if (inputLocations[i].checked) {
      cities.push(inputLocations[i].value)
    }
  }
  userValue.cities = cities

  // inputTermsOfUses
  userValue.cgu = inputAcceptTermsOfUses.checked

  // userValue.newsLetter

  userValue.newsLetter = inputSignInNewsLetter.checked


  checkInput(userValue)
});

const checkInput = (rolala) => {
  console.log('on a un truc là:', rolala);


  // FirstName
  const errorFirst = document.querySelector('.error-first')
  if (inputFirstName.value.length > 2) {
    errorFirst.style.display = 'none'
  } else {
    errorFirst.style.display = 'block'
  }


  // LastName
  const errorLast = document.querySelector('.error-last')
  if (inputLastName.value.length > 2) {
    errorLast.style.display = 'none'
  } else {
    errorLast.style.display = 'block'
  }


  // MailForm  validation using Regular Expressions
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.querySelector('.error-eMail')
  if (inputEmail.value.match(regex)) {
    errorEmail.style.display = 'none'
  } else {
    errorEmail.style.display = 'block'
  }


  // Birthdate validation 
  const errorDoB = document.querySelector('.error-DoB')
  if (inputBirthDate.value.length > 0) {
    errorDoB.style.display = 'none'
  } else {
    errorDoB.style.display = 'block'
  }


  // Quantity of tournament participation validation
  const errorQuantity = document.querySelector('.error-Quantity')
  if (inputQuantity.value>0||inputQuantity.value<100) {
    errorQuantity.style.display = 'none'
  } else {
    errorQuantity.style.display = 'block'
  }


  // inputTermsOfUses
  const errorAccept = document.querySelector('.error-cgu')
  if (inputAcceptTermsOfUses.checked) { 
    errorAccept.style.display = 'none'
  } else {
    errorAccept.style.display = 'block'
  }


  // inputSignInNewsLetter
  // if (inputSignInNewsLetter.checked) {
  //   userValue.newsLetter = true
  // } else {
  //   userValue.newsLetter = false
  // }


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
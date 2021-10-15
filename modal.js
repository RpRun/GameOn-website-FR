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
const thankClosing = document.querySelector(".form-submitted")
const submit = document.querySelector(".btn-submit")
const btnClose = document.querySelector(".btn-close")

/*
 +-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
 |D|O|M| |E|l|e|m|e|n|t|s| |e|r|r|o|r|s|
 +-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
*/
const errorFirst = document.querySelector('.error-first')
const errorLast = document.querySelector('.error-last')
const errorEmail = document.querySelector('.error-eMail')
const errorDoB = document.querySelector('.error-DoB')
const errorQuantity = document.querySelector('.error-Quantity')
const errorLocation = document.querySelector('.error-Location')
const errorCgu = document.querySelector('.error-cgu')

/*
 +-+-+-+-+-+
 |T|O|O|L|S|
 +-+-+-+-+-+
*/
const launchModal = () => {
  modalbg.style.display = "block";
  openForm()
  closeThx()
}

const closeModal = () => {
  modalbg.style.display = "none";
 
}

const openForm = () => {
  form.style.display = "block";
}

const closeForm = () => {
  form.style.display = "none";
}

const openThx = () => {
  thankClosing.style.display = "block";
}

const closeThx = () => {
  thankClosing.style.display = "none;"
}

// MailForm  validation using Regular Expressions
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// const resetModal = () => {
//   form.reset();
//   modalbg.style.display = "none";
//   console.log('ça close ou ça reset');

// }

// FirstName
const checkFirstName = () => {
  if (inputFirstName.value.length > 2) {
    errorFirst.style.display = 'none'
    inputFirstName.style.border = 'none'
    return true;

  } else {
    errorFirst.style.display = 'block'
    inputFirstName.focus();
    inputFirstName.style.border = '2px solid #e54858'
    return false;
  }

}

// LastName
const checkLastName = () => {
  if (inputLastName.value.length > 2) {
    errorLast.style.display = 'none'
    inputLastName.style.border = 'none'
    return true;

  } else {
    errorLast.style.display = 'block'
    inputLastName.focus();
    inputLastName.style.border = '2px solid #e54858'
    return false;
  }
}

// MailForm 
const checkEmail = () => {
  if (inputEmail.value.match(regex)) {
    errorEmail.style.display = 'none'
    inputEmail.style.border = 'none'
    return true;

  } else {
    errorEmail.style.display = 'block'
    inputEmail.focus();
    inputEmail.style.border = '2px solid #e54858'
    return false
  }
}

// Birthdate validation 
const checkDoB = () => {
  if (inputBirthDate.value.length > 0) {
    errorDoB.style.display = 'none'
    inputBirthDate.style.border = 'none'
    return true;

  } else {
    errorDoB.style.display = 'block'
    inputBirthDate.focus();
    inputBirthDate.style.border = '2px solid #e54858'
    return false
  }
}

// Quantity of tournament participation validation
const checkTournaments = () => {
  if ((inputQuantity.value == '') || (userValue.cities.length > inputQuantity.value)) {
    errorQuantity.style.display = 'block'
    inputQuantity.focus();
    inputQuantity.style.border = '2px solid #e54858'
    return false

  } else {
    errorQuantity.style.display = 'none'
    inputQuantity.style.border = 'none'
    return true;
  }
}

// InputLocations (cities) error displayed only if there was a participation quantified before
const checkLocation = () => {
  if ((userValue.cities.length < 1) && (inputQuantity.value > 0)) {
    errorLocation.style.display = 'block'
    return false
  } else {
    errorLocation.style.display = 'none'
    return true
  }
}

// inputTermsOfUses

const checkCgu = () => {
  if (inputAcceptTermsOfUses.checked) {
    errorCgu.style.display = 'none'
    return true;
  } else {
    errorCgu.style.display = 'block'
    return false;
  }
}


/*
 +-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+
 |/|/| |F|O|R|M| |S|E|C|T|I|O|N|
 +-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+
*/
let userValue = {}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// add event click to launch closeModal()
cross.addEventListener('click', closeModal);

btnClose.addEventListener('click', closeModal);

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

/*
 +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
 |C|H|E|C|K|I|N|G| |E|R|R|O|R|S|
 +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
*/
const checkInput = () => {
  // FORM SUBMIT
  if (checkFirstName() && checkLastName() && checkEmail() && checkDoB() && checkTournaments() &&
    checkLocation() && checkCgu()) {
    form.reset();
    closeForm();
    openThx();
    console.log("Formulaire Valide: \n\n", userValue);
  } else {
    console.log("Formulaire invalide: \n\n", userValue);
  }
}
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

const bTnClose = document.querySelector(".btn-close")

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
}

const closeModal = () => {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// add event click to launch closeModal()
cross.addEventListener('click', closeModal);

// MailForm  validation using Regular Expressions
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// reset modal
/*
       AA      RRRR  EEEE V     V  OOO  III RRRR
      A  A     R   R E    V     V O   O  I  R   R
      AAAA     RRRR  EEE   V   V  O   O  I  RRRR
      A  A     R R   E      V V   O   O  I  R R
      A  A     R  RR EEEE    V     OOO  III R  RR


      */

const resetModal = () => {
  form.reset();
  modalbg.style.display = "none";
  console.log('ça close ou ça reset');
  
}

bTnClose.addEventListener('click',resetModal);
/*
       AA      RRRR  EEEE V     V  OOO  III RRRR
      A  A     R   R E    V     V O   O  I  R   R
      AAAA     RRRR  EEE   V   V  O   O  I  RRRR
      A  A     R R   E      V V   O   O  I  R R
      A  A     R  RR EEEE    V     OOO  III R  RR


      */

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

/*
 +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
 |C|H|E|C|K|I|N|G| |E|R|R|O|R|S|
 +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
*/
const checkInput = () => {
  console.log('on a un truc là:', userValue);

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
      // false est il necessaire et pourquoi?
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
 +-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+
 |/|/| |V|A|L|I|D|A|T|E| |F|O|R|M|
 +-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+
*/

  // FORM CHECK ALL FIELDS
  const checkAllFields = () => {
    if (checkFirstName() === true &&
      checkLastName() === true &&
      checkEmail() === true &&
      checkDoB() === true &&
      checkTournaments() === true &&
      checkLocation() === true &&
      checkCgu() === true) {
      return true;
    } else {
      return false;
    }
  }


  // FORM SUBMIT
  
    if (checkAllFields() == true) {
      form.style.display = "none";
      thankClosing.style.display = "block";
      /*
       AA      RRRR  EEEE V     V  OOO  III RRRR
      A  A     R   R E    V     V O   O  I  R   R
      AAAA     RRRR  EEE   V   V  O   O  I  RRRR
      A  A     R R   E      V V   O   O  I  R R
      A  A     R  RR EEEE    V     OOO  III R  RR


      */
      // cross.addClass('btn-close')
      /*
       AA      RRRR  EEEE V     V  OOO  III RRRR
      A  A     R   R E    V     V O   O  I  R   R
      AAAA     RRRR  EEE   V   V  O   O  I  RRRR
      A  A     R R   E      V V   O   O  I  R R
      A  A     R  RR EEEE    V     OOO  III R  RR


      */
      console.log('oka ou pas ok')
      
    }
    

}
/* This will check if input is valid upon input, this happens before submission */
function setErrorFor(input) {
    const formControl = input.parentElement; // parent element is .section

    //add error class
    formControl.className = 'form-control error';
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};
// validate email upon user input
function emailValidation() {
    let email = document.getElementById("email")
    let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    let emailErrorDiv = document.getElementById("email-error")

    if (email.value.match(emailPattern)) {
        emailErrorDiv.innerHTML = "Valid Email"
        setSuccessFor(email)
    } else {
        emailErrorDiv.innerHTML = "Error, please enter a valid Email address"
        setErrorFor(email);
        formControl.className = 'form-control error'
    }
};
// validate password upon user input
function pwordValidation() {
    let pword = document.getElementById("pword")
    let pwordPattern = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/
    let pwordErrorDiv = document.getElementById("pword-error")

    if (pword.value.match(pwordPattern)) {
        pwordErrorDiv.innerHTML = "Correct: Valid Password"
        setSuccessFor(pword)
    } else {
        pwordErrorDiv.innerHTML = "Error - please enter a valid password"
        setErrorFor(pword);
        formControl.className = 'form-control error'
    }
};
// validate first name upon user input
function fnameValidation() {
    let fname = document.getElementById("fname")
    let fnamePattern = /[a-zA-Z]{2,}$/
    let fnameErrorDiv = document.getElementById("fname-error")

    if (fname.value.match(fnamePattern)) {
        fnameErrorDiv.innerHTML = "Correct: Valid first name"
        setSuccessFor(fname)
    } else {
        fnameErrorDiv.innerHTML = "Error, please enter your first name"
        setErrorFor(fname);
        formControl.className = 'form-control error'
    }
};
// validate last name upon user input
function lnameValidation() {
    let lname = document.getElementById("lname")
    let lnamePattern = /[a-zA-Z]{2,}$/
    let lnameErrorDiv = document.getElementById("lname-error")

    if (lname.value.match(lnamePattern)) {
        lnameErrorDiv.innerHTML = "Valid last name"
        setSuccessFor(lname)
    } else {
        lnameErrorDiv.innerHTML = "Error, please enter your last name"
        setErrorFor(lname);
        formControl.className = 'form-control error'
    }
};
// validate phone number upon user input
function pnumberValidation() {
    let pnumber = document.getElementById("pnumber")
    let pnumberPattern = /[0-9]{8,12}$/
    let pnumberErrorDiv = document.getElementById("pnumber-error")

    if (pnumber.value.match(pnumberPattern)) {
        pnumberErrorDiv.innerHTML = "Valid number"
        setSuccessFor(pnumber)
    } else {
        pnumberErrorDiv.innerHTML = "Error, please enter a correct number"
        setErrorFor(pnumber);
        formControl.className = 'form-control error'
    }
};
/* // Scrap code disregard
function isValidDate(d){
   let dob = document.getElementById('dob').value;
   return !isNaN((new Date(d)).getTime());
}
function validateDOB() {
   let dobErrorDiv = document.getElementById("dob-error")
   
   let dob = document.getElementById('dob').value;
   if(!isValidDate(dob)){
      dobErrorDiv.innerHTML = "Error, please enter a correct date"
      setErrorFor(dob);formControl.className = 'form-control error'
   } else {
      dobErrorDiv.innerHTML = "Valid date"
      setSuccessFor(dob)
   }
};
*/
/*
function pnumberValidation() {
   let pnumber = document.getElementById("pnumber")
   let pnumberPattern = /(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
   let pnumberErrorDiv = document.getElementById("pnumber-error")

   if (pnumber.value.match(pnumberPattern)) {
      pnumberErrorDiv.innerHTML = "Valid number"
      setSuccessFor(pnumber)
   } else {
      pnumberErrorDiv.innerHTML = "Error, please enter a correct number"
      setErrorFor(pnumber);formControl.className = 'form-control error'
   }
};
*/
// validate password match upon user input
function pwordcValidation() {
    let pword = document.getElementById("pword")

    let pwordc = document.getElementById("pwordc")
    let pwordcPattern = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/
    let pwordcErrorDiv = document.getElementById("pwordc-error")

    if (pwordc.value.match(pwordcPattern) && pwordc.value.match(pword.value)) {
        pwordcErrorDiv.innerHTML = "Same Password"
        setSuccessFor(pwordc)
    } else {
        pwordcErrorDiv.innerHTML = "Error - Please match your passwords"
        setErrorFor(pwordc);
        formControl.className = 'form-control error'
    }
};

// Below is scrap code, like a maths equation I thought I should provide my working out as well
//Otherwise, disregard the following code

/* This will check if sent data is valid or not upon submit*/
/*
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pword = document.getElementById('pword');
const pwordc = document.getElementById('pwordc');
const dob = document.getElementById('dob');
const pnumber = document.getElementById('pnumber');
*/

/*  Notice these following unctions will be triggered upon submit*/
/*form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkInputs();

});

function checkInputs() {

   // get the values from the inputs
   const fnameValue = fname.value.trim();
   const lnameValue = lname.value.trim();
   const emailValue = email.value.trim();
   const pnumberValue = pnumber.value.trim();
   const dobValue = dob.value.trim();
   const pwordValue = pword.value.trim();
   const pwordcValue = pword.value.trim();

   if (fnameValue === '') {
      //show error      //add error class
      setErrorFor(fname, 'First name cannot be blank');
   } else {
      //add success class 
      setSuccessFor(fname);
   }
   if (lnameValue === '') {
      setErrorFor(lname, 'Last name cannot be blank');
   } else {
      setSuccessFor(lname);
   }
   if (pwordValue === '') {
      setErrorFor(pword, 'Password cannot be blank');
   } else {
      setSuccessFor(pword);
   }
   if (pwordcValue === '') {
      setErrorFor(pwordc, 'Password confirmation cannot be blank');
   } else if (pwordValue !== pwordcValue) {
      setErrorFor(pwordc, 'Passwords does not match');
   } else {
      setSuccessFor(pwordc);
   }
   if (emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
   } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
   } else {
      setSuccessFor(email);
   }

   if (dobValue === '') {
      setErrorFor(dob, 'Date Of Birth cannot be blank');
   } else {
      setSuccessFor(dob);
   }
   if (pnumberValue === '') {
      setErrorFor(pnumber, 'Phone number cannot be blank');
   } else {
      setSuccessFor(pnumber);
   }
};

function setErrorFor(input, message) {
   const formControl = input.parentElement; // parent element is .section
   const small = formControl.querySelector('small');

   //add error message inside small
   small.innerText = message;

   //add error class
   formControl.className = 'form-control error';
};

function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
};

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};


*/
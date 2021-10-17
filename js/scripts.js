const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pword = document.getElementById('pword');
const pwordc = document.getElementById('pwordc'); 
const dob = document.getElementById('dob');
const pnumber = document.getElementById('pnumber');



form.addEventListener('submit', (e) => {
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

   if(fnameValue === '') {
      //show error
      //add error class
      setErrorFor(fname, 'First name cannot be blank');
   } else {
      //add success class 
      setSuccessFor(fname);
   }
   if(lnameValue === '') {
		setErrorFor(lname, 'Last name cannot be blank');
	} else {
	   setSuccessFor(lname);
	}
	if(pwordValue === '') {
		setErrorFor(pword, 'Password cannot be blank');
	} else {
		setSuccessFor(pword);
	}
   if(pwordcValue === '') {
		setErrorFor(pwordc, 'Password confirmation cannot be blank');
	} else if(pwordValue !== pwordcValue) {
		setErrorFor(pwordc, 'Passwords does not match');
	} else{
		setSuccessFor(pwordc);
	}
   if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
   if(dobValue === '') {
		setErrorFor(dob, 'Date Of Birth cannot be blank');
	} else {
	   setSuccessFor(dob);
	}
   if(pnumberValue === '') {
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
}


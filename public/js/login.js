



//username & password validation
let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("login-index");
let user = document.getElementById("user");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let form1 = document.getElementById("signup-index");

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'password':
            checkPassword();
            break;
	}
});

const checkUsername=()=>{
	// let valid = false;
	if(username.value.trim()=="")
    {
      username.style.border = '2px solid red';
      return false;
    }
    else{
		username.style.border = '2px solid lightgreen';
      return true;
    }
}
const checkPassword=()=>{
	// let valid = false;
	if(password.value.trim()=="")
    {
	  password.style.border = '2px solid red';
      return false;
    }
    else{
		password.style.border = '2px solid lightgreen';
    	return true;
    }
}

function valid(){
	let userTrue = checkUsername();
	let passTrue = checkPassword();
	console.log(userTrue);
	console.log(passTrue);
	if(userTrue&&passTrue)
	{
		return true;
	}
	else{
		return false;
	}
}
//signup form validation

form1.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'user':
            checkUser();
            break;
		case 'phone':
			checkPhoneNumber();
			break;
		case 'email':
			checkEmail();
			break;
		case 'pass1':
			checkTruePassword();
			break;
        case 'pass2':
            checkConfirmPassword();
            break;
	}
});
const checkUser = ()=>{
	let valid = false;
	if(user.value.trim()==""){
		user.style.border = "2px solid red";
		return valid;
	}
	else {
	valid = true;
	user.style.border = "2px solid lightgreen";
	return valid;
	}
}
const checkPhoneNumber = ()=>{
	let valid = false;
	let number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(number.test(phone.value)){
		phone.style.border = "2px solid lightgreen";
		valid = true;
		return valid;
	}
	else{ 
		phone.style.border = "2px solid red";
		return valid;
	}
}
const checkEmail = ()=>{
	let valid = false;
	let regexp = /^([\w\._-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/;
	if(regexp.test(email.value)){
		email.style.border = "2px solid lightgreen";
		valid = true;
		return valid;
	}
	else{
		email.style.border = "2px solid red";
		return valid;
	}
}
const checkTruePassword = ()=>{
	let valid = false;
	let passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
	if(passcheck.test(pass1.value.trim()))
	{
		pass1.style.border = "2px solid lightgreen";
		valid = true;
		return valid;
	}
	else{
		pass1.style.border = "2px solid red";
		return valid;
	}
}
const checkConfirmPassword = ()=>{
	let valid = false;
	if(pass2.value.trim()==""){
		pass2.style.border = "2px solid red";
		return valid;
	}
	else if(pass1.value.trim()===pass2.value.trim()){
		pass2.style.border = "2px solid lightgreen";
		valid = true;
		return valid;
	}
	else{
		pass2.style.border = "2px solid red";
		return valid;
	}
}
//signUp validation function call
function validSignup(){
	let isUsernameValid = checkUser(),
        isEmailValid = checkEmail(),
		isPhoneNumberValid = checkPhoneNumber(),
        isPasswordValid = checkTruePassword(),
        isConfirmPasswordValid = checkConfirmPassword();
	let isFormValid = isUsernameValid && isPasswordValid&& isEmailValid && isPhoneNumberValid && isConfirmPasswordValid ;
	
	if (isFormValid) {
		alert("Account created");
		//document.getElementById("signup-index").reset();
		return true;
	}
	else{
		return false;
	}
}



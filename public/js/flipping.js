
let user = document.getElementById("user");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let form1 = document.getElementById("signup-index");

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
	if(phone.value!=""){
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
	if(email.value!=""){
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
	if(pass1.value!="")
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
	if(pass2.value ==""){
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
		return true;
	}
	else{
		return false;
	}
}
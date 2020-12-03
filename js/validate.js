const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	// Login variables
	let inputEmail1 	= document.getElementById('inputEmail1');
	let inputPassword1 	= document.forms["myForm"]["inputPassword1"];


	// Login validation
		// Email 
		if(inputEmail1.value == "") {
			inputEmail1.classList.add("is-invalid");
			document.getElementById("errorEmail1").textContent = "Please enter your email address";
			acumErrores ++;
		}else if(!validar_email(inputEmail1.value)){
			inputEmail1.classList.add("is-invalid");
			document.getElementById("errorEmail1").textContent = "Email is not correct";
			acumErrores ++;
		}

		// Password 
		if(inputPassword1.value == "") {
			inputPassword1.classList.add("is-invalid");
			document.getElementById("errorPassword1").textContent = "Plese enter your password";
			acumErrores ++;
		}
}



function registerValidate2() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	// Resgister variables
	let inputfirstName 	= document.getElementById('inputfirstName');
	let inputlastName 	= document.forms["myForm2"]["inputlastName"];
	let inputEmail2 	= document.getElementById('inputEmail2');
	let inputPassword2 	= document.forms["myForm2"]["inputPassword2"];
	let inputconfirmPassword = document.forms["myForm2"]["inputconfirmPassword"];
	let inputPhone 		= document.forms["myForm2"]["inputPhone"];
	let inputAddress 	= document.forms["myForm2"]["inputAddress"];
	let inputProvince	= document.forms["myForm2"]["inputProvince"];
	let inputCity		= document.forms["myForm2"]["inputCity"];
	let inputZip		= document.forms["myForm2"]["inputZip"];
	let inputregister 	= document.forms["myForm2"]["gridCheck2"];

		
	// Register validation

		// Name 
		if(inputfirstName.value == "") {
			inputfirstName.classList.add("is-invalid");
			document.getElementById("errorfirstName").textContent = "Plese enter your first name";
			acumErrores ++;
		}

		// Last name 
		if(inputlastName.value == "") {
			inputlastName.classList.add("is-invalid");
			document.getElementById("errorlastName").textContent = "Plese enter your last name";
			acumErrores ++;
		}

		// Email 
		if(inputEmail2.value == "") {
			inputEmail2.classList.add("is-invalid");
			document.getElementById("errorEmail2").textContent = "Please enter your email address";
			acumErrores ++;
		}else if(!validar_email(inputEmail2.value)){
			inputEmail2.classList.add("is-invalid");
			document.getElementById("errorEmail2").textContent = "Email is not correct";
			acumErrores ++;
		}

		// Password
		if(inputPassword2.value == "") {
			inputPassword2.classList.add("is-invalid");
			document.getElementById("errorPassword2").textContent = "Plese enter your password";
			acumErrores ++;
		}

		// Password confirmation
		if(inputconfirmPassword == inputPassword2.value) {
			inputconfirmPassword.classList.add("is-invalid");
			document.getElementById("errorconfirmPassword").textContent = "The password is not correct";
			acumErrores ++;
		}
		
		// Phone
		if(inputPhone== "") {
			inputPhone.classList.add("is-invalid");
			document.getElementById("errorPhone").textContent = "Plese enter your phone";
			acumErrores ++;
		}
	
		// Address 
		if(inputAddress.value == "") {
			inputAddress.classList.add("is-invalid");
			document.getElementById("errorAddress").textContent = "Please enter the address";
			acumErrores ++;
		}

		// Province 
		if(inputProvince.value == "") {
			inputProvince.classList.add("is-invalid");
			document.getElementById("errorProvince").textContent = "Please enter the province";
			acumErrores ++;
		}
		
		// City 
		if(inputCity.value == "") {
			inputCity.classList.add("is-invalid");
			document.getElementById("errorCity").textContent = "Please enter the city";
			acumErrores ++;
		}

		// Zip 
		if(inputZip.value == "" || inputZip.length!=5) {
			inputZip.classList.add("is-invalid");
			document.getElementById("errorZip").textContent = "Please enter the correct the zip code";
			acumErrores ++;
		}

		// Privacy Policy 
		if(!gridCheck2.checked) {
			gridCheck2.classList.add("is-invalid");
			document.getElementById("errorCheck2").textContent = "Accept the bases";
			acumErrores ++;
		}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

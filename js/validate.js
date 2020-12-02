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
	let inputlastName 	= document.forms["myForm"]["inputlastName"];
	let inputEmail2 	= document.getElementById('inputEmail2');
	let inputPassword2 	= document.forms["myForm"]["inputPassword2"];
	let inputconfirmPassword = document.forms["myForm"]["inputconfirmPassword"];
	let inputPhone 		= document.forms["myForm"]["inputPhone"];
	let inputAddress 	= document.forms["myForm"]["inputAddress"];
	let inputProvince	= document.forms["myForm"]["inputProvince"];
	let inputCity		= document.forms["myForm"]["inputCity"];
	let inputZip		= document.forms["myForm"]["inputZip"];
	let inputregister 	= document.forms["myForm"]["gridCheck2"];

		
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
		if(inputEmail1.value == "") {
			inputEmail1.classList.add("is-invalid");
			document.getElementById("errorEmail1").textContent = "Please enter your email address";
			acumErrores ++;
		}else if(!validar_email(inputEmail1.value)){
			inputEmail1.classList.add("is-invalid");
			document.getElementById("errorEmail1").textContent = "Email is not correct";
			acumErrores ++;
		}

		// Password --- RESVISAR CONFRIM PASSWORD
		if(inputPassword2.value == "") {
			inputPassword2.classList.add("is-invalid");
			document.getElementById("errorPassword2").textContent = "Plese enter your password";
			acumErrores ++;
		}
	
		// Address 
		if(inputAddress.value == "") {
			inputAddress.classList.add("is-invalid");
			document.getElementById("errorAddress").textContent = "Es campo es obligatorio";
			acumErrores ++;
		}

		// Province 
		if(inputProvince.value == "") {
			inputProvince.classList.add("is-invalid");
			document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
			acumErrores ++;
		}
		
		// City 
		if(inputCity.value == "") {
			inputCity.classList.add("is-invalid");
			document.getElementById("errorCity").textContent = "Falta la ciutat";
			acumErrores ++;
		}

		// Zip 
		if(inputZip.value == "" || inputZip.length!=5) {
			inputZip.classList.add("is-invalid");
			document.getElementById("errorZip").textContent = "El codi postal no compleix els requisitis";
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

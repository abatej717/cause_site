$(document).ready(function(){
	console.log("validator initiated..")

	var fn_var;
	var ln_var;
	var email_var;
	var task_var;

$("#volBtn").click(function(){
	console.log("Volunteer button has been clicked");

	fn_var = $("#fn").val();
	console.log(fn_var)
	ln_var =$("#ln").val();
	console.log(ln_var);
	email_var = $("#email").val();
	console.log(email_var);
	task_var = $("#VolunteerTask").val();
	console.log(task_var);

	if(fn_var == ""){
		console.log("First Name is required!");
		$("#fn").css("border", "solid 1px red");
	}else{
		//console.log("First Name is valid!");
		//$("#fn").css("border", "solid 1px green");
		validate("normalString", fn_var);
	}

		if(fn_var == ""){
		console.log("Last Name is required!");
		$("#ln").css("border", "solid 1px red");
	}else{
		console.log("Last Name is valid!");
		$("#ln").css("border", "solid 1px green");
	}

	if(fn_var == ""){
		console.log("Email is required!");
		$("#email").css("border", "solid 1px red");
	}else{
		console.log("Email is valid!");
		$("#email").css("border", "solid 1px green");
	}

});


function validate(inputType, userInput){
	switch(inputType){
		case 'normalString':
				console.log("Validating a normalString");
				console.log(inputType + " " + userInput);
				cleanUp(userInput);
			break;
		case 'emailAddress':
				console.log("Validating a email address");
				console.log(inputType + " " + userInput);
			break;
		case 'zipcode':
				console.log("Validating a zipcode");
				console.log(inputType + " " + userInput);
			break;
	}
}

function cleanUp(userInput){
	var temp=userInput;
	console.log(temp.indexOf("<"))
}

});
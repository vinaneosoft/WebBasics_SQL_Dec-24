const nameNode = document.getElementById("firstname");
const nameErrorNode = document.getElementById("nameError");
nameNode.addEventListener("keyup", () => validateEmployeeName());
const namePattern = new RegExp("^[A-Ba-z ]*$");

function validateEmployeeName() {
    nameErrorNode.textContent = "";
    // required validation
    const empname = nameNode.value;
    if (empname == "") {
        nameErrorNode.textContent = "name is required";
        nameNode.style.border="3px red solid";
        return false;
    }
    else if (namePattern.test(empname) == false){
        nameErrorNode.textContent = "Please enter valid name";
        nameNode.style.border="3px red solid";
        return false;
    }
    else if (empname.length < 2){
        nameErrorNode.textContent = "name must be more than 1 character long...";
        nameNode.style.border="3px red solid";
        return false;
    }
    else{
        nameNode.style.border="3px green solid";
        return true;
    }
}

// mobile : textfield
// required, pattern validation, length  validation,
const mobileNode = document.getElementById("mobile");
const mobileErrorNode = document.getElementById("mobileError");
mobileNode.addEventListener("keyup", () => validateMobile());
const mobilePattern = new RegExp("^[0-9]*$");

function validateMobile() {
  mobileErrorNode.textContent = "";
  // required validation
  const mobile = mobileNode.value;
  if (mobile == "") {
    mobileErrorNode.textContent = "mobile number is required";
    mobileNode.style.border="3px red solid";
    return false;
  }
  else if (mobilePattern.test(mobile) == false){
    mobileErrorNode.textContent = "Please enter valid mobile number";
    mobileNode.style.border="3px red solid";
    return false;
  }
  else if (mobile.length < 10 || mobile.length > 10){
    mobileErrorNode.textContent = "please enter 10 digit mobile number";
    mobileNode.style.border="3px red solid";
    return false;
  }
  else{
    mobileNode.style.border="3px green solid";
    return true;
  }
}

// emailid : email
// required, pattern validation
const emailNode = document.getElementById("email");
const emailErrorNode = document.getElementById("emailerror");
emailNode.addEventListener("keyup", () => validateEmail());

function validateEmail() {
  emailErrorNode.textContent = "";
    const email = emailNode.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == ""){
        emailErrorNode.textContent = "Email is required";    
        emailNode.style.border="3px red solid";
        return false;
    }   
    else if (!emailPattern.test(email)){
        emailErrorNode.textContent = "Please enter a valid email";  
        emailNode.style.border="3px red solid"; 
        return false;
    }
    else{
        emailNode.style.border="3px green solid";
        return true;
    }
       
}


// age : number
// required, 20 to 40 allowed,
const ageNode = document.getElementById("age");
const ageErrorNode = document.getElementById("ageerror");
ageNode.addEventListener("keyup", () => validateAge());

function validateAge() {
  ageErrorNode.textContent = "";
  const age = ageNode.value;
  ageErrorNode.textContent = "";
  if(age==""){
    ageErrorNode.textContent = "Age is required";
    ageErrorNode.style.color = "red";
    return false;
  }
  else if (age <20 || age>40) {
    ageErrorNode.textContent = "Invalid age. Age must be between 20 and 40.";
    ageErrorNode.style.color = "red";
    return false;
  } else {
    ageErrorNode.style.color = "green";
    return true
  }
}

// username : text
// required


// password : password
// required, pattern validation
const passwordNode = document.getElementById("password");
const passwordErrorNode = document.getElementById("passworderror");
passwordNode.addEventListener("keyup", () => validatePassword());


function validatePassword() {
    passwordErrorNode.textContent = "";
    const password = passwordNode.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    if (password == ""){
        passwordErrorNode.textContent = "Password is required";   
        return false; 
    }
    else if (!passwordPattern.test(password)){
        passwordErrorNode.textContent = "Password must be at least 8 characters long, include a number, and both a lowercase and an uppercase letter";   
        return false;
    }
    else{
        return true;
    }
       
}

// confirmpassword : password
// required ,  passvalue!=confirmpassvalue
const confirmPasswordNode = document.getElementById("Confirmpassword");
const confirmPasswordErrorNode = document.getElementById("confirmpassworderror");
confirmPasswordNode.addEventListener("keyup", () => validateConfirmPassword());

function validateConfirmPassword() {
    confirmPasswordErrorNode.textContent = "";
    const password = passwordNode.value;
    const confirmPassword = confirmPasswordNode.value;
    if (confirmPassword == ""){
        confirmPasswordErrorNode.textContent = "Please confirm your password";    
        return false;
    }
    else if (password !== confirmPassword){
        confirmPasswordErrorNode.textContent = "Passwords do not match"; 
        return false;
    }  
    else{
        return true;
    }
}

function validateAll(){
    const r1=validateEmployeeName();
    const r2=validateMobile();
    const r3=validateAge();
    const r4=validateEmail();
    const r5=validatePassword();
    const r6=validateConfirmPassword();
    return (r1 && r2 && r3 && r4 && r5 && r6)
}



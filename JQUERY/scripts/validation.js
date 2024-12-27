const nameNode = $("#firstname");
const nameErrorNode = $("#nameError");
nameNode.on("keyup", () => validateEmployeeName());
const namePattern = new RegExp("^[A-Ba-z ]*$");

function validateEmployeeName() {
    nameErrorNode.text("");
    const empname = nameNode.val();
    if (empname == "") {
        nameErrorNode.text("name is required");
        nameNode.css("border", "3px red solid");
        return false;
    }
    else if (namePattern.test(empname) == false){
        nameErrorNode.text("Please enter valid name");
        nameNode.css("border", "3px red solid");
        return false;
    }
    else if (empname.length < 2){
        nameErrorNode.text("name must be more than 1 character long...");
        nameNode.css("border", "3px red solid");
        return false;
    }
    else{
        nameNode.css("border", "3px green solid");
        return true;
    }
}

const mobileNode = $("#mobile");
const mobileErrorNode = $("#mobileError");
mobileNode.on("keyup", () => validateMobile());
const mobilePattern = new RegExp("^[0-9]*$");

function validateMobile() {
  mobileErrorNode.text("");
  const mobile = mobileNode.val();
  if (mobile == "") {
    mobileErrorNode.text("mobile number is required");
    mobileNode.css("border", "3px red solid");
    return false;
  }
  else if (mobilePattern.test(mobile) == false){
    mobileErrorNode.text("Please enter valid mobile number");
    mobileNode.css("border", "3px red solid");
    return false;
  }
  else if (mobile.length < 10 || mobile.length > 10){
    mobileErrorNode.text("please enter 10 digit mobile number");
    mobileNode.css("border", "3px red solid");
    return false;
  }
  else{
    mobileNode.css("border", "3px green solid");
    return true;
  }
}

const emailNode = $("#email");
const emailErrorNode = $("#emailerror"); 
emailNode.on("keyup", () => validateEmail());   

function validateEmail() {
  emailErrorNode.text("");
    const email = emailNode.val();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == ""){
        emailErrorNode.text("Email is required");    
        emailNode.css("border", "3px red solid");
        return false;
    }   
    else if (!emailPattern.test(email)){
        emailErrorNode.text("Please enter a valid email");  
        emailNode.css("border", "3px red solid"); 
        return false;
    }
    else{
        emailNode.css("border", "3px green solid");
        return true;
    }
}


const ageNode = $("#age");
const ageErrorNode = $("#ageerror");
ageNode.on("keyup", () => validateAge());

function validateAge() {
  ageErrorNode.text("");
  const age = ageNode.val();
  ageErrorNode.text("");
  if(age==""){
    ageErrorNode.text("Age is required");
    return false;
  }
  else if (age <20 || age>40) {
    ageErrorNode.text("Invalid age. Age must be between 20 and 40.");
    return false;
  } else {
    return true
  }
}

const passwordNode = $("#password");
const passwordErrorNode = $("#passworderror");
passwordNode.on("keyup", () => validatePassword());

function validatePassword() {
    passwordErrorNode.text("");
    const password = passwordNode.val();
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    if (password == ""){
        passwordErrorNode.text("Password is required");   
        return false; 
    }
    else if (!passwordPattern.test(password)){
        passwordErrorNode.text("Password must be at least 8 characters long, include a number, and both a lowercase and an uppercase letter");   
        return false;
    }
    else{
        return true;
    }
}

const confirmPasswordNode = $("#Confirmpassword");
const confirmPasswordErrorNode = $("#confirmpassworderror");
confirmPasswordNode.on("keyup", () => validateConfirmPassword());

function validateConfirmPassword() {
    confirmPasswordErrorNode.text("");
    const password = passwordNode.val();
    const confirmPassword = confirmPasswordNode.val();
    if (confirmPassword == ""){
        confirmPasswordErrorNode.text("Please confirm your password");    
        return false;
    }
    else if (password !== confirmPassword){
        confirmPasswordErrorNode.text("Passwords do not match"); 
        return false;
    }  
    else{
        return true;
    }
}

$("#regForm").submit(()=>validateAll())

function validateAll(){
    const r1=validateEmployeeName();
    const r2=validateMobile();
    const r3=validateAge();
    const r4=validateEmail();
    const r5=validatePassword();
    const r6=validateConfirmPassword();
    return (r1 && r2 && r3 && r4 && r5 && r6)
}



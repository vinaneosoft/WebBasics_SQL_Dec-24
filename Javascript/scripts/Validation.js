const nameNode=document.getElementById("firstname");
const nameErrorNode=document.getElementById("nameError");
nameNode.addEventListener("keyup", ()=>validateEmployeeName())
const namePattern=new RegExp("^[A-Ba-z ]*$")

function validateEmployeeName(){
    nameErrorNode.textContent="";
    // required validation
    const empname=nameNode.value;
    if(empname=="")
        nameErrorNode.textContent="name is required";    
    else if(namePattern.test(empname)==false)
        nameErrorNode.textContent="Please enter valid name";   
    else if(empname.length<2)
        nameErrorNode.textContent="name must be more than 1 character long...";    
   
}

// mobile : textfield
// required, pattern validation, length  validation, 
const mobileNode=document.getElementById("mobile");
const mobileErrorNode=document.getElementById("mobileError");
mobileNode.addEventListener("keyup", ()=>validateMobile())
const mobilePattern=new RegExp("^[0-9]*$")

function validateMobile(){
    mobileErrorNode.textContent="";
    // required validation
    const mobile=mobileNode.value;
    if(mobile=="")
        mobileErrorNode.textContent="mobile number is required";    
    else if(mobilePattern.test(mobile)==false)
        mobileErrorNode.textContent="Please enter valid mobile number";   
    else if(empname.length<10 || empname.length>10) 
        mobileErrorNode.textContent="please enter 10 digit mobile number";    
   
}
// emailid : email
// required, pattern validation

// age : number
// required, 20 to 40 allowed, 

// username : text
// required

// password : password
// required, pattern validation

// confirmpassword : password
// required ,  passvalue!=confirmpassvalue


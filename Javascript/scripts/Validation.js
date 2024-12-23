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


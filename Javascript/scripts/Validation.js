const nameNode=document.getElementById("firstname");
const nameErrorNode=document.getElementById("nameError");
nameNode.addEventListener("keyup", ()=>validateEmployeeName())
function validateEmployeeName(){
    nameErrorNode.textContent="";
    // required validation
    if(nameNode.value=="")
        nameErrorNode.textContent="name is required";    
}
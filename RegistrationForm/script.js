const but = document.querySelector("button");
const pass = document.querySelector("#pass");
const checkPass = document.querySelector("#checkPass");
let flag = false;

but.addEventListener("click", ()=>{
  if(flag){
    let alertflag = alert("Registration Successfull")
    // console.log(alertflag)
  }
  else{
    alert("Passward Not Match");
  }
})

checkPass.addEventListener("keyup",()=>{
  var v1 = pass.value;
  var v2 = checkPass.value;
  if(v1==v2){
    checkPass.style.borderBottom = "3px solid green";
    console.log("success")
    flag = true;
  }
  else{
    checkPass.style.borderBottom = "2px solid red";
    console.log("wrong")
    flag = false;
  }
})
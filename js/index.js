//signup inputs//
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var errorSignup =document.getElementById('errorSignup');
var allInputs = Array.from(document.querySelectorAll('input'));
//login inputs
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
var errorloginIn = document.getElementById('errorloginIn');
var registerArray;

(function(){
    if(localStorage.getItem("data") != null){
        registerArray= JSON.parse(localStorage.getItem("data"));
      }
      else{
        registerArray=[];
    }
})()

function registerBtn(){
    if(inputsRequired() == true && checkExist() != false){
    var register ={
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value,
    }
    registerArray.push(register)
    localStorage.setItem('data',JSON.stringify(registerArray));
}
}
//-----signup----//
function inputsRequired(){
    var flag = true;
    for (var i=0 ; i < allInputs.length; i++){
        if(allInputs[i].value == ""){
        errorSignup.innerHTML='All inputs is required';
        errorSignup.style.color ='red';
        flag = false;
        return false
        }
    }
    flag = true;
    if(flag == true){
        errorSignup.innerHTML='Success';
        errorSignup.style.color ='green';
        errorSignup.style.fontSize ='17px'
        return true
    }
}

function checkExist(){
    for(var i=0;i<registerArray.length;i++){
        if(registerArray[i].email == signupEmail.value ){
            errorSignup.innerHTML='email already exists';
            errorSignup.style.color ='red'
            return false
        }
    }
}

//----login----//

function loginBtn() {
    var email = loginEmail.value
    var password = loginPassword.value
    if(loginRequired()== true && checkUser()!= false){
        location.href ='homePage.html'
    for (var i = 0; i < registerArray.length; i++) {
        if (registerArray[i].email == email && registerArray[i].password == password) {
            localStorage.setItem('username', registerArray[i].name)
        } 
    }
    }
}

function loginRequired(){
    var flag = true;
    for (var i=0 ; i<allInputs.length; i++){
        if(allInputs[i].value == ""){
        errorloginIn.innerHTML='All inputs is required';
        errorloginIn.style.color ='red';
        flag = false;
        return false
        }
    }
    flag = true;
    if(flag == true){
        errorloginIn.innerHTML="";
        return true
    }
}

function checkUser(){
    var flag = true;
    for(var i=0; i<registerArray.length; i++){
        if(registerArray[i].email == loginEmail.value && registerArray[i].password == loginPassword.value ){
            flag = true;
            return true
        }
    }
    flag = false;
    if(flag == false){
        errorloginIn.innerHTML='incorrect email or password'
        errorloginIn.style.color ='red'
        return false
    }
}

//----HomePage----//
var username = localStorage.getItem('username')
if (username) {
    document.getElementById('username').innerHTML = `Welcome ${username}`
} 
function logout() {
    localStorage.removeItem('username')
}











var username = prompt ("Enter your Email id ");
var htag = document.querySelector ('h1');

function setusername (username) {

    if (username == null || username.length == 0 ){
        alert("Please Enter your Email");
    } else{
        htag.textContent = username;
    }
    
    
}
setusername(username);
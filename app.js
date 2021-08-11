


function localStr() {
    var name = document.getElementById("inputName")
    var number = document.getElementById("inputNumber")
    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    let errorDiv= document.getElementById("errorDiv")
    let success= document.getElementById("success")
    var emailc = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var userc = /^[a-z0-9_-]{3,16}$/;
    var numc = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    var passc = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let user = {
        name: name.value,
        number: number.value,
        email: email.value,
        password: password.value
    }
    if (userc.test(name.value)) {
        errorDiv.style.display="none"
        if (numc.test(number.value)) {
            errorDiv.style.display="none"
            if (emailc.test(email.value)) {
                errorDiv.style.display="none"
                if (passc.test(password.value)) {
                    register()
                    success.style.display="block"
                    errorDiv.style.display="none"
                }
                else {
                    errorDiv.innerHTML="check Your Password plz"
                    errorDiv.style.display="block"
                    // alert("pass check")
                }
            }
            else {
                // alert('check email')
                errorDiv.innerHTML="check Your email plz"
                errorDiv.style.display="block"
            }
        }
        else {
            // alert('check number')
            errorDiv.innerHTML="recheck Your number "
            errorDiv.style.display="block"
        }
    }
    else {
        // alert(' username check')
        errorDiv.innerHTML="check Your username plz"
        errorDiv.style.display="block"

    }
}
let register = () => {
    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    var signupText = document.getElementById("signupText")
    var loader = document.getElementById("loader")
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      // Signed in 
     console.log("data ah gya==>",res.user)
    })
    .catch((error) => {
    
    console.log(error.message)
    if(error.message == "The email address is already in use by another account."){
        alert("The email address is already in use by another account.")
    }
      
    });
       
}











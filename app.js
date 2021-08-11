


function localStr() {
   let name = document.getElementById("inputName")
   let number = document.getElementById("inputNumber")
   let email = document.getElementById("inputEmail")
   let password = document.getElementById("inputPassword")
    let errorDiv= document.getElementById("errorDiv")
   
   let emailc = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   let userc = /^[a-z0-9_-]{3,16}$/;
   let numc = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
   let passc = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

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
   let email = document.getElementById("inputEmail")
   let password = document.getElementById("inputPassword")
   let signupText = document.getElementById("signupText")
   let loader = document.getElementById("loader")
   let success= document.getElementById("success")
   loader.style.marginLleft="50%";
        loader.style.display="inline-block"
        signupText.style.display="none"
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      // Signed in 
      
      loader.style.display="none"
      signupText.style.display="inline-block"
      success.style.display="block"
     console.log("data ah gya==>",res.user)
     setTimeout(()=>{
        window.location ="login.html"
     },1000)
    })
    .catch((error) => {
    
        loader.style.display="none"
        signupText.style.display="inline-block"

    console.log(error.message)
    if(error.message == "The email address is already in use by another account."){
        errorDiv.innerHTML="The email address is already in use by another account."
        errorDiv.style.display="block"
    
    }
      
    });
       
}











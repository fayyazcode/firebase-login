function gotohome() {

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    let signinText = document.getElementById("signinText")
    let loaderSignin = document.getElementById("loaderSignin")
    let errorDiv = document.getElementById("errorDiv")

    loaderSignin.style.marginLleft="50%";
    loaderSignin.style.display="inline-block"
    signinText.style.display="none"
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            // Signed in
            var user = res.user;
            loaderSignin.style.display="none"
            signinText.style.display="block"
           window.location="home.html"

            // ...
        })
        .catch((error) => {
            var errorMessage = error.message;
            loaderSignin.style.display="none"
            signinText.style.display="block"
            errorDiv.style.display="block"
            errorDiv.innerHTML=errorMessage;
            console.log(errorMessage)
        });
}
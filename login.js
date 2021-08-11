function gotohome() {

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("login ho gya",userCredential.user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}
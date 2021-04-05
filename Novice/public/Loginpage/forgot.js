// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBXDr9Mmlq5Cfy6Gd686cG9kXVk9WOV9cA",
    authDomain: "novice-flashlist.firebaseapp.com",
    projectId: "novice-flashlist",
    storageBucket: "novice-flashlist.appspot.com",
    messagingSenderId: "875395536390",
    appId: "1:875395536390:web:cc1a94b6902e5f2030d587",
    measurementId: "G-RZJKYZLMZP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




document.getElementById('formReg').addEventListener('submit',function(e){
    e.preventDefault();
  
    var email = document.getElementById('email').value; 

    if(email != ""){
        firebase.auth().sendPasswordResetEmail(email).then(function(){
            alert("Email has been sent to you, please check and verify")
            window.location='../Loginpage/login.html'


        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.messagel

            console.log(errorCode);
            console.log(errorMessage);

            alert(errorMessage);
        });
    }else{
        alert("Please write your email first.")
    }
  });
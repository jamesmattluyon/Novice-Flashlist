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
    
    
  const auth = firebase.auth();


  document.getElementById('formReg').addEventListener('submit',function(e){
    e.preventDefault();
    
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var password1 = document.getElementById('password1');
  
  
    if(password.value==password1.value){
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(()=>{
        firebase.auth().signOut();
        console.log('success');
        firebase.database().ref('users/'+firebase.auth().currentUser.uid).set({
          firstName: firstname.value,
          lastName: lastname.value,
          UserId:firebase.auth().currentUser.uid,
          email:firebase.auth().currentUser.email
        })
        firebase.database().ref('users/' + firebase.auth().currentUser.uid+ "/flashcard").set({
          flashcards: 0,
          question: 0,
          answer: 0,
        })
        .then(()=>{
          window.location='../Loginpage/login.html'
        });
        alert("Account has been successfully created")
      })
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if(errorCode=='auth/email-already-in-use'){
          alert(errorMessage);
        }else{
          alert(errorMessage);
        }
      })}else{
        alert("Password does not match")
      }
})
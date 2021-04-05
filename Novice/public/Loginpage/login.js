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

  var email = document.getElementById('email');
  var password = document.getElementById('password');

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    console.log('success');
    firebase.auth().onAuthStateChanged(function(user){
  
      if(user){
       
       var uid = user.uid;
       window.location='../Flashcard/flashcard.html'
       //Take user to a different or home page
    
       //is signed in
       
      }else{
    
      }
      
     });
  })


.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  if(errorCode=='auth/email-already-in-use'){
    alert(errorMessage);
  }else{
    alert(errorMessage);
  }
});



});


 function signOut(){
  firebase.auth().signOut().then(function() {
    window.location='../index.html' 
  }).catch(function(error) {
  });
 }


 

function loadScore(){
  firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function(snapshot){
    document.getElementById("user").innerHTML= snapshot.val().firstName;
  });
}

function loadTotal(){firebase.auth().onAuthStateChanged(function(user){

  if(user){

   loadScore();
   
   //Take user to a different or home page

   //is signed in
   
  }else{
    alert("Log in to continue");
    location="../Loginpage/login.html"
  }
  
 });}

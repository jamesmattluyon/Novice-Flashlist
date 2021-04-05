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


function flashcard1(){
	window.location='../Flashcard/flashcard.html'
  }
  
  function todo1(){
	window.location='../Todolist/todolist.html'
  }
  
  function udemy1(){
	window.location='../Udemy/udemy.html'
  }
  
  function profile(){
	window.location='../Profile/profile.html'
  }

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
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function(snapshot){
        document.getElementById("userId").innerHTML= snapshot.val().UserId;
      });
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function(snapshot){
        document.getElementById("email").innerHTML= snapshot.val().email;
      });
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function(snapshot){
        document.getElementById("firstname").innerHTML= snapshot.val().firstName;
      });
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function(snapshot){
        document.getElementById("lastname").innerHTML= snapshot.val().lastName;
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
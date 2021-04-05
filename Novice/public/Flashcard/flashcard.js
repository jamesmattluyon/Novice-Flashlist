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


const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

// if(question.length != 0 && answer.length != 0){
//   // our boxes have data and we take database
//   var key = firebase.database().ref('users').child("unfinished_task").push().key;
//   var task = {
//     Question: question.value,
//     Answer: answer.value,
//     key: key
//   };

//   var updates = {};
//   updates["/unfinished_task/" + key] = task;
//   firebase.database().ref('users/' + firebase.auth().currentUser.uid).update(updates);
//   saveFlashcard();
// }

function showCreateCardBox(){
  createCard.style.display = "block";
}

function hideCreateCardBox(){
  createCard.style.display = "none";
}

function saveFlashcard(){
  var div = document.createElement("div");
  var h2_question = document.createElement("h2");
  var h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  h2_question.innerHTML = question.value;

  h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
  h2_answer.innerHTML = answer.value;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

 
  // firebase.database().ref('users/' + firebase.auth().currentUser.uid+ "/Flashcard").update({
  //   h2_question = snapshot.val().question,
  //   h2_answer = snapshot.val().answer,
  // });

  firebase.database().ref('users/' + firebase.auth().currentUser.uid+ "/flashcard").update({
    flashcards: div.className,
    question: h2_question.innerHTML = question.value,
    answer:  h2_answer.innerHTML = answer.value,
  });


  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none"){
      h2_answer.style.display = "block";
    }
    else{
      h2_answer.style.display = "none";
    }
  })

  div.addEventListener("dblclick", function(){
    div.remove();
  })

  
  
  
  flashcards.insertAdjacentElement("beforeend", div);

  question.value = '';
  answer.value = '';

  

}



function loadScore(){
  firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', function(snapshot){
    document.getElementById("user").innerHTML= snapshot.val().firstName;
  });
  //   firebase.database().ref('users/' + firebase.auth().currentUser.uid+ "/flashcard").on('value', function(snapshot){
  //     document.getElementsByClassName("flashcards")[0].innerHTML = snapshot.val().question;
  //     document.getElementsByClassName("flashcards")[0].innerHTML = snapshot.val().answer;
  
  // });
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
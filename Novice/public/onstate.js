var firebaseConfig = {
    apiKey: "AIzaSyDSn5ky08ETlFujvpSydjLMWPqHFmrtcKE",
    authDomain: "watask-8f6e5.firebaseapp.com",
    databaseURL: "https://watask-8f6e5-default-rtdb.firebaseio.com",
    projectId: "watask-8f6e5",
    storageBucket: "watask-8f6e5.appspot.com",
    messagingSenderId: "710434386303",
    appId: "1:710434386303:web:2b211a7469ad2f506d2a4a",
    measurementId: "G-3V0RXYEZXL"
  };
  // Initialize Firebase


function checkonstate(){firebase.auth().onAuthStateChanged(function(user){
  
    if(user){
     
     console.log('user is signed');
     
     //Take user to a different or home page
  
     //is signed in
     
    }else{
        alert("Log in to continue");
        location="../Loginpage/login.html"
    }
    
   });}

   function checkonstatelog(){firebase.auth().onAuthStateChanged(function(user){
  
    if(user){
     
     console.log('user is signed');
     location="../Flashcard/flashcard.html"
     
     //Take user to a different or home page
  
     //is signed in
     
    }else{
    }
    
   });}
   
   function checkonstatehome(){firebase.auth().onAuthStateChanged(function(user){
  
    if(user){
     
     console.log('user is signed');
     location="Flashcard/flashcard.html"
     
     //Take user to a different or home page
  
     //is signed in
     
    }else{
    }
    
   });}
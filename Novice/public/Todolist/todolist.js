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



		const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');

		btn.addEventListener('click', addList);
		input.addEventListener('keyup', (e)=>{
			(e.keyCode === 13 ? addList(e) : null);
		})

		function addList(e){
			const notCompleted = document.querySelector('.notCompleted');
			const Completed = document.querySelector('.Completed');

			const newLi = document.createElement('li');
			const checkBtn = document.createElement('button');
			const delBtn = document.createElement('button');

			checkBtn.innerHTML = '<i class="fa fa-check"></i>';
			delBtn.innerHTML = '<i class="fa fa-trash"></i>';


			if(input.value !==''){
				newLi.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newLi);
				newLi.appendChild(checkBtn);
				newLi.appendChild(delBtn);
			}

			checkBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				checkBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
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
	 addList(e);
	 
	 btn.addEventListener('click', addList);
	 input.addEventListener('keyup', (e)=>{
		 (e.keyCode === 13 ? addList(e) : null);
	 })
	 
	 //Take user to a different or home page
  
	 //is signed in
	 
	}else{
	  alert("Log in to continue");
	  location="../Loginpage/login.html"
	}
	
   });}

   function signOut(){
	firebase.auth().signOut().then(function() {
	  window.location='../index.html' 
	}).catch(function(error) {
	});
   }  
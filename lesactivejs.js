
function activeFunc() {
var e = document.getElementById("leschoice");
var lesname = e.options[e.selectedIndex].value;
var firebaseRef = firebase.database().ref('lessons/active').child(lesname);
	firebaseRef.child("active").set("1");
	setFirebase(lesname);
}
function disableFunc() {
	var e = document.getElementById("leschoice");
var lesname = e.options[e.selectedIndex].value;
	var firebaseRef = firebase.database().ref('lessons/active').child(lesname);
	firebaseRef.child("active").set("0");
	setFirebase(lesname);
}
function changedSelected(){
	var e2 = document.getElementById("leschoice");
var lesname2 = e2.options[e2.selectedIndex].value;
		fireScreen2 = firebase.database().ref().child('lessons/active/').child(lesname2);
	fireScreen2.once('value', function(snapshot) {
  if (snapshot.child("active").val() == "1") { 
	  document.getElementById('activeornot').innerText = 'פעיל';
	  document.getElementById("activeornot").style.color = "#30964b";
	  
  }
		else {
			 document.getElementById('activeornot').innerText = 'לא פעיל';
			document.getElementById("activeornot").style.color = "#ad1710";
		}
	})
}
function setFirebase(lesname){
		fireScreen = firebase.database().ref().child('lessons/active/').child(lesname);
	fireScreen.once('value', function(snapshot) {
  if (snapshot.child("active").val() == "1") { 
	  document.getElementById('activeornot').innerText = 'פעיל';
	  document.getElementById("activeornot").style.color = "#30964b";
  }
		else {
			 document.getElementById('activeornot').innerText = 'לא פעיל';
			document.getElementById("activeornot").style.color = "#ad1710";
		}
	})
					
}


function chooseNumber(){
	var number = document.getElementById("screen").value
	var firebaseRef = firebase.database().ref('crypt/abc');
	firebaseRef.child("number").set(number);
}
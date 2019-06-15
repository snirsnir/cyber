// JavaScript Documentdadsa

function actionOnSubmit()
{
	var title = document.getElementById("mytitle").value
	var desc = document.getElementById("writequest").value
//Get the select select list and store in a variable
var e = document.getElementById("formchoice");

//Get the selected value of the select list
var formaction = e.options[e.selectedIndex].value;
	var firebaseRef = firebase.database().ref("lessons").child(formaction);
	firebaseRef.child("title").set(title);
	firebaseRef.child("desc").set(desc);

//Update the form action
document.form1.action = formaction;

}

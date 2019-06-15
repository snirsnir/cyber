// JavaScript Documentdadsa
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');
window.picture;
fileButton.addEventListener('change',function(e){
	var e2 = document.getElementById("formchoice");
	var lesname = e2.options[e2.selectedIndex].value;
	var file = e.target.files[0];
	var storageRef = firebase.storage().ref('lesImages/' + lesname);
	var task = storageRef.put(file);
	task.on('state_changed',
			function progress(snapshot){
		var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		uploader.value = percentage;
		
	},
			function error(err){
		
		
	},
			
			function complete(){
		task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			window.picture = downloadURL;
			
	}
		
	);
} ) ; 
} );
function actionOnSubmit()
{
	var title = document.getElementById("mytitle").value
	var desc = document.getElementById("writequest").value
//Get the select select list and store in a variable
var e = document.getElementById("formchoice");

//Get the selected value of the select list
var formaction = e.options[e.selectedIndex].value;
	var firebaseRef = firebase.database().ref('lessons/tabs').child(formaction);
	firebaseRef.child("title").set(title);
	firebaseRef.child("desc").set(desc);
	firebaseRef.child("picture").set(picture);

//Update the form action
document.form1.action = formaction;

}

var titletab = document.getElementById("titletab");
var descotab = document.getElementById("descotab");
var imageFronttab = document.getElementById("imagefronttab");
var screen = localStorage.getItem("screen");
var whatlesson = addles(screen);
window.onload = function() {
	fireScreen = firebase.database().ref().child('lessons/tabs').child(whatlesson);
	fireScreen.once('value', function(snapshot) {
	     fireScreen.on('value',function(datasnapshot){
		titletab.innerText = snapshot.child('title').val();
		descotab.innerText = snapshot.child('desc').val();
		imageFronttab.src = snapshot.child('picture').val();
	})
  
})
}

function goFront(){
	window.top.location.href = "front";
}






function addles(num){ //add les to whatlesson
	var addles = "les"
	var whatless = addles.concat(num);
	
	return whatless;
}
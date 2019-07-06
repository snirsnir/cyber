var firebaseHeadingRef = firebase.database().ref().child('lessons/type/');
var titleofhesber = document.getElementById("titlehesber");
var descofhesber = document.getElementById("deschesber");
var titleofshelon = document.getElementById("titleshelon");
var answersofhesber = document.getElementById("answershesber");
var screen = 1;
var whatlesson = addles(screen);
var countChild;//for counting how much screens in lesson
var DorQ = "DorQ"; //check if hesber or sheelon
var answerscount; //for counthing how much answers
var i = 1; // I IS THE COUNTER OF FIREBASE starts from 1
var j = 0; // J IS THE COUNTER OF ANSWERS IN SHELON starts from 0
var br = document.createElement("br");
var counterans=1 //counting the answers for names!
var checkans = document.getElementsByName("answers");
var fireScreen;
var getchecked;
	document.getElementById("adminheader").innerHTML = "שיעור מספר" + " " + screen; //FOR THE TITLE
	firebaseHeadingRef = firebase.database().ref().child('lessons/type/').child(whatlesson);
firebaseHeadingRef.once('value', function(snapshot) {
	countChild = snapshot.numChildren(); 	
});
function addles(num){ //add les to whatlesson
	var addles = "les"
	var whatless = addles.concat(num);
	return whatless;
}
function nextScreen() //PRESSING ON NEXT BUTTON INCREASE I
{
i++;
answersofhesber.innerText = "";
  document.body.scrollTop = 0;//TOP OF PAGE
  document.documentElement.scrollTop = 0;
counterans = 1 //resetting the counterans for next shelon
doagain();
}
function doagain()// DO AGAIN DOING THE FUNCTION AT THE FIRST TIME AND CALLED FROM NEXT SCREEN BUTTON
{
	var outputans="";
	fireScreen = firebase.database().ref().child('lessons/type/').child(whatlesson).child(i);
	fireScreen.once('value', function(snapshot) {
  if (snapshot.child(DorQ).val() == "0") { //CHECK IF HESBER OR SHEELON 0 HESBER 1 SHEELON IF 0 TRUE
	  $('#shelonD2').hide();
	  $('#hesberD2').show();
	     fireScreen.on('value',function(datasnapshot){
		titleofhesber.innerText = snapshot.child('title').val();
		descofhesber.innerText = snapshot.child('desc').val();
	})
  }
		else if (snapshot.child(DorQ).val() == "1"){
			$('#hesberD2').hide();
			$('#shelonD2').show();
			fireScreen.on('value',function(datasnapshot){
		titleofshelon.innerText = snapshot.child('title').val();
		var fireanswers = firebase.database().ref().child('lessons/type/').child(whatlesson).child(i).child('answers');
		fireanswers.once('value', function(snapshot) {
	    answerscount = snapshot.numChildren(); 
});
		for (var j=0;j<answerscount;j++){
			outputans+= '<input type="radio" class="stam" value='+ counterans +' name="answers" onclick=getnumber(value) >' + snapshot.child('answers/'+j).val() + '<br><br>';
			document.getElementById("answershesber").innerHTML=outputans;
			counterans++;	
		}		
	})
		}
		if(i>1){//now the countchild can be counted!
				if (i == countChild){ //MAKING END BUTTON
		document.getElementById('next').innerText = 'סיום';
		document.getElementById('next').style.background='red';
				}
			if (i == countChild+1){//making onclick
		document.getElementById("next").onclick = alert("naknik");
	}
		}
});
}
function shelonans(){//onclick GUESS BUTTON
			fireScreen.once('value', function(snapshot) {
	    var correct = snapshot.child('correct').val();
				if(getchecked == correct){
					alert("great");
				}
				else{
					alert("bad");
				}
				   
});
}
function getnumber(value){
		getchecked = value;
}




		
		




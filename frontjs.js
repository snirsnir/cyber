var firebaseHeadingRef = firebase.database().ref().child('lessons/type/');
var titleofhesber = document.getElementById("titlehesber");
var descofhesber = document.getElementById("deschesber");
var titleofshelon = document.getElementById("titleshelon");
var answersofhesber = document.getElementById("answershesber");
var imageFront = document.getElementById("imagefront");
var screen = localStorage.getItem("screen");
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
var hintcounter = 0; //hint counter check false answers
var hint1 = document.getElementById("hint1");
var hint2 = document.getElementById("hint2");
var correctdesc = document.getElementById("correctdesc");
var backButton = document.getElementById("back");
var counterBack = 0;
var flagbackhide = 0;
	firebaseHeadingTitle = firebase.database().ref().child('lessons/tabs/').child(whatlesson);
firebaseHeadingTitle.once('value', function(snapshot) {
	document.getElementById("adminheader").innerHTML = snapshot.child('title').val(); //FOR THE TITLE
});
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
function backScreen(){
	if (i == countChild){
		document.getElementById('next').innerText = 'הבא';
		document.getElementById('next').style.background='#1084bd';
	}
	i--;
	counterBack--;
if (counterBack == 1){
	$('#back').hide();
}
	
	
		var outputans="";
	fireScreen = firebase.database().ref().child('lessons/type/').child(whatlesson).child(i);
	fireScreen.once('value', function(snapshot) {
	     fireScreen.on('value',function(datasnapshot){
		titleofhesber.innerText = snapshot.child('title').val();
		descofhesber.innerText = snapshot.child('desc').val();
	})
  
})
}
function doagain()// DO AGAIN DOING THE FUNCTION AT THE FIRST TIME AND CALLED FROM NEXT SCREEN BUTTON
{
	var outputans="";
	fireScreen = firebase.database().ref().child('lessons/type/').child(whatlesson).child(i);
	fireScreen.once('value', function(snapshot) {
  if (snapshot.child(DorQ).val() == "0") { //CHECK IF HESBER OR SHEELON 0 HESBER 1 SHEELON IF 0 TRUE
	  $('#shelonD2').hide();
	  $('#hesberD2').show();
	  counterBack++; //for enabling backbutton;
	  if (counterBack == 2){
		  $('#back').show();
	  }
	     fireScreen.on('value',function(datasnapshot){
		titleofhesber.innerText = snapshot.child('title').val();
		descofhesber.innerText = snapshot.child('desc').val();
		imageFront.src = snapshot.child('picture').val();
	    
	})
  }
		else if (snapshot.child(DorQ).val() == "1"){
			counterBack = 0; //disable the counterback button
			hintcounter = 0 // resetting hints counter
			$('#hint1').hide();
			$('#hint2').hide();
			$('#correctdesc').hide();
			$('#guess').show();
			$('#back').hide();
			$('#next').hide();
			$('#hesberD2').hide();
			$('#shelonD2').show();
			fireScreen.on('value',function(datasnapshot){
		imageFront.src = snapshot.child('picture').val();
		titleofshelon.innerText = snapshot.child('title').val();
		var fireanswers = firebase.database().ref().child('lessons/type/').child(whatlesson).child(i).child('answers');
		fireanswers.once('value', function(snapshot) {
	    answerscount = snapshot.numChildren(); 
});
		for (var j=0;j<answerscount;j++){
			outputans+= '<input type="radio" class="stam" id='+counterans+' value='+ counterans +' name="answers" onclick=getnumber(value) >' + snapshot.child('answers/'+j).val() + '<br><br>';
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
				alert("כל הכבוד! סיימת את השיעור, מיד תועבר למסך הראשי")
		document.getElementById("next").onclick = window.top.location.href = "index.html";
	}
		}
});
}
function shelonans(){//onclick GUESS BUTTON
			fireScreen.once('value', function(snapshot) {
	    var correct = snapshot.child('correct').val();
				hint1.innerText = "רמז מספר 1:" + " " + snapshot.child('hints/hint1').val();
				hint2.innerText = "רמז מספר 2:" + " " + snapshot.child('hints/hint2').val();
				correctdesc.innerText =  "הסבר לתשובה הנכונה:" + " " +  snapshot.child('correctdesc').val();
				if (!getchecked){
					alert("חייב לבחור");
				}
				else if(getchecked == correct){
					alert("נכון מאוד");
					$('#correctdesc').show();
					$('#next').show();
					$('#guess').hide();
				}
				else{
					hintcounter++;
					if(hintcounter == 1){
					$('#hint1').show();
						alert("טעית");
					}
					 if (hintcounter == 2){
						$('#hint2').show();
						 alert("טעית");
					}
					if (hintcounter == 3){
						alert("טעית פעם נוספת, התשובה הנכונה תסומן וההסבר לתשובה יופיע");
						$('#correctdesc').show();
						checkRadio(correct);
						$('#guess').hide();
						$('#next').show();
					}
				}
				   
});
}
function getnumber(value){
		getchecked = value;
}
function checkRadio(id) {//FUNC THAT CHECKED THE CORRECT ANS IF 3 FALSE
    document.getElementById(id).checked = true;
}



		
		




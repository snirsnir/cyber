// JavaScript Documentdadsa
 //CLICKS COUNTER 
	     var clicks = 1;
		document.getElementById("counter").innerHTML = clicks;
	    var rb = [];
        var counter = 0;
//HIDE AND SHOW HESBER SHEELON
		$(function(){
    $('#hesber').on('click',function(){
      $('#hesberD').show();
		$('#shelonD').hide();
    });
    $('#shelon').on('click',function(){
      $('#shelonD').show();
		$('#hesberD').hide();
    });
});
function nextScreen()
{
			if (clicks == 1){
			$('#backb').show();
		}
        clicks ++;
        document.getElementById("counter").innerHTML = clicks;
	var whathide = document.getElementById("hesberD");
	var flagDorQ; // 0 IS DESCRIPTION SCREEN 1 IS QUEST SCREEN
	//------------------------------------------to the else!!//
	var title = document.getElementById("mytitle").value
	var desc = document.getElementById("writequest").value
    var e = document.getElementById("formchoice");
    var formaction = e.options[e.selectedIndex].value;
	var firebaseRef = firebase.database().ref('lessons/type').child(formaction).child(clicks-1);
	//------------------------------------------to the else!!//
		//------------------------------------------to the if!!//
	var correct = document.getElementById("correct").value
	var questtitle = document.getElementById("mysquest").value
	var hint1 = document.getElementById("hint1").value
	var hint2 = document.getElementById("hint2").value
	var firebaseRef2 = firebase.database().ref('lessons/type').child(formaction).child(clicks-1).child('answers');
	var firebaseRef3 = firebase.database().ref('lessons/type').child(formaction).child(clicks-1).child('hints');
	//------------------------------------------to if!!//
	 if (window.getComputedStyle(whathide).display === "none") { //if hesber is hidden
		 flagDorQ = 1;
		 firebaseRef.child("DorQ").set(flagDorQ);
		 firebaseRef.child("title").set(questtitle);
		 firebaseRef.child("correct").set(correct);
		 firebaseRef3.child("hint1").set(hint1);
		 firebaseRef3.child("hint2").set(hint2);
		 var i;
    for (i=0;i<rb.length;i++){
		firebaseRef2.child(i).set(rb[i]);
	}
		 $('#approve').empty();
		 counter = 0;
		 rb = [];
		 document.getElementById("correct").value= "";
		 document.getElementById("mysquest").value= "";
		 document.getElementById("input").value= "";
		 document.getElementById("hint1").value= "";
		 document.getElementById("hint2").value= "";
  }
	else{
	flagDorQ = 0;
	firebaseRef.child("title").set(title);
	firebaseRef.child("desc").set(desc);
	firebaseRef.child("DorQ").set(flagDorQ);
//Update the form action
document.form1.action = formaction;
	document.getElementById("mytitle").value= "";
	document.getElementById("writequest").value= "";
	}
}
		function backScreen() { // retrive counter of screen
		if (clicks == 2){ //2 BECAUSE VAR STARTS WITH 1
			$('#backb').hide();
		}
        clicks -= 1;
        document.getElementById("counter").innerHTML = clicks;
    }
function changedSelected()
{
   	document.getElementById("counter").innerHTML = clicks;
    clicks = 1;
}
function addingRadio()
{
	var mybr = document.createElement('br');
	var name = $('#input').val();
	$('#approve').append('<input type="radio" { display: none } />'+name);
	$('#approve').append(mybr);
	rb[counter] = name;
	counter++;
	document.getElementById("addingradio").value= "";

}
function chooseScreen(){
	var temp = clicks;
	var screen = document.getElementById("screen").value
	document.getElementById("counter").innerHTML = screen;
	clicks = screen;
	
}

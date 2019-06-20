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
        clicks += 1;
        document.getElementById("counter").innerHTML = clicks;
	var whathide = document.getElementById("hesberD");
	var flagDorQ; // 0 IS DESCRIPTION SCREEN 1 IS QUEST SCREEN
	
	 if (window.getComputedStyle(whathide).display === "none") {
    alert(rb[3]);
  }
	else{
	flagDorQ = 0;
	var title = document.getElementById("mytitle").value
	var desc = document.getElementById("writequest").value
//Get the select select list and store in a variable
    var e = document.getElementById("formchoice");
	

//Get the selected value of the select list
    var formaction = e.options[e.selectedIndex].value;
	var firebaseRef = firebase.database().ref('lessons/type').child(formaction).child(clicks-1);
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
	var name = $('#addingradio').val();
	$('#approve').append('<input type="radio" />'+name);
	$('#approve').append(mybr);
	rb[counter] = name;
	counter++;
	document.getElementById("addingradio").value= "";
}       

		var modal = document.getElementById('myModal');
	    var btn = document.getElementById("lessons");
		var span = document.getElementsByClassName("close")[0];
		var les1 = document.getElementById("les1");
        var screen;
		btn.onclick = function() {
  		modal.style.display = "block";

}
		span.onclick = function() {
  modal.style.display = "none";
}
		window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}	
var $overlay = $('<div id="overlay"></div>');
var $iframe = $('<iframe width="840" height="430" frameborder="0" marginwidth="0" margin="0" height="0" scrolling="no" allowfullscreen></iframe>');

// append iframe to overaly
$overlay.append($iframe);

// append overlay to body
$('body').append($overlay);

// slideshare slides - capture the click event on a link to the slide

// when overlay is clicked
$overlay.click(function() {
    // hide overlay
    $overlay.hide();
    $iframe.attr('src', '');
});
function goTab(element){
	isActive();
	screen = num(element.id);
	localStorage.setItem("screen",screen);
    event.preventDefault();
    var id = $(this).attr('href');
    var src = 'fronttab'
    // update overlay with iframe
    $iframe.attr('src', src);
    // show overlay
    $overlay.show();
}
function num(num1){ //extract num from the string
	var numb = num1.match(/\d/g);
numb = numb.join("");
return numb
}

    function addles(num){ //add les to whatlesson
	var addles = "les"
	var whatless = addles.concat(num);
	return whatless;
}
 function addlesbut(num){ //add les to whatlesson
	var addles = "lesbut"
	var whatless = addles.concat(num);
	return whatless;
}
    $(window).on('load', function() {
    	var buttons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
	var fireScreen = firebase.database().ref().child('lessons/active/');
	fireScreen.once('value', function(snapshot) {
	for (var i = 0; i < buttons.length;i++){
	var temp = addles(buttons[i]);
	var temp2 = addlesbut(buttons[i]);
	 fireScreen = firebase.database().ref().child('lessons/active/').child(temp);
  if (snapshot.child("active").val() == "1") { 
	  temp2[i].style.backgroundColor = "green";
  }
	
	}
	})	
})

	

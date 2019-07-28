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
var query = firebase.database().ref("lessons/active").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
		  if (snapshot.child(key).child("active").val() == "1") { 
	  document.getElementById(temp2).style.background='green';
  }
  });
});
	})
	

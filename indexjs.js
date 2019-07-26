		var modal = document.getElementById('myModal');
	    var btn = document.getElementById("lessons");
		var span = document.getElementsByClassName("close")[0];
		var les1 = document.getElementById("les1");
		btn.onclick = function() {
  		modal.style.display = "block";
		var screen;

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
	

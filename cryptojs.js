var flagb = 0; //flag of buttons
var tempbutton;
var hexab = document.getElementById("hexab");
var gematriab = document.getElementById("gematriab")
var abcb = document.getElementById("abcb");
var binaryb = document.getElementById("binaryb");
var VALUES = {};
var arrchar = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת","?",' ']
var misparim = ["1","2","3","4","5","6","7","8","9","10","20","20","30","40","40","50","50","60","70","80","80","90","90","100","200","300","400","?",' ']

function toGematriaCrypt()
{
	var i;
	var j;
	valueStr = document.form1.decryptt.value;
	var newword = "";
	var flagdot = 0;
	var splited = [];
	var position = valueStr.search(/[\u0590-\u05FF]/);
	if(position >= 0){
 
	for (i = 0;i<valueStr.length ; i++){
		for (j = 0 ; arrchar.length ;j++){
	if (valueStr[i] == arrchar[j]){
		if (flagdot == 1){
			newword += ":" + misparim[j];
			break;
		}
    else {newword += misparim[j];
		  flagdot++;
		break;
		 }
	}
		}
	}
	}
	else{
		alert("רק עברית בבקשה!");
	}
	alert(newword);
	splited = newword.split(":")
	var reversed = splited.reverse(); 
	var joined = reversed.join(":");
	document.form1.cryptt.value = joined;
}
function toGematriaDecrypt()
{
	valueStr = document.form1.cryptt.value;
	
}
function toAscii()
{
	valueStr = document.form1.cryptt.value;
	valueStr = valueStr.toLowerCase();
    var hex = "0123456789abcdef";
	var text = "";
	var i=0;
	var hexas = [];
	var startcon = "0x";
	var readyascii = [];
	var laststring = "";
	hexas = valueStr.split(':');
	for(i=0; i<hexas.length; i++)
	{
		var temphexas = startcon.concat(hexas[i]);
		readyascii[i] = temphexas;
	}
	for(var j = 0;j<readyascii.length;j++){
		 laststring += String.fromCharCode(readyascii[j]);
	}
	document.form1.decryptt.value = laststring;
	return false;
}

function toHex()
{
	valueStr = document.form1.decryptt.value;
	var flagdot = 0;
	var result = "";
    for(var i = 0; i < valueStr.length; i++){
        var partial = valueStr[i].charCodeAt(0).toString(16);
   if(flagdot == 1){
	   result += ":" + partial;
   }  
		else{
			result += partial;
			flagdot++;
		}
    }
    document.form1.cryptt.value = result;
}
function pressed(element){
	if (flagb == 1){
		document.getElementById(tempbutton).style.transform = "translateY(-4px)";
	document.getElementById(tempbutton).style.backgroundColor = "#1084bd";
		$('#cryptt').val('');//empty the textareas
		$('#decryptt').val('');
	flagb--;	
	}
	showTest(element);//func that will show TEST in textarea
    document.getElementById(element.id).style.transform = "translateY(4px)";
	document.getElementById(element.id).style.backgroundColor = "#044463";
	flagb++;
	tempbutton = element.id
}
function whatToDo(element){//decrypt and crypt what
	if (tempbutton == undefined){
		alert("יש לבחור סוג הצפנה");
	}
	if (tempbutton == "hexab" && element.id == "crypt"  )//crypt hexa
		{
			toHex();
		}
	else if (tempbutton == "hexab" && element.id == "decrypt"  )//decrypt hexa
		{
			toAscii();
		}
	else if (tempbutton == "gematriab" && element.id == "crypt")//decrypt hexa
		{
			toGematriaCrypt();
		}
	else if (tempbutton == "gematriab" && element.id == "decrypt")//decrypt hexa
		{
			toGematriaDecrypt();
		}
	
}
function showTest(element){//this func will show a tester of crypt AT THIS TIME ONLY HEXA
	if (element.id == "hexab"){
		$('#cryptt').val('74:65:73:74');
		$('#decryptt').val('test');
	}
	else if (element.id == "gematriab"){
		$('#cryptt').val('5:100:10:4:2');
		$('#decryptt').val('בדיקה');
	}
}


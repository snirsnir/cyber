var flagb = 0; //flag of buttons
var tempbutton;
var hexab = document.getElementById("hexab");
var gematriab = document.getElementById("gematriab")
var abcb = document.getElementById("abcb");
var binaryb = document.getElementById("binaryb");
var upperTxt = document.getElementById('hex');
var downTxt = document.getElementById('ascii');

var symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@";
var loAZ = "abcdefghijklmnopqrstuvwxyz";
symbols+= loAZ.toUpperCase();
symbols+= "[\\]^_`";
symbols+= loAZ;
symbols+= "{|}~";

function toAscii()
{
	valueStr = document.form1.hex.value;
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
	document.form1.ascii.value = laststring;
	return false;
}

function toHex()
{
	valueStr = document.form1.ascii.value;
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
    document.form1.hex.value = result;
}
function pressed(element){
	if (flagb == 1){
		document.getElementById(tempbutton).style.transform = "translateY(-4px)";
	document.getElementById(tempbutton).style.backgroundColor = "#1084bd";
		$('#hex').val('');//empty the textareas
		$('#ascii').val('');
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
	if (tempbutton == "hexab" && element.id == "decrypt"  )//decrypt hexa
		{
			toAscii();
		}
	
}
function showTest(element){//this func will show a tester of crypt AT THIS TIME ONLY HEXA
	if (element.id == "hexab"){
		$('#hex').val('74:65:73:74');
		$('#ascii').val('test');
	}
	
}


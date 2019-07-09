var flagb = 0; //flag of buttons
var tempbutton;
var hexab = document.getElementById("hexab");
var gematriab = document.getElementById("gematriab")
var abcb = document.getElementById("abcb");
var binaryb = document.getElementById("binaryb");

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

	for( i=0; i<valueStr.length; i=i+2 )
	{
		var char1 = valueStr.charAt(i);
		if ( char1 == ':' )
		{
			i++;
			char1 = valueStr.charAt(i);
		}
		var char2 = valueStr.charAt(i+1);
		var num1 = hex.indexOf(char1);
		var num2 = hex.indexOf(char2);
		var value = num1 << 4;
		value = value | num2;

		var valueInt = parseInt(value);
		var symbolIndex = valueInt - 32;
		var ch = '?';
		if ( symbolIndex >= 0 && value <= 126 )
		{
			ch = symbols.charAt(symbolIndex)
		}
		text += ch;
	}

	document.form1.ascii.value = text;
	return false;
}

function toHex()
{
	var valueStr = document.form1.ascii.value;
	var hexChars = "0123456789abcdef";
	var text = "";
	for( i=0; i<valueStr.length; i++ )
	{
		var oneChar = valueStr.charAt(i);
		var asciiValue = symbols.indexOf(oneChar) + 32;
		var index1 = asciiValue % 16;
		var index2 = (asciiValue - index1)/16;
		if ( text != "" ) text += ":";
		text += hexChars.charAt(index2);
		text += hexChars.charAt(index1);
	}
	document.form1.hex.value = text;
	return false;
}
function pressed(element){
	if (flagb == 1){
		document.getElementById(tempbutton).style.transform = "translateY(-4px)";
	document.getElementById(tempbutton).style.backgroundColor = "#1084bd";
	flagb--;	
	}
    document.getElementById(element.id).style.transform = "translateY(4px)";
	document.getElementById(element.id).style.backgroundColor = "#044463";
	flagb++;
	tempbutton = element.id
}
function whatToDo(element){
	if (tempbutton == "hexab" && element.id == "crypt"  )//crypt hexa
		{
			toHex();
		}
	if (tempbutton == "hexab" && element.id == "decrypt"  )//decrypt hexa
		{
			toAscii();
		}
	
}


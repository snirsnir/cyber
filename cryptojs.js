var flagb = 0; //flag of buttons
var tempbutton;
var hexab = document.getElementById("hexab");
var gematriab = document.getElementById("gematriab")
var abcb = document.getElementById("abcb");
var binaryb = document.getElementById("binaryb");
var VALUES = {};
var arrchar = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת","?",' ']
var misparim = ["1","2","3","4","5","6","7","8","9","10","20","20","30","40","40","50","50","60","70","80","80","90","90","100","200","300","400","?",' ']
var numberAbc;
fire = firebase.database().ref('crypt/abc').on('value', function(snapshot) {
     numberAbc = snapshot.val().number;
});
function toGematriaCrypt()
{
	var i;
	var j;
	var valueStr = document.form1.decryptt.value;
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
	document.form1.cryptt.value = newword;
}
function toGematriaDecrypt()
{
	var newword2 = "";
	valueStr = document.form1.cryptt.value;
	var toArr = valueStr.split(":");
	var op = toArr.every(element => misparim.indexOf(element) > -1);
	if(op){
	for (var i =0;i<toArr.length; i++){
		for (var j = 0 ; misparim.length ;j++){
		if(toArr[i] == misparim[j]){
			newword2 += arrchar[j];
			break;
		}
			else if (toArr[i] == " "){
				newword2 += " ";
				break;
			}
		}
	}
	document.form1.decryptt.value = newword2;
	}
	else {alert("רק מספרים בגימטריה!");
		 }

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
function toAbcCrypt()
{
	var newchar = "";
	var number = parseInt(numberAbc);
	valueStr = document.form1.decryptt.value;
	for(var i=0;i<valueStr.length;i++)
		{
			if (valueStr[i] == " "){
				newchar += " ";
			}
			else if (valueStr[i] == "ש"){
				newchar += "א";
			}
			else if (valueStr[i] == "ת"){
				newchar += "ב";
			}
			else {
			var tempchar = valueStr.charCodeAt([i]);
			newchar += String.fromCharCode(tempchar+number);
			}
		}
document.form1.cryptt.value = newchar;
}
function toAbcDecrypt()
{
valueStr = document.form1.cryptt.value;
	var number = parseInt(numberAbc);
	var newchar = "";
		for(var i=0;i<valueStr.length;i++)
		{
			if (valueStr[i] == " "){
				newchar += " ";
			}
			else if (valueStr[i] == "א"){
				newchar += "ש";
			}
			else if (valueStr[i] == "ב"){
				newchar += "ת";
			}
			else {
			var tempchar = valueStr.charCodeAt([i]);
			
			newchar += String.fromCharCode(tempchar-number);
			}
		}
	document.form1.decryptt.value = newchar;
}
function toBinCrypt()
{
	var newword = "";
var valueStr = document.form1.decryptt.value;
	for (var i=0; i < valueStr.length; i++) {
     	newword +=valueStr[i].charCodeAt(0).toString(2) + " ";
    }
	document.form1.cryptt.value = newword;
}

function toBinDecrypt()
{
var valueStr = document.form1.cryptt.value;
 var strArray = valueStr.split(" ");
  var text ="";
  for(var i = 0 ; i<valueStr.length ; i++){
    var char = parseInt(strArray[i],2).toString(10);
    char = String.fromCharCode(char);
    text += char;
    }
	document.form1.decryptt.value = text;
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
	else if (tempbutton == "abcb" && element.id == "crypt")//decrypt hexa
		{
			toAbcCrypt();
		}
	else if (tempbutton == "abcb" && element.id == "decrypt")//decrypt hexa
		{
			toAbcDecrypt();
		}
		else if (tempbutton == "binaryb" && element.id == "crypt")//decrypt hexa
		{
			toBinCrypt();
		}
	else if (tempbutton == "binaryb" && element.id == "decrypt")//decrypt hexa
		{
			toBinDecrypt();
		}
	
	
}
function showTest(element){//this func will show a tester of crypt AT THIS TIME ONLY HEXA
	if (element.id == "hexab"){
		$('#cryptt').val('74:65:73:74');
		$('#decryptt').val('test');
		document.form1.cryptt.setAttribute('dir', 'ltr')
	}
	else if (element.id == "gematriab"){
		$('#cryptt').val('5:100:10:4:2');
		$('#decryptt').val('בדיקה');
		document.form1.cryptt.setAttribute('dir', 'ltr')
	}
	else if (element.id == "abcb"){
		$('#cryptt').val('עלפחל');
		$('#decryptt').val('ניסוי');
		document.form1.cryptt.setAttribute('dir', 'rtl')
	}
	else if (element.id == "binaryb"){
		$('#cryptt').val('10111010000 10111010111 10111101010 100000 10111010000 10111100100 10111100001');
		$('#decryptt').val('אחת אפס');
		document.form1.cryptt.setAttribute('dir', 'ltr')
	}
}


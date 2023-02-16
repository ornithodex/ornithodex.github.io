function reqListener () { 
	var jsonString = this.responseText.match(/(?<="table":).*(?=}\);)/g)[0];
	var json = JSON.parse(jsonString);
	document.getElementById("json").innerHTML = jsonString;
	return json
} 

var id = '1vX54pYMqq_U6QRTn86zsh9wf8uel9Oiku6NZ3bPPBTg';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid; 
var oReq = new XMLHttpRequest(); 

oReq.onload = reqListener; 
oReq.open("get", url, true); 
oReq.send();

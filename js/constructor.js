var request = new XMLHttpRequest(); 
var requestUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7peqmhRImLAk7GjWZvTJQ8gEz3CegWXD9OfHCRCfv9muRI6U-A49xMl7RZllMDEIdgOEfA7YVOaif/pub?gid=343623131&single=true&output=csv"

var numberOfQuestions = 12;

request.onload = function() { 
	var text = this.responseText;

	let entries = [];
	let csv = text.split(",");

	for (let i = 0; i <  Math.floor(csv.length/numberOfQuestions); i++) {
		entries.push(csv.slice(i*numberOfQuestions, (i+1)*numberOfQuestions))
	}
	
	console.info(entries);
	return entries;
} 

request.open("get", requestUrl, true); 
request.send();

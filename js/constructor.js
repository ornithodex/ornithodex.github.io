// THE TEST ENTRIES CAN BE SHOW OR DISPLAYED BY CHANGING THIS FLAG
// INPUT "__test__" as "Your Name" IN THE FORM TO FLAG A ENTRY AS A TEST
var displayTestEntries = false;

var request = new XMLHttpRequest();
var requestUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7peqmhRImLAk7GjWZvTJQ8gEz3CegWXD9OfHCRCfv9muRI6U-A49xMl7RZllMDEIdgOEfA7YVOaif/pub?gid=343623131&single=true&output=csv"

var numberOfQuestions = 12;

request.onload = function() { 
	var text = this.responseText;

	let entries = [];
	let rows = text.split("\r\n");

	for (let i = 0; i < rows.length; i++) {
		let csv = rows[i].split(",");
		entries.push(csv);
	}
	
	console.log("ENTRIES")
	console.info(entries);
	return entries;
} 

request.open("get", requestUrl, true); 
request.send();

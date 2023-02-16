var request = new XMLHttpRequest(); 
var requestUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7peqmhRImLAk7GjWZvTJQ8gEz3CegWXD9OfHCRCfv9muRI6U-A49xMl7RZllMDEIdgOEfA7YVOaif/pub?gid=1549752026&single=true&output=csv"

request.onload = function() { 
	var text = this.responseText;
	console.log(text);
	return text;
} 

request.open("get", requestUrl, true); 
request.send();

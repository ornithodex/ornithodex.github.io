// THE TEST ENTRIES CAN BE SHOW OR DISPLAYED BY CHANGING THIS FLAG
// INPUT "__test__" as "Your Name" IN THE FORM TO FLAG A ENTRY AS A TEST
var displayTestEntries = true;

var request = new XMLHttpRequest();
var requestUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7peqmhRImLAk7GjWZvTJQ8gEz3CegWXD9OfHCRCfv9muRI6U-A49xMl7RZllMDEIdgOEfA7YVOaif/pub?gid=343623131&single=true&output=csv"

var numberOfQuestions = 12;

request.onload = function() { 
	let entries = [];
	
	var text = this.responseText;
	let rows = text.split("\r\n");
	
	rows.shift();
	
	for (let i = 0; i < rows.length; i++) {
		let csv = rows[i].split(",");
		
		if (csv[2] != "__test__" || displayTestEntries) {
			entries.push(csv);
		}
	}

	for (let i = 0; i < entries.length; i++) {
		let entry = entries[i]
		console.info(entry)
		
		let list = document.getElementById("list")
		let li = document.createElement("li")
		let name = document.createElement("h2")
		let viewer = document.createElement("h3")
		
		name.textContent = entry[4]
		viewer.textContent = entry[2]

		li.appendChild(name)
		li.appendChild(viewer)
		list.appendChild(li)



		li.appendChild()


	}

	return entries;
} 


request.open("get", requestUrl, true); 
request.send();

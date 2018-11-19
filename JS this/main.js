/* eslint-env browser */
/* eslint "no-console": "off"  */
/* global $ */

var allData;

// Here is where it all begins...
$(function() {
	// Here we get the data and call onDataREady once the data is available
	var url = "data.json";
	$.getJSON(url, onDataReady);
});


// Function called when the json has been retrieved from the server/localFile/wherever
function onDataReady(loadedData) {
	// We store the data in a global variable for future use
	allData = loadedData;
	
	// Now we draw all divs with the data that was loaded
	var outlet = document.getElementById("outlet");
	var people = loadedData.people;
	
	for (var i = 0; i < people.length; i++) {
		appendPerson(outlet, people[i]);
	}
}

// Draw a single person's data
function appendPerson (parent, personData) {
	// Very straight-forward div creation
	var mainDiv = document.createElement("div");
	parent.appendChild(mainDiv);
	mainDiv.classList.add("framed");
	// This is important! we are setting a custom attribute called 'data-color' where we store the color
	// Do note that the value in personData.color corresponds to one of the keys in the data's 'colors' array
	mainDiv.setAttribute("data-color", personData.color);
	
	var nameDiv = document.createElement("h3");
	mainDiv.appendChild(nameDiv);
	nameDiv.textContent = personData["name"];
	
	var colorDiv = document.createElement("p");
	mainDiv.appendChild(colorDiv);
	colorDiv.textContent = "Favourite color is: " + personData["color"];
	
	/* Set up click event */
	mainDiv.addEventListener("click", personClicked);
}

// Respond to a click
function personClicked() {
	// Note: the variable 'this' will be the element that got clicked on and has an event listener attached to it
	// So 'this' will be one of the "mainDiv" that we created in the appendPerson method
	
	// First we read its data-color attribute. This was put in place when creating the Div
	// and will now be used to access the correct data from the data's 'colors' array
	var colorKey = this.getAttribute("data-color");
	
	// Now we obtain its corresponding data
	var colorData = allData.colors[colorKey];
	
	// Now we put that data on the colorsInfo div
	document.getElementById("r").textContent = colorData.r;
	document.getElementById("g").textContent = colorData.g;
	document.getElementById("b").textContent = colorData.b;

}
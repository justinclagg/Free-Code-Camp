/*eslint-env browser */

document.addEventListener("DOMContentLoaded", function() {
// Starts script when HTML is loaded and parsed; Not supported before IE9
	"use strict";

	/* Document status variables */
	var menuRaised = false,
		activePanel = false;

	// Assigns a click event handler to each link that is a child of #tabs
	// The HTMLCollection is passed as 'this' in order to use an Array.prototype method
	var tabs = document.getElementById("tabs").getElementsByTagName("a");
	Array.prototype.forEach.call(tabs, function addClickEvents(element) {
		element.addEventListener("click", tabClick);
	});

	// The click event handler for each menu tab
	// 'this' is the element that was clicked
	function tabClick() {
		
		if (menuRaised) {
			// Remove the previously active panel, then update and display the new active panel
			document.getElementById(activePanel).classList.remove("active-panel");
			activePanel = this.id + "-panel";
			document.getElementById(activePanel).classList.add("active-panel");
		}
		else {
			// The first tab click raises the menu
			document.getElementById("menu").classList.add("menu-raised");			
			menuRaised = true;
			// Set the active panel and display it after a delay
			activePanel = this.id + "-panel";
			setTimeout(function displayPanel() {
				document.getElementById(activePanel).classList.add("active-panel");
			}, 1200);
		}
	}

});

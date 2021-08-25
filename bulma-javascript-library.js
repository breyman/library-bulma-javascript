// library of common Javascript functionality for the Bulma.io CSS layout framework. Created and used by Brian Reyman.

//////////////
// Bulma extended functionality
//////////////

// adjust Bulma tabs to show which is currently active
// need to name the container element id="bulma-tabs" at the div container levle and each tab class="bulma-tab" at the li level
(function() {
	let myBulmaTabsContainer = document.getElementById('bulma-tabs');
	let myBulmaTabs = myBulmaTabsContainer.getElementsByClassName('bulma-tab');

	let n = myBulmaTabs.length;
	let makeTabButtonsHandler = function(num) {
		// outer function
		return function() {
			// inner function
			let onBulmaTabContainer = document.getElementById('bulma-tabs');

			// Get all buttons with class="btn" inside the container
			let onBulmaTabs = onBulmaTabContainer.getElementsByClassName('bulma-tab');

			// Loop through the buttons and add the active class to the current/clicked button
			for (var z = 0; z < onBulmaTabs.length; z++) {
				onBulmaTabs[z].className = onBulmaTabs[z].className.replace(' is-active', '');
			}

			this.className += ' is-active';
		};
	};
	for (var i = 0; i < n; i++) {
		myBulmaTabs[i].onclick = makeTabButtonsHandler(i + 1);
	}
})();

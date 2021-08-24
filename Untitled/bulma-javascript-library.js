// library of common Javascript functionality for the Bulma.io CSS layout framework. Created and used by Brian Reyman.

//////////////
// Bulma extended functionality
//////////////

// adjust Bulma tabs to show which is currently active
// need to name the container element id="bulma-tabs" at the div container levle and each tab class="bulma-tab" at the li level
(function() {
	// Get the container element
	let bulmaTabContainer = document.getElementById('bulma-tabs');

	// Get all tabs with inside the container
	let bulmaTabs = bulmaTabContainer.getElementsByClassName('bulma-tab');

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < bulmaTabs.length; i++) {
		bulmaTabs[i].addEventListener('click', function() {
			let onBulmaTabContainer = document.getElementById('bulma-tabs');

			// Get all buttons with class="btn" inside the container
			let onBulmaTabs = onBulmaTabContainer.getElementsByClassName('bulma-tab');

			// Loop through the buttons and add the active class to the current/clicked button
			for (var z = 0; z < bulmaTabs.length; z++) {
				onBulmaTabs[z].className = onBulmaTabs[z].className.replace(' is-active', '');
			}

			this.className += ' is-active';
		});
	}
})();

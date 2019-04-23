var Component = require('component');

var ExpandCollapse = function (opts) {
	var self = this;

	var defaults = {
		// Do not rely on detection of details support. Use the shim regardless of what we can detect.
		forceShim: false
	};

	$.extend(this, defaults, opts);
	$.extend(this, new Component(this));

	// Discover the attributes
	var title = this.el.find('summary');
	if (typeof title !== "undefined") {
		var titleText = title.html();
		if (titleText.length > 0) {
			this.title = titleText;
		}

		var body = title.siblings()
		var bodyText = body.html();
		if (bodyText.length > 0) {
	else {
		console.log('Could not find summary element.')
	}
			this.content = bodyText;
		}
	}


	this.isOpen = function() {
		return body.is(':visible');
	}

	// use the details default behavior if it is supported.
	var supportsDetails = function() {
		return 'open' in document.createElement('details');
	}

	// Only if details element is not supported are these handlers necessary.
	if (!supportsDetails() || this.forceShim) {

		// Employ CSS rules for hiding and showing.
		this.el.addClass('manual-details');

		//Handles expanding and collapsing
		var toggle = function(e) {
			if (typeof e !== "undefined" && typeof e.preventDefault !== "undefined") {
				//No need for this to bubble
				e.preventDefault()
			}

			console.log('Toggling manually... ');
			//Update the URL incase the windows is refreshed. Prevent default and use this because a normal click is a push and not a replace
			// history.replaceState(null, null, '#' + self.slug )

			if (!self.isOpen()) {
				console.log('Setting open attr manually..')
				self.el[0].setAttribute('open', '');
			}
			else {
				console.log('Removing open attr manually..')
				self.el[0].removeAttribute('open');
			}

		}

		// On title click, toggle the open attribute manually.
		title.on('click', toggle);

	}

	return this;
}

module.exports = ExpandCollapse;

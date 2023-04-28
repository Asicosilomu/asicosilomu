// Configuration
var DEFAULT_LOCALE = "en";

// Initialize locale setting, if it wasn't already.
if (localStorage.getItem("userPreferences-locale") == null) localStorage.setItem("userPreferences-locale", DEFAULT_LOCALE);

var localeStrings = window.locale.strings[localStorage.getItem("userPreferences-locale")];

// Redundant error-checking
if (localeStrings == undefined) { localStorage.setItem("userPreferences-locale", DEFAULT_LOCALE); localeStrings = window.locale.strings[localStorage.getItem("userPreferences-locale")]; };

// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", (e) => {

// Get list of items that can be localized
var localz = document.querySelectorAll(".localized");

// Iterate through the elements and localize them
for (var i = 0; i < localz.length; i++) {
	var el = localz[i];
	var dloc = el.dataset.localeString;
	var locstring = localeStrings[dloc];
	console.log(dloc, locstring);
	// Redundant error check
	if (locstring == undefined) locstring = window.locale.strings[DEFAULT_LOCALE][dloc];
	// InnerHTML because i want to make styling easy
	// no one's gonna xss my locale strings anyways
	// :)
	el.innerHTML = locstring;
};

// done

});

// LANGUAGE LIST
var languages = [["en", "English"], ["ro", "Română"]];

window.addEventListener("DOMContentLoaded", (e) => {
	document.body.appendChild(document.createElement("br"));
	var s = document.createElement("select");
	for (var i = 0; i < languages.length; i++)
	{
		var o = document.createElement("option");
		o.value = languages[i][0];
		o.innerText = languages[i][1];
		s.appendChild(o);
	}
	s.value = localStorage.getItem("userPreferences-locale");
	s.onchange = function(){localStorage.setItem("userPreferences-locale", s.value);window.location.reload();}
	document.body.appendChild(s);
});

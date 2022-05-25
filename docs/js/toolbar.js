// finnicky hack to sync toolbar across pages
// phpless oh god

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#toolbar-content").innerHTML = `
	<a href='./index.html' class='toolbar-link'>Home</a>
	<a href='./projects.html' class='toolbar-link'>Projects</a>
	`
});
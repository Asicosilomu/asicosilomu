// Very wonky way to get the root path of the website, which depends on this script being in /js. This is basically an overcomplicated way of navigating up 2 levels in the document.currentScript.src path.
var rootPath = document.currentScript.src.replace(document.currentScript.src.split("/")[document.currentScript.src.split("/").length - 2] + "/" + document.currentScript.src.split("/")[document.currentScript.src.split("/").length - 1], "");

// ALL of this stupid extra code for a set of pages that isn't even released yet.

// wow much doge
function TMP_173(a, s)
{
    var returnVal = false;
    a.forEach((value, index, array) => {
        if(value[1] == s)
        {
            returnVal = true;
        } else {
            if(Array.isArray(value[3])) { if(value[3].length > 0) { return TMP_173(value[3], s); }; };
        };
    });
    return returnVal;
};

var backl = window.locale.strings[localStorage.getItem("userPreferences-locale")]["back-l"];

function parseNavTree(array) {
    var navContent = "";
    var origtree = array;
    console.log(array, origtree);
    try {
    array.forEach((value, index, array) => {
            if(Array.isArray(value[3]) && window.location.href == value[1]) {
                navContent = "";
		console.log(navContent);
                navContent = navContent +  `<a style="color: white;" href="` + value[2] + `">`+backl+`</a>&nbsp;&nbsp;`;
		console.log(navContent);
                navContent = navContent + parseNavTree(value[3], origtree, origtree);
		throw new Error("maicata");
            } else {
                if(Array.isArray(value[3])) {
                    if(TMP_173(value[3], window.location.href))
                    {
                        navContent = "";
			console.log(navContent);
                        navContent = navContent +  `<a style="color: white;" href="` + value[2] + `">`+backl+`</a>&nbsp;&nbsp;`;
		console.log(navContent);
                        navContent = navContent + parseNavTree(value[3], origtree);
			throw new Error("maicata");
                    } else {
                        console.log(typeof value[3]);
                        console.log(value[3]);
		console.log(navContent);
                        navContent = navContent +  `<a style="color: white;" href="` + value[1] + `" class="localized" data-locale-string="` + value[0] + `"></a>&nbsp;&nbsp;`;
		console.log(navContent);
                    };
                } else {
                    console.log(typeof value[3]);
                    console.log(value[3]);
		console.log(navContent);
                    navContent = navContent +  `<a style="color: white;" href="` + value[1] + `" class="localized" data-locale-string="` + value[0] + `"></a>&nbsp;&nbsp;`;
		console.log(navContent);
                };
            };
    });
    } catch {};
    return navContent;
};

document.addEventListener("DOMContentLoaded", function(e) {
  var elheader = document.body.querySelector("#header");
  var headerContent = `<center style="border-bottom-style: solid; border-color: white;">
    <h1>Asicosilomu</h1>
    <p id="motto">Let me guess... you turned JavaScript off?</p>
    <div id="header_nav"></div>
    <br class="_lower">
  </center>`;
  var mottos = [
    "A little corner of the internet",
    "Powered by JavaScript!",
    "Much code, little content.",
    "Error 404: Splash not found"
  ];
  mottos = window.locale.strings[localStorage.getItem("userPreferences-locale")].splashes;
  var motto = mottos[Math.floor(Math.random() * mottos.length)];
  // Nested pages are supported!
  var navTree = [
    [
        "home",
        rootPath + "index.html",
        rootPath + "index.html"
    ],
    [
	"about",
	rootPath + "about.html",
	rootPath + "index.html",
	[
		[
			"about-me",
			rootPath + "about.html",
			rootPath + "about.html"
		],
		[
			"pc-specs",
			rootPath + "pspecs.html",
			rootPath + "about.html"
		]
	]
    ],
    [
        "projects",
        rootPath + "projects.html",
        rootPath + "index.html"
    ],
    [
        "blog",
        rootPath + "blog/index.html",
        rootPath + "index.html"
    ]
  ];
  elheader.innerHTML = headerContent;
  elheader.querySelector("#motto").innerText = motto;
  elheader.querySelector("#header_nav").innerHTML = parseNavTree(navTree, navTree);
});

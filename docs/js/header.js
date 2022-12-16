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

function parseNavTree(array, origtree) {
    var navContent = "";
    array.forEach((value, index, array) => {
            if(Array.isArray(value[3]) && window.location.href == value[1]) {
                navContent = "";
                navContent = navContent +  `<a style="color: white;" href="` + value[2] + `">[Back]</a>&nbsp;&nbsp;`;
                navContent = navContent + parseNavTree(value[3], origtree, origtree);
            } else {
                if(Array.isArray(value[3])) {
                    if(TMP_173(value[3], window.location.href))
                    {
                        navContent = "";
                        navContent = navContent +  `<a style="color: white;" href="` + value[2] + `">[Back]</a>&nbsp;&nbsp;`;
                        navContent = navContent + parseNavTree(value[3], window.location.href, origtree);
                    } else {
                        console.log(typeof value[3]);
                        console.log(value[3]);
                        navContent = navContent +  `<a style="color: white;" href="` + value[1] + `">` + value[0] + `</a>&nbsp;&nbsp;`;
                    };
                } else {
                    console.log(typeof value[3]);
                    console.log(value[3]);
                    navContent = navContent +  `<a style="color: white;" href="` + value[1] + `">` + value[0] + `</a>&nbsp;&nbsp;`;
                };
            };
    });
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
  var motto = mottos[Math.floor(Math.random() * mottos.length)];
  // Nested pages are supported!
  var navTree = [
    [
        "Home",
        rootPath + "index.html",
        rootPath + "index.html"
    ],
    [
        "Projects",
        rootPath + "projects.html",
        rootPath + "index.html"
    ],
    [
        "Blog",
        rootPath + "blog/index.html",
        rootPath + "index.html"
    ]
  ];
  elheader.innerHTML = headerContent;
  elheader.querySelector("#motto").innerText = motto;
  elheader.querySelector("#header_nav").innerHTML = parseNavTree(navTree, navTree);
});

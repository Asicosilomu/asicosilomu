// Adaptation after https://stackoverflow.com/questions/26565381/how-to-get-parameters-on-client-side-passsed-by-http-get-request
function getURLParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var entries = urlParams.entries();
    var params = {};
    for (entry of entries) {
        params[entry[0]] = entry[1];
    }
    return params;
};

document.addEventListener('DOMContentLoaded', () => {
    var postdisplay = document.body.querySelector("#postdisplay");
    var post = window.blogposts[getURLParams().id];
    postdisplay.querySelector("h1").innerText = post[0];
    postdisplay.querySelector("cite").innerText = post[1] + " @ " + post[2].toLocaleString();
    postdisplay.querySelector("#content").innerHTML = post[3];
    postdisplay.querySelector("a").href = `javascript:alert("Use this link to share '` + post[0] + `' with others:\\n` + window.location.href + `")`;
    document.title = post[0] + " | Blog | Asicosilomu";
});

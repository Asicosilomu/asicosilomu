// https://dev.to/sanchithasr/3-ways-to-convert-html-text-to-plain-text-52l8
function convertToPlain(html){
    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html.replaceAll(`<br>`, "\n");

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || "";
}

// https://javascript.info/task/truncate
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

document.addEventListener('DOMContentLoaded', () => {
    var postlist = document.body.querySelector("#postlist");
    var template = document.body.querySelector("#pdtemplate");
    window.blogposts.forEach(function(e, i) {
        var el = window.blogposts[window.blogposts.length - (i + 1)];
        var tmp = template.cloneNode(true);
        var link = tmp.querySelector("a");
        var info = tmp.querySelector("cite");
        var content = tmp.querySelector("div");
        link.href = "./post.html?id=" + (window.blogposts.length - 1).toString();
        link.innerText = el[0];
        info.innerText = el[1] + " @ " + el[2].toLocaleString();
        content.innerHTML = truncate(el[3], 500);
        tmp.style.display = "block";
        postlist.appendChild(tmp);
    });
});

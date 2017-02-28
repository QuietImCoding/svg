var svg;
var rid;

var linedot = function(e) {
    if (svg.childElementCount == 0) {
	drawCircle(e.offsetX, e.offsetY, 10, "#000000");
    } else {
	var lastX = svg.lastChild.getAttribute("cx");
	var lastY = svg.lastChild.getAttribute("cy");
	drawLine(lastX, lastY, e.offsetX, e.offsetY, "stroke:#000000;stroke-width:2");
	drawCircle(e.offsetX, e.offsetY, 10, "#000000");
    }
};

var drawCircle = function(x, y, r, color) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", color);
    svg.appendChild(circle);
    console.log("Circle at ( " + x + ", " + y + " )");
};

var drawLine = function(x1, y1, x2, y2, style) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("style", style);
    svg.appendChild(line);
    console.log("Line from ( " + x1 + ", " + y1 + " ) to ( " + x2 + ", " + y2 + " )");
};

var clearAll = function() {
    while (svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
};

var magic = function() {
    for (i = 0; i < svg.childElementCount; i++) {
	var thisnode = svg.childNodes[i];
	if ( i % 2 == 0 ) {
	    thisnode.setAttribute("fill", "hsl(" + rid % 360 + ", 90%, 60%)");
	} else {
	    thisnode.setAttribute("style", "stroke:" + "hsl(" + rid % 360 + ", 90%, 60%);stroke-width:2");
	}
    }
    rid = window.requestAnimationFrame(magic);
}

var resize = function() {
    svg.setAttribute("width", window.innerWidth);
    svg.setAttribute("height", window.innerHeight);
};

var setup = function() {
    svg = document.getElementById("svgj");
    svg.setAttribute("width", window.innerWidth);
    svg.setAttribute("height", window.innerHeight);
    window.onresize = resize;
    console.log(svg);
    svg.addEventListener("click", linedot);
    magic();
};

window.onload = setup;

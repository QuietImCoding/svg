var svg;

var linedot = function(e) {
    if (svg.childNodes.length == 0) {
	drawCircle(e.offsetX, e.offsetY, 10, "#000000");
    }
}

var drawCircle = function(x, y, r, color) {
    var circle = document.createElementNS("http://ww.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", color);
    svg.appendChild(circle);
    console.log(circle);
}

var clearAll = function() {

}

var setup = function() {
    svg = document.getElementById("svgj");
    svg.setAttribute("width", 500);
    svg.setAttribute("height", 500);
    console.log(svg);
    svg.addEventListener("click", linedot);
};

window.onload = setup;

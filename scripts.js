let x;

document.getElementById("button").onclick = function() {
    x = Math.floor(Math.random() * 100);
    document.getElementById("label").innerHTML = x;
}

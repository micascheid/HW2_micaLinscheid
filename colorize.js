function correct(){
    var body = document.getElementById("main");
    var description = document.getElementById("description");
    body.style.backgroundColor = "#7fff00";
    description.style.visibility = "visible"

}

function wrong() {
    var body = document.getElementById("main");
    var description = document.getElementById("description");
    body.style.backgroundColor = "#ff0000";
    description.style.visibility = "hidden"
}

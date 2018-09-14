function correct(){
    var body = document.getElementById("main");
    var description = document.getElementById("description");
    body.className = "backGreen"
    description.style.visibility = "visible"
}

function wrong() {
    var body = document.getElementById("main");
    var description = document.getElementById("description");
    body.className = "backRed"
    description.style.visibility = "hidden"
    document.getElementsByClassName("correct")
}

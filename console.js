

var commandline = document.getElementById("console");
var stringout = ["Hello, I am Ruben!", "NICE!"];
var i = 0;
var j = 0;

function typing() {
    if (i < (stringout[j].length)) {
        commandline.innerHTML += stringout[j][i];
        i++;
        setTimeout(typing, Math.floor(Math.random() * 700));
    }
}

function typer(){
    j+=1;
    i = 0;
    typing();
}
typing();

commandline.onclick = function(){typer()};
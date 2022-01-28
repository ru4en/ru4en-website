

var commandline = document.getElementById("console");
var stringout = "Hello! My name is Ruben. It's nice to meet you.";
var i = 0;

function typing() {
    if (i < (stringout.length)) {
        commandline.innerHTML += stringout[i];
        i++;
        setTimeout(typing, Math.floor(Math.random() * 500));
    }
}

typing();

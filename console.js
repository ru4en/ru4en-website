

var commandline = document.getElementById("console");
var stringout = "Hello, I am Ruben!";
var i = 0;

function typing() {
    if (i < (stringout.length)) {
        commandline.innerHTML += stringout[i];
        console.log("ds");
        i++;
        setTimeout(typing, Math.floor(Math.random() * 700));
    }
}

typing();

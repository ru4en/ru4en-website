$(function(){
    $('nav').load('nav-bar.html');
    $('footer').load('footer.html');
});

function notification(msg, btncl) {
    var contfb = document.createElement('div');
    contfb.innerHTML = '<div onclick="this.remove()" class="btn btn-primary alert alert-dismissible fade show '+ btncl +' m-3" role="alert" style="position: fixed; top: 60px;"> ' + msg + ' <button type="button" class="btn-close" aria-label="Close"></button> </div>';
    main.appendChild(contfb);
}

function contFormSubmited(contForm) { 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    let main = document.getElementById('main');

    Pageclip.send('hkKqTgb3JqRLL16rUVVGGAQIBBx1ZWku', 'PortfolioContactMe', {
        name: name,
        email: email,
        msg: msg
    }
    )
    notification("Sucessful: Thanks "+ name +"! I will make sure to respond you.", "btn-success");
}
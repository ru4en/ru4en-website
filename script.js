$(document).ready(function() {
    $('nav').load('nav-bar.html');
    $('footer').load('footer.html');
});

function notification(msg, btncl) {
    var contfb = document.createElement('div');
    contfb.innerHTML = '<div onclick="this.remove()" class="btn alert alert-dismissible '+ btncl +' m-3" role="alert" style="position: fixed; top: 60px;"> ' + msg + ' <button type="button" class="btn-close" aria-label="Close"></button> </div>';
    main.appendChild(contfb);
}

function contFormSubmited(contForm) { 

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let msg = document.getElementById('msg');

    if(name.value == "" || email.value == "" || msg.value == "") {
        notification("Unsucessful: Please Make sure all fields are valid", "btn-danger");
        return;
    }

    Pageclip.send('hkKqTgb3JqRLL16rUVVGGAQIBBx1ZWku', 'PortfolioContactMe', {
        name: name.value,
        email: email.value,
        msg: msg.value
    }
    )

    notification("Successful: Thanks "+ name.value +"! I will make sure to respond you.", "btn-success");
    name.value = null;
    email.value = null;
    msg.value = null;
}
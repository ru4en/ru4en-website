function readTextFile(file, callback) {


    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
readTextFile("projects.json", function(text){
    var obj = JSON.parse(text);

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( page );
    
    if (page == "projects.html"){
        var times = obj.length;
    }
    else 
    {
        var times = 4;
    }

    for(let i = 0; i < times; i++){
        console.log(obj[i].live_URL);
        if (obj[i].live_URL == "#"){            
            var live_URL = `<div class="pr-1 w-50"><a href="" class="w-100 disabled btn btn-secondary text-nowrap">Unavailable</a></div>`
        }
        else{
            var live_URL = `<div class="pr-1 w-50"><a href="${obj[i].live_URL}" class="w-100 btn btn-success">Live</a></div>`
        }

        if (obj[i].source_code == "#"){            
            var source_code = `<div class="pr-1 w-50"><a href="" class="w-100 disabled btn btn-secondary text-nowrap">Unavailable</a></div>`
        }
        else{
            var source_code = `<div class="pr-1 w-50"><a href="${obj[i].source_code}" class="w-100 col-auto btn btn-success">Github</a></div>`
        }


        projects.innerHTML += `
        <div class="col">
        <div class="curvy shadow border-0">
            <img
            src="${obj[i].screen_short}"
            class="card-img-top"
            onerror="if (this.src != 'placeholder_image.png') this.src = 'placeholder_image.png';"
            style="object-fit: cover; height:200px;"/>
            <div class="card-body blur">
            <h5 class="card-title text-nowrap">${obj[i].project_name}</h5>
            ${append_language_framework_used(i, obj)}
            <p class="card-text text-muted" style="
            display: -webkit-box;
            height: 4.5em;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            ">${obj[i].summery}
            </p>
            <div class="row">
            ${live_URL}
            ${source_code}
            </div>
            </div>
        </div>
    </div>
    `
    }
});


function append_language_framework_used(i, obj){
    var all_landf_used = ""
    for(let j = 0; j < obj[i].language_framework_used.length ; j++){
        all_landf_used += ` <p class="badge badge-light bg-secondary">${obj[i].language_framework_used[j]}</p>`
    }
    return all_landf_used
}
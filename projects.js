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
    
    for(let i = 0; i < obj.length; i++){
        projects.innerHTML += `
        <div class="col">
        <div class="card">
            <img
            src="${obj[i].screen_short}"
            class="card-img-top"
            alt="Skyscrapers"
            />
            <div class="card-body">
            <h5 class="card-title">${obj[i].project_name}</h5>
            ${append_language_framework_used(i, obj)}
            <p class="card-text" style="overflow: hidden;
            height: 150px;
            text-overflow: ellipsis;">${obj[i].summery}
            </p>
            <div class="row">
                <div class="pr-1 w-50"><a href="${obj[i].live_URL}" class="w-100 btn btn-success">Live</a></div>
                <div class="pr-1 w-50"><a href="${obj[i].source_code}" class="w-100 col-auto btn btn-primary">Github</a></div>
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
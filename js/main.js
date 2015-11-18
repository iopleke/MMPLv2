function loadJSON(file, callback) {
    console.log("Loading file: " + file);

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value 
            // but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function loadData() {

    console.log("Loading data from json files...");

    var template = "";

    loadJSON("content/template.json", function (response) {
        var parsedResponse = JSON.parse(response);
        for (var key in parsedResponse) {
            if (parsedResponse.hasOwnProperty(key)) {
                template += key[0].toUpperCase() + key.slice(1);
                template += "<br/>";
                template += parsedResponse[key];
                template += "<br/>";

            }
        }
        console.log("Writing data to page...");
        document.getElementById("content").innerHTML = template;
        console.log("Done writing data to page.");

    });

    console.log("Done loading data.");


    console.log("All done.");
}

window.load = loadData();

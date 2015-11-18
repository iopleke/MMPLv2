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

    var titleMD5 = "de063c99357e6675f1ba05b33635e044";

    console.log("Loading data from json files...");

    document.getElementById("content").innerHTML = "";

    loadJSON("content/template.json", function (response) {
        var parsedResponse = JSON.parse(response);
        for (var key in parsedResponse) {
            if (parsedResponse.hasOwnProperty(key)) {
                document.getElementById("content").innerHTML += parsedResponse[key];
                document.getElementById("content").innerHTML += "<br/>";

            }
        }

        loadJSON("content/heading.json", function (response) {
            var parsedResponse = JSON.parse(response);
            for (var key in parsedResponse) {
                if (parsedResponse.hasOwnProperty(key)) {
                    document.getElementById("content").innerHTML = document.getElementById("content").innerHTML.replace(key, parsedResponse[key]);
                }
            }
        });

        loadJSON("content/data.json", function (response) {
            var parsedResponse = JSON.parse(response);
            for (var key in parsedResponse) {
                if (parsedResponse.hasOwnProperty(key)) {
                    if (parsedResponse[key].hasOwnProperty("value")) {
                        document.getElementById("content").innerHTML = document.getElementById("content").innerHTML.replace(key, parsedResponse[key]["value"]);
                    }
                }
            }
        });
    });

    console.log("Done loading data.");


    console.log("All done.");
}

window.load = loadData();

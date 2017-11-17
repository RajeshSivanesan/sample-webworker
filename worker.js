
var i = 0;

function get_file(url, callback)
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
    xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    xmlhttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    xmlhttp.send();
}

this.onmessage = function(e) {
    console.log(e.data);
}

setInterval(function() {
    get_file("views-count.txt", function(response) {
        postMessage(response);
    });
}, 20 * 1000);
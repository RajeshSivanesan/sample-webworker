if (typeof(w) == "undefined") {
    w = new Worker("worker.js");

    w.onmessage = function(event) {
        document.getElementById('message').innerHTML = "Total number of page views : " + event.data;
    }

    w.postMessage('');
}
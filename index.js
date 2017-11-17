if (typeof(w) == "undefined") {
    w = new Worker("worker.js");

    w.onmessage = function(event) {
        document.getElementById('message').innerHTML = event.data;

        if(event.data === '100' || event.data == 100) {
            w.terminate();
            w = undefined;
        }
    }

    w.postMessage('hi');
}
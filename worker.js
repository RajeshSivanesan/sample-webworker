
var i = 0;

function timedCount() {
    i = i + 1;
    postMessage("counter value is " + i);
    setTimeout(timedCount, 1000);
}

this.onmessage = function(e) {
    console.log(e.data);
}

timedCount();
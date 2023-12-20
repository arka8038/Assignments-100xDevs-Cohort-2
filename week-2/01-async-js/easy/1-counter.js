let counter = 1;

function incrementAndLog() {
    console.log(counter);
    counter++;
}

setInterval(incrementAndLog, 1000);
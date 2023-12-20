let counter = 1;

function incrementAndLog() {
    console.log(counter);
    counter++;
    setTimeout(incrementAndLog, 1000);
}

incrementAndLog();
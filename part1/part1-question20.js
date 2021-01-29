function currentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

var intervalID = setInterval(currentTime, 1000);
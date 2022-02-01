const currentTime = () => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let ampm;
    let utchr = d.getUTCHours();
    let timeDiff = Math.abs(hr - utchr);
    let timeZones = ["PT", "MT", "CT", "ET"];
    let timeZone = timeZones[timeDiff - 16];

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }

    if(hr === 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    // Combine to string
    let time = `${hr}:${min}:${sec} ${ampm} ${timeZone}`;
    // Write time to element
    document.getElementById("clock").innerText = time;
    // Run once a second
    setInterval(currentTime, 1000);
}
currentTime();
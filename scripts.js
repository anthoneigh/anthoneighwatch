var d, second, minute, hour;

function updateClock() {
    d = new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = (d.getHours() % 12) * 30 + d.getMinutes() / 2;

    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

    var hours = d.getHours() % 12 || 12;
    var minutes = d.getMinutes().toString().padStart(2, '0');
    var seconds = d.getSeconds().toString().padStart(2, '0');
    var ampm = d.getHours() >= 12 ? 'PM' : 'AM';

    document.getElementById("digital-clock").innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

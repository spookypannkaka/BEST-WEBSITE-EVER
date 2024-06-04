function clock(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
m = checkTime(m);
document.getElementById('time').innerHTML = h + ":" + m;
var t = setTimeout(clock, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function changeStyle(){
    document.body.style.backgroundColor = "#FED1FF";
    document.getElementById("title").style.fontFamily = "Comic Sans MS", "Comic Sans";
    document.getElementById("title").style.color = "#AC48AE";
    document.getElementById("title").style.fontSize = "xx-large";
}
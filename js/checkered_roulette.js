var tds = new Array;
var timeclock;
var num = 0;
var maxNum = rand(48, 80);
var count = 0;
var timeGo = 500;
var start = document.getElementById('start');

for (let i = 0; i < 16; i++) {
    tds[i] = document.getElementById(`td${i}`);
}

function rand(min,max){
    var num;
    var mix=max-min;
    num=Math.floor(Math.random()*(mix+1))+min;
    return num;
}   

function gogoLuck() {
    console.log(num);
    tds[num].innerHTML = num + 1;
    tds[num].style.backgroundColor = "#fff";
    tds[num].style.border = "2px solid rgba(0,0,0,0)";
    timeGo = 500;
    count = 0;
    maxNum = rand(48, 80);
    console.log(maxNum);
    init();
    start.removeEventListener('click', gogoLuck, false);
}

console.log(maxNum);




function gogoBox(e) {
    if (count < 9) {
        timeGo = timeGo - 50;
    } else if (maxNum < 10 && timeGo < 500) {
        timeGo = timeGo + 50;
    }

    if (num == 16) {
        num = 0;
    }
    tds[num].style.backgroundColor = "#fa0";
    tds[num].style.border = "2px solid red";
    console.log(num);
    if (num == 0) {
        tds[15].style.backgroundColor = "#fff";
        tds[15].style.border = "2px solid rgba(0,0,0,0)";
    } else {
        tds[num - 1].style.backgroundColor = "#fff";
        tds[num - 1].style.border = "2px solid rgba(0,0,0,0)";
    }

    if (maxNum == 0) {
        clearInterval(timeclock);
        start.addEventListener('click', gogoLuck, false);
        return;
    }
    maxNum -= 1;
    num += 1;
    count += 1;
    init();
}

function init() {
    console.log('init');
    timeclock = setTimeout(gogoBox, timeGo);
}

window.addEventListener('load', init, false);
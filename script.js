

let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;


let timer = false;

function start(){
    timer = true;
    myFun();
}

function stop(){
    timer = false;
}

function reset(){
    milli = 0;
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("milli").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
}

function myFun(){
    if(timer==true){
        milli++;
        if(milli == 100){
            milli = 0;
            sec++;
        }
        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hr++;
        }
        
        let getSec = sec < 10 ? "0" + sec : sec;
        let getMin = min < 10 ? "0" + min : min;
        let getHr = hr < 10 ? "0" + hr : hr;
        
        document.getElementById("milli").innerHTML = milli;
        document.getElementById("sec").innerHTML = getSec;
        document.getElementById("min").innerHTML = getMin;
        document.getElementById("hr").innerHTML = getHr;

        setTimeout(myFun, 10);
    }
}

function calWalk(stepsNum, footPrint, speed) {
    //1. -> convert speed in m/s
    let speedInM_S = speed / 3.6;
    //2. -> calculate passed meters
    let metersPassed = stepsNum * footPrint;
    //3. -> calculate the time in seconds
    let timeInSec = metersPassed / speedInM_S;
    //4. -> convert timeInSec in Minutes
    let minutesToAdd = Math.floor(metersPassed / 500);

    let timeMin = Math.floor(timeInSec / 60);
    let timeSec = Math.round(timeInSec - (timeMin * 60));
    let timeHr = Math.floor(timeInSec / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + minutesToAdd < 10 ? "0" : "") + (timeMin + minutesToAdd) + ":" + (timeSec < 10 ? "0" : "") + timeSec);

}

calWalk(4000, 0.60, 5);
calWalk(2564, 0.70, 5.5);
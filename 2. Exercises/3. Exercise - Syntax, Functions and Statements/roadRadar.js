function speedRestriction(speed, area) {
    let motorwaySpeed = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let diff = 0;
    let speedZone = 0;
    let overLimit = "";
    switch (area) {
        case 'motorway':
            speedZone = motorwaySpeed;
            break;
        case 'interstate':
            speedZone = interstate;
            break;
        case 'city':
            speedZone = city;
            break;
        case 'residential':
            speedZone = residential;
            break;
    }
    if (speed > speedZone) {
        diff = speed - speedZone;
    }

    if (diff !== 0) {
        if (diff <= 20) {
            overLimit = "speeding";
        } else if (diff <= 40) {
            overLimit = "excessive speeding";
        } else {
            overLimit = "reckless driving";
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${overLimit}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }
}

speedRestriction(40, 'city');
speedRestriction(21, 'residential');
speedRestriction(120, 'interstate');
speedRestriction(200, 'motorway');
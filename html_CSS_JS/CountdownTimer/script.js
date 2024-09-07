const endDate = new Date("23 Aug, 2024 23:51:00").getTime();
const startDate = new Date().getTime();


let x  = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //caculate days, min, hrs, secs
    //1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis  = (60 * 60 * 1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));

    const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

    const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

    const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //calculate width percentage for progress bar 
    const totalDistance = endDate - startDate;

    const percetageDistance  = (distanceCovered/totalDistance)*100;

    //set width for progress bar 
    document.getElementById("progress-bar").style.width = percetageDistance + "%";

    if(distancePending < 0 ) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}
, 1000);
function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', function () {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;

    });

    document.getElementById('hoursBtn').addEventListener('click', function () {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;
    });

    document.getElementById('minutesBtn').addEventListener('click', function () {
        let minutes = minutesInput.value;
        daysInput.value = minutes / 60 / 24;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    });

    document.getElementById('secondsBtn').addEventListener('click', function (){
        let seconds = secondsInput.value;
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds / 60/60;
        minutesInput.value = seconds / 60;
    });
}
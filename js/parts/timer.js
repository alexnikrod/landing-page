function timer() {
    // Timer
    let deadline = '2019-12-18';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours,
            'days' : days
        };
    }

    function setClock(id, endtime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    // ---как с использованием for?---
    function ifNeedZero(addZero) {
        if (addZero < 10) {
            return '0';
        } else {
            return '';
        }
    }

    function updateClock() {
        let t = getTimeRemaining(endtime);
        days.textContent = ifNeedZero(t.days) + t.days;
        hours.textContent = ifNeedZero(t.hours) + t.hours;
        minutes.textContent = ifNeedZero(t.minutes) + t.minutes;
        seconds.textContent = ifNeedZero(t.seconds) + t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;
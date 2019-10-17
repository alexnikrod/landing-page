window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    let deadline = '2019-10-18';

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

     // Modul
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description = document.querySelector('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-spash');
        document.body.style.overflow = 'hidden';
    });
    // ---как без дублирования кода?---
    description.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-spash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        close.classList.remove('more-spash');  
        document.body.style.overflow = '';
    }); 

});

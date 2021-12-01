const sekund = document.querySelector('.s'),
    minut = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')
let hhh = new Date();
let hlkh = hhh.getSeconds()
let oursec = hlkh * 6
console.log(oursec);

function clock() {
    const time = new Date(),
        sek = time.getSeconds() * 6,
        min = time.getMinutes() * 6,
        hours = time.getHours() * 30
        oursec += 0.25
    sekund.style.transform = `rotate(${oursec}deg)`
    minut.style.transform = `rotate(${min}deg)`
    hour.style.transform = `rotate(${hours}deg)`
  
    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(clock, 1000/24);
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem ')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}



const stopwatchBtn = document.querySelector('.stopwatch__btn')
const clockHourse = document.querySelector(".stopwatch__hours")
const clockMinutes = document.querySelector(".stopwatch__minutes")
const clockSecunt = document.querySelector(".stopwatch__seconds")
const startBtn = document.querySelector(".stopwatch__btn")
let indecator = document.querySelector('.tabsLink__span')


stopwatchBtn.addEventListener('click', () => {
    if (stopwatchBtn.innerHTML == 'start') {
        console.log(1);
        stopwatchBtn.innerHTML = 'stop';
        indecator.classList.add('active')
    } else if (stopwatchBtn.innerHTML == 'stop') {
        stopwatchBtn.innerHTML = 'clear';
        indecator.classList.remove('active');
        indecator.classList.add('active_clear');
    } else if (stopwatchBtn.innerHTML == 'clear') {
        stopwatchBtn.innerHTML = 'start'
        clockSecunt.innerHTML = 0;
        clockMinutes.innerHTML = 0;
        clockHourse.innerHTML = 0;
        indecator.classList.remove('active_clear')
    }
})


function stopwatch() {
    if (stopwatchBtn.innerHTML == 'stop') {
        clockSecunt.innerHTML++
        if (clockSecunt.innerHTML >= 59) {
            clockSecunt.innerHTML = 0
            clockMinutes.innerHTML++;
        }
        if (clockMinutes.innerHTML >= 59) {
            clockMinutes.innerHTML = 0
            clockHourse.innerHTML++;
        }
    }
    else if ( stopwatchBtn.innerHTML == 'start') {
        clockSecunt.innerHTML = 0;
        clockMinutes.innerHTML = 0;
        clockHourse.innerHTML = 0;
    }

    setTimeout(stopwatch, 1000);
}

stopwatch()
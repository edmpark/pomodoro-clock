class Pomodoro{

    sessionModify(crement=0){
        let time = parseInt(sessionTime.textContent);
        if(time == 0 && crement == -1){
            return;
        }
        time = time + crement;

        sessionTime.textContent = time.toString();
        
        if(type === 'session'){
            clock.textContent = time+":00";
            timerHeading.textContent = 'Session';
        }
    }

    breakModify(crement=0){
        let time = parseInt(breakTime.textContent);
        if(time == 0 && crement == -1){
            return;
        }
        time = time + crement;

        breakTime.textContent = time.toString();
        
        if(type === 'break'){
            clock.textContent = time+":00";
            timerHeading.textContent = 'Break';
        }
    }

    startTimer(){
        timerInterval = setInterval(this.decrementTimerDisplay,1000);
    }

    pauseTimer(){
        clearInterval(timerInterval);
    }

    stopTimer(){
        clearInterval(timerInterval);
        if(type === 'session')
            clock.textContent = sessionTime.textContent +':00'
        else
            clock.textContent = breakTime.textContent +':00'
    }

    resetTimer(){
        clearInterval(timerInterval);
        clock.textContent = '25:00'
        sessionTime.textContent = '25';
        breakTime.textContent = '5';
    }

    decrementTimerDisplay(){
        let minutes = parseInt(clock.textContent.slice(0,-3));
        let seconds = parseInt(clock.textContent.slice(-2));
        let alarmAudio = new Audio('https://onlineclock.net/audio/options/default.mp3');

        if(minutes == 0){
            clearInterval(timerInterval);
            if(type === 'session'){
                type = 'break';
                pomodoro.breakModify();
            }
            else{
                type = 'session';
                pomodoro.sessionModify();
            }
            alarmAudio.play();
            return;
        }
        
    
            if(seconds == 0){
                minutes--;
                seconds = 59;
            }else{
                seconds--;
            }

            if(seconds <= 9){
                seconds = "0"+seconds;
            }

            clock.textContent = minutes.toString()+':'+seconds.toString();
    }

}
const sessionUpButton = document.querySelector('#incrementSession');
const sessionDownButton = document.querySelector('#decrementSession');
const breakUpButton = document.querySelector('#incrementBreak');
const breakDownButton = document.querySelector('#decrementBreak')

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
const stopButton = document.querySelector('#stop');

const sessionTime = document.getElementById('sessionPom');
const breakTime = document.getElementById('breakPom');
const clock = document.getElementById('clock');

const timerHeading = document.getElementById('sessionHeading');

const pomodoro = new Pomodoro();
let timerInterval;
let type = 'session';            //indicator for session or break timer type since there is only 1 unified 'shared' timer space
                                 //session starts first on default

playButton.addEventListener('click', button =>{
    pomodoro.startTimer();
});

pauseButton.addEventListener('click', button =>{
    pomodoro.pauseTimer();
});

stopButton.addEventListener('click', button =>{
    pomodoro.stopTimer();
});

resetButton.addEventListener('click', button =>{
    pomodoro.resetTimer();
});

sessionUpButton.addEventListener('click', button =>{
    pomodoro.sessionModify(1);
});

sessionDownButton.addEventListener('click', button =>{
    pomodoro.sessionModify(-1);
});

breakUpButton.addEventListener('click', button =>{
    pomodoro.breakModify(1);
});

breakDownButton.addEventListener('click', button =>{
    pomodoro.breakModify(-1);
});



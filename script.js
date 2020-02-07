class Pomodoro{
    
    sessionUp(){
        let time = parseInt(sessionTime.textContent);
        time++;
        sessionTime.textContent = time.toString();
    }

    sessionDown(){
        let time = parseInt(sessionTime.textContent);
        if(time > 0){
            time--;
        }
        sessionTime.textContent = time.toString();
    }

    breakUp(){
        let time = parseInt(breakTime.textContent);
        time++;
        breakTime.textContent = time.toString();
    }

    breakDown(){
        let time = parseInt(breakTime.textContent);
        if(time > 0){
            time--;
        }
        breakTime.textContent = time.toString();
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

const pomodoro = new Pomodoro();

sessionUpButton.addEventListener('click', button =>{
    pomodoro.sessionUp();
});

sessionDownButton.addEventListener('click', button =>{
    pomodoro.sessionDown();
});

breakUpButton.addEventListener('click', button =>{
    pomodoro.breakUp();
});

breakDownButton.addEventListener('click', button =>{
    pomodoro.breakDown();
});



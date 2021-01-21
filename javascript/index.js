const chronometer = new Chronometer();
// const chronometerTwo = new Chronometer()

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


let stopped = (document.querySelector('.btn start')).innerHTML;
stopped = "START"
console.log(stopped)

function printTime() {
  // ... your code goes here

  // // update the time DOM here
  //  // console.log('Here')
  chronometer.startClick()
  //  timeDOM.innerHTML = clock.time
  //  console.log('Update method', clock.time)
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here

  chronometer.startClick(printTime)

  if () {

    return "START"
  }
  else {

    return "STOP"
  }

  // if (chronometer.currentTime = 0 ) {
  //   let statusStopped = document.querySelector(".btn start").innerHTML = "STOP"
  // }
  // else {

  // }

  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

  chronometer.resetClick(printTime)

  if () {

    return "RESET"
  }
  else {

    return "SPLIT"
  }

});

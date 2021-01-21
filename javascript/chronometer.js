class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0
    // ... your code goes here
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalID = setInterval(() => {
      this.currentTime += 1
  }, 1000)
  // 1 sec
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime < 60) {
      return 0
    }
    else {
      let minRounded = Math.floor(this.currentTime / 60)
      return minRounded
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime < 60) {
      return this.currentTime
    }
    else {
      return  Math.floor(this.currentTime % 60)
    }
  }

  twoDigitsNumber() {
    // ... your code goes here
    if (this.currentTime <= 9) {
      return "0" + this.currentTime
    }
    else {
      return this.currentTime
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval()
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0

  }
  splitClick() {
    // ... your code goes here
    let twoDigitMinutes = this.twoDigitsNumber(this.getMinutes())
    let twoDigitSeconds = this.twoDigitsNumber(this.getSeconds())
    return `${twoDigitMinutes}:${twoDigitSeconds}`

    // return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

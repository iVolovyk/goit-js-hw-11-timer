class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`)
    };
    this.getTimeToTarget();
  }
  getTimeToTarget() {
    setInterval(() => {
      //Текущее время
      const currentTime = Date.now();
      //Остаток времени
      const time = this.targetDate - currentTime;

      //Формулы для времени
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    }, 1000);
  }
}

function pad (value) {
  return String(value).padStart(2, '0')
}

const timerOne = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2020')
});

const timerTwo = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Nov 19, 2019')
});

const timerThree = new CountdownTimer({
  selector: '#timer-3',
  targetDate: new Date('Oct 18, 2019')
});

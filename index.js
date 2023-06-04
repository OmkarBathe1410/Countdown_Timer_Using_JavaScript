/* In terms of milliseconds*/
const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;

/*References to the DOM Elements 14*/
const days = document.querySelector(".day");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");


let now = "0", dd = "0", mm = "0", yyyy = 0;

let enteredDay = "0", enteredMonth = "0", targetDate = "01/01/1970";

const timerFunction = () => {

  /*Generating Current Date */
  now = new Date();
  dd = String(now.getDate()).padStart(2, "0");
  mm = String(now.getMonth() + 1).padStart(2, "0");
  yyyy = now.getFullYear();

  now = `${mm}/${dd}/${yyyy}`;

  /*Taking Target Date from user */
  while (1) {
    enteredDay = prompt("Enter the day:").padStart(2, "0");
    enteredMonth = prompt("Enter the month: ").padStart(2, "0");
    while (Number(enteredDay) < 1 || Number(enteredDay) > 31 || Number(enteredMonth) < 1 || Number(enteredMonth > 12)) {
      enteredDay = prompt("Please enter valid day: ").padStart(2, "0");
      enteredMonth = prompt("Please enter valid month: ").padStart(2, "0");
      continue;
    }
    break;
  }

  targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

  /*If date is of next year */
  if (now > targetDate) {
    targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
  }

  setInterval(() => {

    /*Converting Target Date into milliseconds */
    const timer = new Date(targetDate).getTime();
    /*Taking Current Date in milliseconds */
    const today = new Date().getTime();

    /*Finding difference between Target Date and Today's Date */
    const difference = timer - today;

    /*Finding remaining days, minutes, seconds */
    const dayLeft = Math.floor(difference / day);
    const hourLeft = Math.floor((difference % day) / hour);
    const minLeft = Math.floor((difference % hour) / minute);
    const secLeft = Math.floor((difference % minute) / second);

    /*Showing Timmer in DOM */
    days.innerText = dayLeft;
    hours.innerText = hourLeft;
    minutes.innerText = minLeft;
    seconds.innerText = secLeft;

    /*Stopping Set Interval after reaching the Target Date */
    if (difference < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up!";
    }
  }, 0);
}

timerFunction();
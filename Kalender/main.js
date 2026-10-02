const days = document.querySelector(".days");
let currentDate = new Date(2026, 9);

function renderMonth(randomizeColors = false) {
    const options = {
    year: "numeric",
    month: "long",
    };
    let htmlEl = document.querySelector("#date");
    htmlEl.textContent = currentDate.toLocaleDateString("nl-NL", options); 
  //calculate the number of days in the current month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1 - 1,
  );
  const numberOfDays = lastDayOfMonth.getDate();

  //generate empty days before the first day of the month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  let firstDayOfMonthDay = firstDayOfMonth.getDay();

  //creates empty days for the first week of the month
  if (firstDayOfMonthDay == 0) firstDayOfMonthDay = 7;
  for (let i = 1; i < firstDayOfMonthDay; i++) {
    const emptyDay = document.createElement("li");
    emptyDay.classList.add("empty");
    days.appendChild(emptyDay);
  }

  //generate days of the month
  for (let i = 1; i <= numberOfDays; i++) {
    const day = document.createElement("li");
    day.classList.add("day");
    day.textContent = i;
    if (randomizeColors) {
      day.style.background = getNewColor();
    }
    days.appendChild(day);
  }
}

//* moving onto buttons to navigate between months
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

function nextMonth() {
  days.innerHTML = "";
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
  renderMonth(true);
}

function prevMonth() {
  days.innerHTML = "";
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
  renderMonth(true);
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);

function getNewColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  //#FF0000
  //"rgb(255, 0, 0)"
  //"hsl(0, 100%, 50%)"
  color = `hsl(${Math.random() * 60}, 40%, 50%)`;
  return color;
}

renderMonth();

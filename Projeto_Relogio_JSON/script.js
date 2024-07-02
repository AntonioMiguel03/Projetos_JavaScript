const clockElement = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.toLocaleString("en-us", { weekday: "long" });
  const date = now.getDate();
  const month = now.toLocaleString("en-us", { month: "long" });
  const year = now.getFullYear();
  const amPm = hours >= 12 ? "pm" : "am";

  const clock = {
    am_pm: amPm,
    hours: hours % 12 || 12,
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
    day: day,
    date: date,
    month: month,
    year: year,
  };

  clockElement.innerHTML = `
    <span class="token-key">const</span> clock = <span class="token-bracket">{</span><br>
        &nbsp;&nbsp;<span class="token-key">am_pm</span>: <span class="token-string">"${clock.am_pm}"</span>,<br>
        &nbsp;&nbsp;<span class="token-key">hours</span>: <span class="token-number">${clock.hours}</span>,<br>
        &nbsp;&nbsp;<span class="token-key">minutes</span>: <span class="token-number">${clock.minutes}</span>,<br>
        &nbsp;&nbsp;<span class="token-key">seconds</span>: <span class="token-number">${clock.seconds}</span>,<br>
        &nbsp;&nbsp;<span class="token-key">day</span>: <span class="token-string">"${clock.day}"</span>,<br>
        &nbsp;&nbsp;<span class="token-key">date</span>: <span class="token-number">${clock.date}</span>,<br>
        &nbsp;&nbsp;<span class="token-key">month</span>: <span class="token-string">"${clock.month}"</span>,<br>
        &nbsp;&nbsp;<span class="token-key">year</span>: <span class="token-number">${clock.year}</span>,<br>
    <span class="token-bracket">};</span>`;
}

setInterval(updateClock, 1000);
updateClock();

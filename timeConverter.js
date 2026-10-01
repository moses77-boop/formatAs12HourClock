function formatAs12HourClock(time) {
  const [hoursString, minutesString = "00"] = time.split(":");
  let hours = Number(hoursString);
  const minutes = minutesString;
  const isPM = hours >= 12;

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  const formattedHour = String(hours).padStart(2, "0");

  return `${formattedHour}:${minutes} ${isPM ? "pm" : "am"}`;
}

export { formatAs12HourClock };

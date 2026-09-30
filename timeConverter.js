function formatAs12HourClock(time){
    const hours = Number(time.slice(0, 2));
    if(hours > 12){
        return `${hours - 12}:00 pm`;
    }
    else{
        return `${hours} am`;
    }
}
console.log(formatAs12HourClock("12:00"))
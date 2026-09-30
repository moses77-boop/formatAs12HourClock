function formatAs12HourClock(time){
    const hours = Number(time.slice(0, 2));

    if(time === "00:00"){
        return `12:00 am`;
    }
    if(hours > 12){
        return `${hours - 12}:00 pm`;
    }
    else{
        return `${time} am`;
    }
}
export{formatAs12HourClock};
// console.log(formatAs12HourClock("12:00"))
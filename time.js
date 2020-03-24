let get_time = param => {
    return new Promise(resolve => {
        let now = {};
        now.raw = new Date();
    
        now.year = now.raw.getFullYear();
        now.month = now.raw.getMonth();
        now.date = now.raw.getDate();
        now.day = now.raw.getDay();
        now.hours = now.raw.getHours();
        now.minutes = now.raw.getMinutes();
        now.seconds = now.raw.getSeconds();
        now.milliseconds = now.raw.getMilliseconds();
        
        now.month = now.month + 1;
        if(now.month <= 9 ) {
             now.month = `0${now.month}`;
        }
        
        now.date = now.date;
        if(now.date <= 9) {
             now.date = `0${now.date}`
        }

        now.day = now.day;
        if(now.day <= 9 ) {
             now.day = `0${now.day}`;
        }

        now.hours = now.hours;
        if(now.hours <= 9) {
             now.hours = `0${now.hours}`
        }

        now.minutes = now.minutes;
        if(now.minutes <= 9) {
             now.minutes = `0${now.minutes}`
        }

        now.seconds = now.seconds;
        if(now.seconds <= 9) {
             now.seconds = `0${now.seconds}`
        }

        now.milliseconds = now.milliseconds;
        if(now.milliseconds <= 9) {
             now.milliseconds = `0${now.milliseconds}`;
        }
        if(now.milliseconds <= 99) {
             now.milliseconds = `0${now.milliseconds}`;
        }
    
        now.time_precise = `${now.year}${now.month}${now.date}-${now.hours}:${now.minutes}:${now.seconds} (${now.milliseconds}ms)`
        now.date_precise = `${now.year}${now.month}${now.date}`

        resolve(now)
    });
}

module.exports = {
    get_time
}
time = document.getElementById('time');
demo = document.getElementById('demo');
demo2 = document.getElementById('demo2');
demo3 = document.getElementById('demo3');


setInterval(() => {
    let currenttime = new Date;
    let birthday = new Date(currenttime.getFullYear() + "-03-16");
    if (birthday.getTime() < Date.now()) {
        let birthYear = (new Date).getFullYear() + 1;
        birthday = new Date(birthYear + "-03-16");

    }
    let timedifference = birthday.getTime() - currenttime.getTime();
    // to find out if birth year is leap or not
    let feb;
    function leapYear(birthYear) {
        if (birthYear % 100 == 0) {
            if (birthYear % 400 == 0) {
                feb = 29;
            } else {
                feb = 28;
            }
        } else {
            if (birthYear % 4 == 0) {
                feb = 29;
            } else {
                feb = 28;
            }
        }
    }
    leapYear();
    // if today is birthday
    if ((birthday.getDate() == currenttime.getDate()) && (birthday.getMonth() == currenttime.getMonth())) {
        document.getElementById('congrats').style.display = 'block';
    }
    else {
        document.getElementById('congrats').style.display = 'none';
    }

    let daysinMonth;
    switch (currenttime.getMonth()) {
        case 0:
            daysinMonth = 31;
            break;
        case 1:
            daysinMonth = feb;
            break;
        case 2:
            daysinMonth = 31;
            break;
        case 3:
            daysinMonth = 30;
            break;
        case 4:
            daysinMonth = 31;
            break;
        case 5:
            daysinMonth = 30;
            break;
        case 6:
            daysinMonth = 31;
            break;
        case 7:
            daysinMonth = 31;
            break;
        case 8:
            daysinMonth = 30;
            break;
        case 9:
            daysinMonth = 31;
            break;
        case 10:
            daysinMonth = 30;
            break;
        case 11:
            daysinMonth = 31;
            break;

        default:
            break;
    }


    let months;
    let days;
    let hours;
    let minutes;
    let seconds;

    // months
    if ((timedifference) / (1000 * 60 * 60 * 24) < daysinMonth) {
        months = 0;
    }
    else if ((birthday.getDate() > currenttime.getDate())) {
            if (birthday.getMonth() < currenttime.getMonth()) {
                months = 12 - currenttime.getMonth() + birthday.getMonth();
            }
            else if (birthday.getMonth() > currenttime.getMonth()) {
                months = birthday.getMonth() - currenttime.getMonth();
            }
    } else if ((birthday.getDate() <= currenttime.getDate())){
            if (birthday.getMonth() < currenttime.getMonth()) {
                months = 12 - currenttime.getMonth() + birthday.getMonth() -1;
            }
            else if (birthday.getMonth() > currenttime.getMonth()) {
                months = birthday.getMonth() - currenttime.getMonth() -1;
            } else if (birthday.getMonth() == currenttime.getMonth()) {
                    months = 11;
                }
    }
    // else if (birthday.getMonth() < currenttime.getMonth()) {
    //     months = 12 - currenttime.getMonth() + birthday.getMonth() - 1;
    // }
    // else if (birthday.getMonth() > currenttime.getMonth()) {
    //     months = birthday.getMonth() - currenttime.getMonth() - 1;
    // }
    // else if (birthday.getMonth() == currenttime.getMonth()) {
    //     months = 11;
    // }

    // days
    if ((timedifference / (1000 * 60 * 60 * 24)) <= daysinMonth) {
        if ((birthday.getDate()) <= (currenttime.getDate())) {
            months = 0;
            days = daysinMonth - currenttime.getDate() + birthday.getDate() - 1;

        } else if (birthday.getDate() > currenttime.getDate()) {

            days = birthday.getDate() - currenttime.getDate() - 1;
        }
    }
    else if (birthday.getDate() > currenttime.getDate()) {

        days = birthday.getDate() - currenttime.getDate() - 1;
    }
    else if (birthday.getDate() < currenttime.getDate()) {

        days = daysinMonth - currenttime.getDate() + birthday.getDate() - 1;
    } else if (birthday.getDate() == currenttime.getDate()) {

        days = daysinMonth - currenttime.getDate() + birthday.getDate() - 1;
    }
    // hours

    hours = 24 - currenttime.getHours() - 1;

    // minutes
    minutes = 60 - currenttime.getMinutes() - 1;

    // seconds
    seconds = 60 - currenttime.getSeconds() - 1;
    time.innerHTML = months + ":" + days + ":" + hours + ":" + minutes + ":" + seconds;


}, 1000);


// show qr code
qr = document.getElementById('qr');
function openqrcode() {
    qr.style.display = 'block';
}
// hide qr code
function closeqrcode() {
    qr.style.display = 'none';
}

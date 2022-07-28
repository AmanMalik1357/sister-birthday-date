time = document.getElementById('time');
demo = document.getElementById('demo');
demo2 = document.getElementById('demo2');
demo3 = document.getElementById('demo3');

let currenttime = new Date;
let birthday = new Date(currenttime.getFullYear() + "-06-30");
if (birthday.getTime() < Date.now()){
    let birthYear = (new Date).getFullYear() + 1;
    birthday = new Date(birthYear + "-06-30");

}
console.log(birthday);
let timedifference = birthday.getTime()-currenttime.getTime();

// to find out if birth year is leap or not
let feb;
function leapYear(birthYear) {
    if (birthYear%100 == 0){
        if (birthYear%400 == 0) {
            feb = 29;
        } else {
            feb = 28;
        }
    } else {
        if (birthYear%4 == 0) {
            feb = 29;
        } else {
            feb = 28;
        }
    }
}


let monthofYear;
switch (currenttime.getMonth()) {
    case 0:
        monthofYear = 31;
        break;
    case 1:
        monthofYear = feb;
        break;
    case 2:
        monthofYear = 31;
        break;
    case 3:
        monthofYear = 30;
        break;
    case 4:
        monthofYear = 31;
        break;
    case 5:
        monthofYear = 30;
        break;
    case 6:
        monthofYear = 31;
        break;
    case 7:
        monthofYear = 31;
        break;
    case 8:
        monthofYear = 30;
        break;
    case 9:
        monthofYear = 31;
        break;
    case 10:
        monthofYear = 30;
        break;
    case 11:
        monthofYear = 31;
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
// if (birthday.getMonth() < currenttime.getMonth()){
//     months = 12 - currenttime.getMonth() + birthday.getMonth();
// }
// else if (birthday.getMonth() > currenttime.getMonth()){
//     months = birthday.getMonth() - birthday.getMonth();
// }

if( (timedifference)/(1000*60*60*24) < monthofYear){
    months = 0;
}
else if (birthday.getMonth() < currenttime.getMonth()){
        months = 12 - currenttime.getMonth() + birthday.getMonth();
    }
    else if (birthday.getMonth() > currenttime.getMonth()){
        months = birthday.getMonth() - currenttime.getMonth();
    }

// days
if ((timedifference/(1000*60*60*24)) <= monthofYear ){
    if ((birthday.getDate()) <= (currenttime.getDate()) ) {
            month = 0;
            days = monthofYear - currenttime.getDate() + birthday.getDate();
            
    } else {
        months = 1;
        days = monthofYear - currenttime.getDate() + birthday.getDate();
    }
}
else{
    days = (monthofYear - currenttime.getDate() + birthday.getDate())%monthofYear;
}
days = days -1;
// hours
hours = 24 - currenttime.getHours() - 1;

// minutes
minutes = 60 -currenttime.getMinutes();

// seconds
seconds = 60 - currenttime.getSeconds();
time.innerHTML = months + ":" + days + ":" + hours + ":" + minutes + ":" + seconds;


// setInterval(() => {
    
// }, 1000);
demo2.innerHTML = currenttime + " " + currenttime.getTime();
demo.innerHTML = birthday + " " + birthday.getTime();
demo3.innerHTML = (timedifference/(1000*60*60*24));
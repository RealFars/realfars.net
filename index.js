//:^3

const weekdays={ 
    "0":"Sunday", 
    "1":"Monday", 
    "2":"Tuesday",
    "3":"Wednesday",
    "4":"Thursday",
    "5":"Friday",
    "6":"Saturday"
};

setInterval(function () {
    const date = new Date();
    var dateString
    var timeString

    dateString = weekdays[date.getDay()] + ", " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    document.getElementById("dateDisplay").innerHTML = dateString;

    if (date.getSeconds() % 2 != 0){
        timeString = date.getHours() + ":" + date.getMinutes()
    } else if (date.getSeconds() % 2 == 0){
        timeString = date.getHours() + " " + date.getMinutes()
    }
    document.getElementById("timeDisplay").innerHTML = timeString;
}, 1000);
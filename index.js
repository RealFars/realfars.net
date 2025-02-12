//:^
const date = new Date();

const weekdays={ 
    "0":"Sunday", 
    "1":"Monday", 
    "2":"Tuesday",
    "3":"Wednesday",
    "4":"Thursday",
    "5":"Friday",
    "6":"Saturday"
};

window.setTimeout(upateDateStuff, 100);

function upateDateStuff(){
    var dateString = weekdays[date.getDay()] + ", " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    document.getElementById("dateDisplay").innerHTML = dateString;

    var timeString = date.getHours() + ":" + date.getMinutes()
    document.getElementById("timeDisplay").innerHTML = timeString;
}
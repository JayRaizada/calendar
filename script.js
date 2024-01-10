const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li></li>`
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        if (i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) {
            liTag += `<li id="today" >${i}</li>`
        } else {
            liTag += `<li>${i}</li>`
        }
    }
    document.getElementById("display-month").innerHTML = months[currMonth] + ', ' + currYear;
    document.getElementById("dates").innerHTML = liTag;
}
renderCalendar();

function prevYear() {
    currYear--;
    renderCalendar();
}
function prevMonth() {
    if (currMonth == 0) {
        currMonth = 11;
        currYear--;
    } else {
        currMonth--;
    }
    renderCalendar();
}
function nextMonth() {
    if (currMonth == 11) {
        currYear++;
        currMonth = 0;
    } else {
        currMonth++;
    }
    renderCalendar();
}
function nextYear() {
    currYear++;
    renderCalendar();
}
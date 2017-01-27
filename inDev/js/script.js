
var $ = function (id) {
    return document.getElementById(id);
};

//core element vars
var dateDiv = $('dateContainer');

function init() {
    initSearchBar();
    buildDate();

    //Fade in
    $('body').style.opacity = 1;
    //$('mainContainer').style.opacity = 1;
    $('dateContainer').style.opacity = 1;
}

function initSearchBar() {

}

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function buildDate() {
    var today = new Date();
    dateDiv.innerHTML = "<font class=\"font-3em\">" +
        monthNames[today.getMonth()] +
        " " +
        today.getDate() +
        "</font><br><font>" +
        dayNames[today.getDay()] +
        ", " +
        today.getFullYear() +
        "</font>";
}












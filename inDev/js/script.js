
var $ = function (id) {
    return document.getElementById(id);
};

//core element vars
var dateDiv = $('dateContainer');
var searchList = $('searchList');
var spotlight = $('spotlight');

function init() {
    buildDate();

    //Fade in
    $('body').style.opacity = 1;
    $('dateContainer').style.opacity = 1;
}

/* ================================ */
/* ======== Date Widget ========== */
/* ============================== */

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

/** 
 * Build date display 
 */
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
/* -------------------------------- */

/* ================================ */
/* ====== Spotlight Search ======= */
/* ============================== */

var navIndex = -1;
var navList = [];

/**
 * Handles keyboard input in spotlight search box
 */
function handleQuery(event, query) {
    var key = event.keyCode || event.which;

    if (key === 27) { //escape
        spotlight.value = "";
        resetSpotLightSearch();

    } else if (key === 13) { //enter
        navigate();

    } else if (key === 38 || key === 40) {
        highlightOption(key);

    } else {
        buildSpotlightResults(query.trim());
    }

}

/**
 * Build spotlight results
 */
function buildSpotlightResults(query) {
    resetSpotLightSearch();

    if (query !== "") {
        searchList.innerHTML = buildLinkOptions(query) + buildSearchOptions(query);
    }
}

function resetSpotLightSearch() {
    navList = [];
    navIndex = -1;
    searchList.innerHTML = "";
}

/**
 * Build link options list
 */
function buildLinkOptions(query) {
    var linkOptions = "";

    if (query.length >= 2) {
        for (var i = 0; i < links.length; i++) {
            if (links[i][0].toLowerCase().includes(query.toLowerCase())) {
                linkOptions += "<li><span>" + links[i][0] + "</span></li>";
                navList.push(links[i][1]);
            }
        }
    }

    return linkOptions;
}


/**
 * Build search options list
 */
function buildSearchOptions(query) {
    var maxDisplay = 40;

    var viewText = "";
    if (query.length > maxDisplay) {
        viewText = query.substring(0, maxDisplay) + "...";
    } else {
        viewText = query;
    }

    var searchOptions = "";
    for (var i = 0; i < searchSources.length; i++) {
        searchOptions += "<li><span>Search " + searchSources[i][0] + " for " + viewText + "</span></li>";
        navList.push(searchSources[i][1]);
    }

    return searchOptions;
}

/**
 * Navigate to link or search option
 */
function navigate() {
    var query = spotlight.value;

    if (query !== "") {
        //Default to first result
        if (navIndex < 0) {
            navIndex = 0;
        }

        var url = navList[navIndex];

        if (url.includes("{Q}")) {
            window.location = url.replace("{Q}", encodeURIComponent(spotlight.value));
        } else {
            window.location = url;
        }
    }
}

/**
 * Highlight link / search option
 */
function highlightOption(key) {
    if (searchList.innerHTML !== "") {

        if (key === 38 && navIndex > -1) {
            navIndex--;

        } else if (key === 40 && navIndex < navList.length - 1) {
            navIndex++;
        }

    }
}

/* -------------------------------- */



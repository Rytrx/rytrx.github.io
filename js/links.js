var links = [
    // Social
    ["Facebook", "http://facebook.com/", "", ["fb"]],
    ["Gmail", "https://mail.google.com/mail/?uip=1#inbox", ""],

    // Procrastination
    ["imgur", "http://imgur.com/", ""],

    // Shopping
    ["Amazon", "http://www.amazon.co.uk/", ""],

    // Reddit
    ["/r/dota2", "https://www.reddit.com/r/dota2/", ""],
    ["/r/worldnews", "https://www.reddit.com/r/worldnews/", "", ["wn"]],

    // Media
    ["Netflix", "http://www.netflix.com/", ""],
    ["YouTube", "http://uk.youtube.com/", "", ["yt"]],

    // Development
    ["GitHub", "https://github.com/", ""],
    ["Stack Overflow", "http://stackoverflow.com/", "", ["so"]],

    // Other
    ["Wikipedia", "http://en.wikipedia.org/wiki/Main_Page", ""]
];

//Urls for search functionality
//'{Q}' will be replaced by search query
var searchSources = [
    ["Google", "https://www.google.com/#q={Q}"],
    ["Google Images", "https://www.google.com/search?tbm=isch&q={Q}"],
    ["IMDB", "http://www.imdb.com/find?q={Q}"],
    ["Stack Overflow", "http://stackoverflow.com/search?q={Q}"],
    ["Urban Dictionary", "http://www.urbandictionary.com/define.php?term={Q}}"],
    ["Wikipedia", "http://en.wikipedia.org/w/index.php?search={Q}",],
    ["YouTube", "https://www.youtube.com/results?search_query={Q}"]
];
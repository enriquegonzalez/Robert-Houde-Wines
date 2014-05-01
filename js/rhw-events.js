$(function  () {
    var source   = $("#eventsHandleBars").html(),
        template = Handlebars.compile(source),
        data = $.getJSON("content/events.json");

//         data = {Events:[

// {
// title:"Craft Beer And Sparkling Wine Tasting",
// weekDay:"Monday",
// month:"May",
// day:"5",
// year:"2014",

// startTime:"12:00",
// endTime:"3:00 p.m.",
// description:"Taste sparkling wines from Champagne, Jura, Burgundy, Spain, Italy and Slovenia along with great craft beers from Windy City Distributing.",

// imgFileName:"sparkling-wine.jpg",
// imgDescription:"Sparkling wine selection.",

// locationName:"POPS for Champagne",
// address:"601 N State St",
// city:"Chicago",
// state:"IL",
// zip:"60611",

// rsvpLink:"mailto:events@roberthoudewines.com",

// tradeOnly:"yes"}

//                         ]};

$("#eventsList").append (template(data));


});






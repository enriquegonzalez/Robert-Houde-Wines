$(function  () {
    var source   = $("#producersHandleBars").html(),
        template = Handlebars.compile(source),
        data = {Selection:[{country:"Portugal", region:{name: "Douro", producers:{ name: "Drink & Dreams", location: "", link: "http://drink-dreams.net/" }}}]};

  $("#producersList").append (template(data));

});






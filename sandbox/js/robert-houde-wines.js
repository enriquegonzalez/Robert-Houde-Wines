// Function to slabtext the H1 headings
    function slabTextHeadlines() {
        $(".slabtextdone").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint": 0,
            "resizeThrottleTime": 100
        });
    };

    $(window).load(function() {
        setTimeout(slabTextHeadlines, 500);
    });


// PRODUCERS
// Producer Menus
$('#ProducersAustria').click( function() {
  $('#ProducersAustriaRegionList').slideToggle();
});

$('#ProducersFrance').click( function() {
  $('#ProducersFranceRegionList').slideToggle();
});

$('#ProducersGermany').click( function() {
  $('#ProducersGermanyRegionList').slideToggle();
});

$('#ProducersItaly').click( function() {
  $('#ProducersItalyRegionList').slideToggle();
});

$('#ProducersPortugal').click( function() {
  $('#ProducersPortugalRegionList').slideToggle();
});

$('#ProducersSlovenia').click( function() {
  $('#ProducersSloveniaRegionList').slideToggle();
});

$('#ProducersSpain').click( function() {
  $('#ProducersSpainRegionList').slideToggle();
});

$('#ProducersUSA').click( function() {
  $('#ProducersUSARegionList').slideToggle();
});


  // Menu Closers
  $('#ProducersAustriaRegionListClose').click( function() {
    $('#ProducersAustriaRegionList').slideUp();
  });

  $('#ProducersFranceRegionListClose').click( function() {
    $('#ProducersFranceRegionList').slideUp();
  });

  $('#ProducersGermanyRegionListClose').click( function() {
    $('#ProducersGermanyRegionList').slideUp();
  });

  $('#ProducersItalyRegionListClose').click( function() {
    $('#ProducersItalyRegionList').slideUp();
  });

  $('#ProducersPortugalRegionListClose').click( function() {
    $('#ProducersPortugalRegionList').slideUp();
  });

  $('#ProducersSloveniaRegionListClose').click( function() {
    $('#ProducersSloveniaRegionList').slideUp();
  });

  $('#ProducersSpainRegionListClose').click( function() {
    $('#ProducersSpainRegionList').slideUp();
  });

  $('#ProducersUSARegionListClose').click( function() {
    $('#ProducersUSARegionList').slideUp();
  });


// Producer Links
$('a[rel="external"]').attr('target', '_blank');

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
$('h1[id^=Producers]').click( function() {
  $(this).siblings('div[id$=RegionList]').slideToggle();
});

  // Menu Closer
  $('i[id$=RegionListClose]').click( function() {
    $(this).parents('div[id$=RegionList]').slideUp();
  });

// Producer Links
$('a[rel="external"]').attr('target', '_blank');

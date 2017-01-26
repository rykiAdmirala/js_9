$(function tabs() {
  var $tabLinks = $('.tabs-block').find('.tabs-head a'); // Clickable tabs
  var $tabBlocks = $('.tabs-block').find('.tabs-item'); // Content areas assigned with tabs
  var actNum = 0; // Сonsecutive number of initial tab to be active (starting from 0)


  $tabLinks.each(function(i) {
    $(this).attr('tab-id', i);
  });
  $tabBlocks.each(function(i) {
    $(this).attr('tab-id', i);
  });
  $tabLinks.eq(actNum).addClass('active-link');
  $tabBlocks.eq(actNum).addClass('active');

  
  $tabLinks.on('click', function(e) {
    e.preventDefault();
    var index = $(this).attr('tab-id');
      
    $tabLinks.removeClass('active-link');
    $(this).addClass('active-link');
    
    $tabBlocks.each(function() {
      if ($(this).attr('tab-id') == index) {
        $(this).addClass('active').siblings('.tabs-item').removeClass('active');
      }
    });
  });
    
    
});
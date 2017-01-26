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
    
    
});;$(function tooltip() {
  var ttCount = 0;
  var $ttItem = $('.has-tooltip'); // Elements for which we are making tooltip

  $ttItem.on('mouseenter focusin', showTooltip);
  $ttItem.on('mouseleave focusout', hideTooltip);
  $('.showall').on('click', showAllTooltip);


  function showTooltip(arg) {

    var $tooltip = $('*[data-tt-id="' + $(this).attr('data-tted-by-id') + '"]');

    if ( !$tooltip.length || (!$tooltip.length && (arg == 'showall') ) ) {
      // If there is no tooltip OR no tooltip and this function is called by showAllTooltip() function
      $(this).attr('data-tted-by-id', ttCount);
      var ttItemOffset = $(this).offset(); // Getting parameters for proper positioning of the tooltip
      var ttItemHeight = $(this).outerHeight();
      var ttItemWidth = $(this).outerWidth();
      var ttText = $(this).attr('title');
      
      $(this).attr('title', ''); // Replacing native tooltips

      $tooltip = $('<span class="tooltip" data-tt-id="' + ttCount + '"">' + ttText + '</span>')
      $tooltip.insertAfter($(this))
              .css({
                'top' : ttItemOffset.top - (($tooltip.outerHeight() - ttItemHeight) / 2),
                'left' : ttItemOffset.left + ttItemWidth + 20
              })
              .fadeIn(250);
      ttCount++;
    }

  }

  function hideTooltip() {

    if ( !( $(this).is(':focus') || $(this).is(':hover') ) ) {
      // Making tooltip NOT to disappear in focused or hovered tooltip'ed item
      var $tooltip = $('*[data-tt-id="' + $(this).attr('data-tted-by-id') + '"]');

      $(this).attr('title', $tooltip.text()); // Returning native tooltips
      $(this).removeAttr('data-tted-by-id');

      $tooltip
        .stop(true)
        .fadeOut(100, function() {
            $(this).remove();
          });
        
    }
  }

  function showAllTooltip() {
    $ttItem.each(function() {
      showTooltip.call($(this), 'showall');
    });
  }
  
});
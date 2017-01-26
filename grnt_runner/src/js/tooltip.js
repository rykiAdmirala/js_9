$(function tooltip() {
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
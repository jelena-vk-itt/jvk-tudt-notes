$('.hasTT2').qtip({
    content: {
      	attr      : 'tt'
    },
    position  : {  
	effect: function(api, pos, viewport) {
	    // "this" refers to the tooltip
	    $(this).animate(pos, {
		duration: 600,
		easing: 'linear',
		queue: false // Set this to false so it doesn't interfere with the show/hide animations
	    });
	}
    },
    style: {
	classes   : "qtip-tipsy ttStyle",
	tip       : {
	    border : 3
	}
    }
 })


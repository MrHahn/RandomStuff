$('.accordion-box').each(function() {
	var thisaccordion = $(this);
	thisaccordion.find(".hidden-content-link").click(function() {
		var viewLimiter = thisaccordion.find(".view-limiter");
		var viewContentHeight = viewLimiter.find(".view-content").outerHeight() + 20;
		 	if(viewLimiter.hasClass('expanded')){
	 			viewLimiter.animate({'height': 55})
	 			viewLimiter.removeClass('expanded');
	 			$(this).text('Read More >');
			}else{
	 			viewLimiter.animate({'height': viewContentHeight});
	 			viewLimiter.addClass('expanded');
	 			$(this).text('Read Less >');
	 		}
	});
});

// jshint devel:true

;(function() {
	$.fn.animateRotate = function(angle, duration, easing, complete) {
		var args = $.speed(duration, easing, complete);
		var step = args.step;
		return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
				$.style(e, 'transform', 'rotate(' + now + 'deg)');
				if (step) return step.apply(e, arguments);
			};
	
			$({deg: 0}).animate({deg: angle}, args);
		});
	};
	$(document).ready(function() {
		var arrow = $('.arrow');
		$('#assignBlame').on('click', function(){
			var degrees = Math.floor(Math.random() * 3600) + 720;
			arrow.animateRotate(degrees, 1500);
		});
	});
}) ()
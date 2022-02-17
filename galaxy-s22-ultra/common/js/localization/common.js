;(function($) {
	
	var IS_JP = ($('html').attr('lang') == 'ja') ? true : false;
	
	(function() {
		var shopStatus = window.COUNTRY_SHOP_STATUS;
		var shopUrl = window.COUNTRY_SHOP_URL;
		if (shopStatus&&shopStatus!="") {
			$('.country-check').addClass(shopStatus)
			.find('.order-button').attr({href:shopUrl});
		} else {
			$('#contents').addClass('buy-empty');
		}
		if (!$('#subnav .preCheck .scrollbox ul > li').length) {
			$('#contents').addClass('util-empty');
		}
	})();
	
	
	(function() {
		var $galaxyColorContrast = $('.galaxy-color-contrast');
		if ($galaxyColorContrast.get(0)) {
			var cookieHighContrastMode = $._cookie.get('highContrastMode');
			var skipMessage = $galaxyColorContrast.data('skipMessage');
			if (IS_JP) {
				$('.global_header .accNav').append('<p><a href="#skipToHighContrast">'+skipMessage+'</a></p>');
			} else {
				$('#header .s-skip-content').append('<a href="#skipToHighContrast">'+skipMessage+'</a>');
			}
			$galaxyColorContrast.find('a.color-type1').on('click', function(e) {
				e.preventDefault();
				$._cookie.set('highContrastMode', 1, 1, '/');
				$('html').addClass('color_yb');
			});
			$galaxyColorContrast.find('a.color-type2').on('click', function(e) {
				e.preventDefault();
				$._cookie.set('highContrastMode', 0, 1, '/');
				$('html').removeClass('color_yb');
			});
		}
	})();
	
	
	if (IS_JP) {
		$(window).resize(function () {
			clearTimeout(window.__jpresize);
			window.__jpresize = setTimeout(function () {
				GALAXY.resize();
			}, 500);
		});
		GALAXY.load(function() {
			$('.f_backtotop a').attr('data-omni-type', 'microsite_action');
		});
	}
	
	
	(function() {
		if (location.hostname.indexOf('samsung.com')>-1) {
			(function(D,FY){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','___'+D);
			
			window['___'+D]('create',FY,'auto',{'name':D});window['___'+D](D+'.send','pageview');
			})('galaxylocal', 'UA-67656716-5');
		}
	})();
	
	
	
})(window.jQuery);
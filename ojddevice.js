(function () {
	window.ATInternet = window.ATInternet || {};
	window.ATInternet.Callbacks = window.ATInternet.Callbacks || {};
	window.ATInternet.Callbacks.ojdDevice = window.ATInternet.Callbacks.ojdDevice || function (tag) {
		
		var bp = {
			smartphone:600,
			desktop:1000
		};
		
		wojd = "";
	  
		if(typeof window.innerWidth != 'undefined') {
			var w = window.innerWidth;
			if (w < bp.smartphone) wojd = "smartphone";
			else if (w < bp.desktop) wojd = "tablet";
			else if (w >= bp.desktop) wojd = "desktop";
			else wojd = "";
		}

		tag.page.set({
			customObject: {
				"device": wojd
			}
		});

	};
	window.ATInternet.Utils = window.ATInternet.Utils || {dispatchCallbackEvent: function () {}};
	window.ATInternet.Utils.dispatchCallbackEvent('ojdDevice');
})();

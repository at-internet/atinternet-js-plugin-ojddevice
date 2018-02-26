(function () {
  window.ATInternet = window.ATInternet || {};
  window.ATInternet.Callbacks = window.ATInternet.Callbacks || {};
  window.ATInternet.Callbacks.ojdDevice = window.ATInternet.Callbacks.ojdDevice || function (tag) {

    var bp = {
      smartphone:600,
      desktop:1000,
    };

    wojd = "";

    if(typeof (w = window.innerWidth) != 'undefined') {
      wojd = (w < bp.smartphone) ? "smartphone" :
              (w < bp.desktop) ? "tablet" :
              (w >= bp.desktop) ? "desktop" : 
              "";
    }

    tag.page.set({
      customObject: {
        "device": wojd,
      }
    });

  };
  window.ATInternet.Utils = window.ATInternet.Utils || {dispatchCallbackEvent: function () {}};
  window.ATInternet.Utils.dispatchCallbackEvent('ojdDevice');
})();

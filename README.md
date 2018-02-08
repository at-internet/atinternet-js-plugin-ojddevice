
# OJD Device detection plugin

This AT Internet SmartTag plugin intends to add the device type information (smartphone, tablet, desktop) to AT Internet custom object "device", following OJD responsive requirements.

## Requirements

This plugin needs SmartTag **v5.3.0** or higher, with **Callbacks** activated.

## Loading

Load this file **after** the SmartTag main file in your HTML page

`<script src="ojddevice.js" type="text/javascript"></script>`

## Action

This plugin will add an attribute in the AT Internet Tracker custom object. This parameter is a property `device`  with one of the following value: 
* smartphone
* tablet
* desktop

## Setup

You can edit the devices' width boundaries in the file:

``` javascript
// Define devices width boundaries
var bp = {
	// smartphone if width lower than...
	smartphone:600,
	// tablet if width between
	// desktop if width greater than...
	desktop:1000
};
```

In this example, the script will determine the following value:
```
smartphone: width < 600px
tablet: 600px <= width < 1000px
desktop: 1000px <= width
```

## Support

This plugin is provided "AS IS". Feel freel to fork, enhance and pull request, but no official support and maintenance will be provided.

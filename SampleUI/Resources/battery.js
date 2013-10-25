var msgString = '';
msgString += 'Display width : ' + Titanium.Platform.displayCaps.platformWidth;
msgString += '\r\nDisplay height : ' + Titanium.Platform.displayCaps.platformHeight;
msgString += '\r\nAvailable Memory : ' + Titanium.Platform.availableMemory;
msgString += '\r\nProcessor Count : ' + Titanium.Platform.processorCount;
msgString += '\r\nOS Name : ' + Titanium.Platform.osname;

var msg = Titanium.UI.createLabel({
	text:msgString,
	top:10,
	left:10,
	width:'auto',
	height:'auto',
	font:{fontSize:18}
});

Titanium.UI.currentWindow.add(msg);
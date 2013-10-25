var copyLabel = Titanium.UI.createLabel({
	text:'Switch 값 = false' ,
	top:50,
	left:40,
	width:300,
	height:'auto'
});

var switchcontrol = Titanium.UI.createSwitch({
	value:false,
	top:90,
	left:40,
	enabled:false
});
switchcontrol.addEventListener('change',function(e)
{
	copyLabel.text = 'Switch 값 = ' + e.value;
});

Ti.UI.currentWindow.title = 'Titanium.UI.createSwitch';
Ti.UI.currentWindow.add(copyLabel); 
Ti.UI.currentWindow.add(switchcontrol); 

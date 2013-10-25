var copyLabel = Titanium.UI.createLabel({
	text:'Slider 값 = 10' ,
	top:50,
	left:40,
	width:300,
	height:'auto'
});

var slider = Titanium.UI.createSlider({
	min:0,
	max:100,
	value:25,
	width:250,
	height:11,
	top:80
});
slider.addEventListener('change',function(e)
{
	copyLabel.text = 'Slider 값 = ' + e.value;
});

Ti.UI.currentWindow.title = 'Titanium.UI.createSlider';
Ti.UI.currentWindow.add(copyLabel); 
Ti.UI.currentWindow.add(slider); 

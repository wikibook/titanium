// create button
var button = Titanium.UI.createButton({
	title:'Click Me!',
	color:'#000',
	selectedColor:'#fff',
	top:20,
	width:100,
	height:80
});

// create button event listener
button.addEventListener('click', function(e)
{
	Titanium.UI.createAlertDialog({title:'Button',message:'Hi! Titanium'}).show();
});


Ti.UI.currentWindow.title = 'Titanium.UI.createButton';
Ti.UI.currentWindow.add(button);
var buttonbar = Titanium.UI.createButtonBar({
	labels:['하나','둘','셋'],
	top:20,
	width:200,
	height:30,
	color:'#000',
	selectedColor:'#fff',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

// create buttonbar event listener
buttonbar.addEventListener('click', function(e)
{
    Titanium.UI.createAlertDialog(
         {title:'ButtonBar',message:e.index}).show();
});

Ti.UI.currentWindow.title = 'Titanium.UI.createButtonBar';
Ti.UI.currentWindow.add(buttonbar);
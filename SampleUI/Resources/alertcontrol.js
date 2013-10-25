var alt = Titanium.UI.createAlertDialog({
	title:'Alert 예제'
});

alt.addEventListener('click', function(e)
{
	alert(e.index);
});

var btn = Titanium.UI.createButton({
	title:'다중 버튼',
	height:30,
	width:200,
	top:20
});

btn.addEventListener('click', function()
{
	alt.message = '다중 버튼';
	alt.buttonNames = ['하나','둘','셋'];
	alt.show();
});

Ti.UI.currentWindow.add(btn);
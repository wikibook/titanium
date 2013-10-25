var opt = Titanium.UI.createOptionDialog({
	options:['옵션 1', '옵션 2', '옵션 3'],
	destructive:1,
	cancel:2,
	title:'액션시트라고도 하죠'
});

var btn = Titanium.UI.createButton({
	title:'옵션 다이얼로그',
	height:30,
	width:200,
	top:20
});

btn.addEventListener('click', function()
{
	opt.show();
});

Ti.UI.currentWindow.add(btn);
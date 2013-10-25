var progress = Titanium.UI.createProgressBar({
    width:250,
    min:0,
    max:30,
    color:'#000',
    message:'다운로드 0/30'
});

Ti.UI.currentWindow.title = 'Titanium.UI.createProgressBar';
Ti.UI.currentWindow.add(progress);
progress.show();

var val = 0;
var interval = setInterval(function()
{
	if (val > 30)
	{
		return;
	}
	progress.value = val;
	progress.message = '다운로드 ' + val + '/30';
	val++;
},1000);

var indicator1 = Titanium.UI.createActivityIndicator({
	message:'Loading ...',
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

var indicator2 = Titanium.UI.createActivityIndicator({
	top:100,
	message:'LOADING ...',
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
});

var indicator3 = Titanium.UI.createActivityIndicator({
	top:200,
	message:'로딩중...',
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});

Ti.UI.currentWindow.backgroundColor = '#ddd';
Ti.UI.currentWindow.title = 'ActivityIndicator';
Ti.UI.currentWindow.add(indicator1);
Ti.UI.currentWindow.add(indicator2);
Ti.UI.currentWindow.add(indicator3);

indicator1.show();
indicator2.show();
indicator3.show();

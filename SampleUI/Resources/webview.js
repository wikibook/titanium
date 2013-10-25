var webView = Ti.UI.createWebView({
	url:'http://m.naver.com'
});

Ti.UI.currentWindow.title = 'Titanium.UI.createWebView';
Ti.UI.currentWindow.add(webView);

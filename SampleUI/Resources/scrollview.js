var scrollView = Ti.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
    backgroundColor:'red',
    borderRadius:10,
    width:1000,
    height:1000
});
scrollView.add(view);
Ti.UI.currentWindow.title = 'Titanium.UI.createScrollview';
Ti.UI.currentWindow.add(scrollView);

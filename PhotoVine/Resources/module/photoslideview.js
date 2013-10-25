Ti.include("appglobal.js");

var photoslideviewWin = Titanium.UI.currentWindow;
photoslideviewWin.backgroundColor = BACKGROUNDCOLOR;
photoslideviewWin.barColor = BARCOLOR;
showIndicator('Loading');

var arrImage = [];
for( var i=0; i<photoslideviewWin.imgData.length; i++) {
	arrImage[i] = Ti.UI.createImageView({
		image:photoslideviewWin.imgData[i]
	});
};
var scrollView = Titanium.UI.createScrollableView({
	views:arrImage,
	showPagingControl:true,
	pagingControlHeight:20,
	maxZoomScale:3.0,
	currentPage:0
});
photoslideviewWin.add(scrollView);
hideIndicator(1000);
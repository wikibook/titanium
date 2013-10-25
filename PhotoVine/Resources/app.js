Ti.include("module/appglobal.js");

// create tab group
var tabGroup = Titanium.UI.createTabGroup({});

// PhotoList
var mainWin = Titanium.UI.createWindow({ 
    backgroundColor:BACKGROUNDCOLOR,
	barColor:BARCOLOR,
	barImage:MAINBARIMAGE,
	title:'PhotoList',
	url:'module/photolist.js'
});
var mainTab = Titanium.UI.createTab({  
    icon:'image/plist.png',
    title:'PHOTO',
	backgroundColor:BACKGROUNDCOLOR,
    window:mainWin
});

// SlideShow
var slideWin = Titanium.UI.createWindow({  
    title:'SlideShow',
    backgroundColor:BACKGROUNDCOLOR,
	barColor:BARCOLOR,
	barImage:MAINBARIMAGE,
	url:'module/slideshow.js'
});
var slideTab = Titanium.UI.createTab({  
    icon:'image/slide.png',
    title:'SLIDE',
    window:slideWin
});

// PhotoUpload
var uploadWin = Titanium.UI.createWindow({
	title:'PhotoUpload',
    backgroundColor:BACKGROUNDCOLOR,
	barColor:BARCOLOR,
	barImage:MAINBARIMAGE,
	url:'module/photoupload.js'
});
var uploadTab = Titanium.UI.createTab({
	icon:'image/pupload.png',
	title:'UPLOAD',
	window:uploadWin
});

//  add tabs
tabGroup.addTab(mainTab);
tabGroup.addTab(slideTab);
tabGroup.addTab(uploadTab);

// open tab group
tabGroup.open();
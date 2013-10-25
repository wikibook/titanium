var imgview = Titanium.UI.createImageView({
	image:'http://www.photovine.co.kr/photo/thumb/photovine_147.jpg',
	width:'auto'
});

var title = 'Titanium.UI.createImageView';
Titanium.UI.currentWindow.title = title;
Titanium.UI.currentWindow.add(imgview);

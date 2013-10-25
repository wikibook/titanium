// scrollableview.js

// 이미지 배열을 생성
// 각 배열에 이미지 할당
var arrImage = [];
arrImage[0] = Ti.UI.createImageView({
   image:'http://www.photovine.co.kr/photo/thumb/photovine_92.jpg'
});
arrImage[1] = Ti.UI.createImageView({
   image:'http://www.photovine.co.kr/photo/thumb/photovine_93.jpg'
});
arrImage[2] = Ti.UI.createImageView({
   image:'http://www.photovine.co.kr/photo/thumb/photovine_94.jpg'
});
arrImage[3] = Ti.UI.createImageView({
   image:'http://www.photovine.co.kr/photo/thumb/photovine_95.jpg'
});

// 컨텐츠 View 생성
var scrollView = Ti.UI.createScrollableView({	   
    top:40,
    views:arrImage,
    showPagingControl:true,
    pagingControlHeight:20,
    maxZoomScale:3.0,
    currentPage:0
});


// Window title를 설정
Ti.UI.currentWindow.title = 'Titanium.UI.createScrollableView';

// imageview 객체를 현 Window에 추가
Ti.UI.currentWindow.add(scrollView);
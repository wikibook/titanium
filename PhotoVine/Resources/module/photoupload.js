Ti.include("appglobal.js");

var photoFormWin = Titanium.UI.currentWindow;
photoFormWin.backgroundColor = BACKGROUNDCOLOR;
photoFormWin.barColor = BARCOLOR;

var photoTitle = Ti.UI.createTextField({
	autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	font:{fontSize:12, fontWeight:'normal'},
	top:10,
	width:300,
	height:35,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE,
	hintText:'제목을 입력해 주세요.',
	borderWidth:1,
	borderColor:GRAYLINE,
	suppressReturn:false
});
photoTitle.addEventListener('return', function()
{
	photoTitle.blur();
});
photoFormWin.add(photoTitle);

var imageView1 = Titanium.UI.createImageView({
	height:60,
	width:60,
	top:50,
	left:15,
	borderRadius:8,
	backgroundColor:THUMBNAILBORDERCOLOR,
	image:'../image/pupload.jpg'
});
var imageView2 = Titanium.UI.createImageView({
	height:60,
	width:60,
	top:50,
	left:90,
	borderRadius:8,
	backgroundColor:THUMBNAILBORDERCOLOR,
	image:'../image/pupload.jpg'
});
var imageView3 = Titanium.UI.createImageView({
	height:60,
	width:60,
	top:50,
	left:165,
	borderRadius:8,
	backgroundColor:THUMBNAILBORDERCOLOR,
	image:'../image/pupload.jpg'
});
var imageView4 = Titanium.UI.createImageView({
	height:60,
	width:60,
	top:50,
	left:240,
	borderRadius:8,
	backgroundColor:THUMBNAILBORDERCOLOR,
	image:'../image/pupload.jpg'
});
photoFormWin.add(imageView1);
photoFormWin.add(imageView2);
photoFormWin.add(imageView3);
photoFormWin.add(imageView4);

// photo upload class
var photo1,photo2,photo3,photo4;
var photo = 
{
	photoTitle:null,
	sendData: function(pTitle) {
		photoTitle = photoTitle;
		var xhr = Titanium.Network.createHTTPClient();		
		xhr.onerror = function(e){
			Ti.UI.createAlertDialog({message:e.error}).show();
		};
		// open the client
		xhr.open('POST', 'http://www.photovine.co.kr/m/PhotoUpload.php');
		// send the data
		xhr.send({
			media1: photo1,
			media2: photo2,
			media3: photo3,
			media4: photo4,
			Title: pTitle
		});
		xhr.setTimeout(20000);
		xhr.onload = function(e){
			Ti.UI.createAlertDialog({title:'PhotoVine', message:'Status Code ' + this.status}).show();
			if(this.status===200) {
				photoTitle.value = '';
				photo1 = '';
				photo2 = '';
				photo3 = '';
				photo4 = '';
				imageView1.image = '../image/pupload.jpg';
				imageView2.image = '../image/pupload.jpg';
				imageView3.image = '../image/pupload.jpg';
				imageView4.image = '../image/pupload.jpg';
				Titanium.App.fireEvent('fire_recentPhotoRefresh');
				Titanium.UI.currentTabGroup.tabs[0].active = true;
			}
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
		};
		xhr.onsendstream = function(e){
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
		};
	}
};

function selectPhoto(n)
{
	Titanium.Media.openPhotoGallery({
		success:function(event)
		{
			switch (n)
			{
				case 1:
					photo1 = event.media;
					imageView1.image = event.media;
					break;
				case 2:
					photo2 = event.media;
					imageView2.image = event.media;
					break;
				case 3:
					photo3 = event.media;
					imageView3.image = event.media;
					break;
				case 4:
					photo4 = event.media;
					imageView4.image = event.media;
					break;
			};
		},
		cancel:function()
		{},
		error:function(error)
		{ alert(error); },
		allowEditing:true
	});
};

function selectCamera(n)
{
	Titanium.Media.showCamera({
		success:function(event)
		{
			Titanium.Media.saveToPhotoGallery(event.media);
			switch (n)
			{
				case 1:
					photo1 = event.media;
					imageView1.image = event.media;
					break;
				case 2:
					photo2 = event.media;
					imageView2.image = event.media;
					break;
				case 3:
					photo3 = event.media;
					imageView3.image = event.media;
					break;
				case 4:
					photo4 = event.media;
					imageView4.image = event.media;
					break;
			};
		},
		cancel:function()
		{},
		error:function(error)
		{
			if (error.code == Titanium.Media.NO_CAMERA)
			{
				Titanium.UI.createAlertDialog({title:'PhotoVine',message:'카메라를 지원하지 않습니다.'}).show();
			}
			else
			{ alert(error); }
		},
		allowEditing:true
	});
};

imageView1.addEventListener('click', function()
{
	var opt = Titanium.UI.createOptionDialog({
		options:['기존 앨범에서 선택', '사진촬영', '취소하기'],
		destructive:2,
		title:'선택해 주세요'
	});
	opt.addEventListener('click', function(e)
	{
		if( e.index == 0 )
			selectPhoto(1);
		else if( e.index == 1 )
			selectCamera(1);
	});
	opt.show();
});

imageView2.addEventListener('click', function(){ selectPhoto(2); });
imageView3.addEventListener('click', function(){ selectPhoto(3); });
imageView4.addEventListener('click', function(){ selectPhoto(4); });

// new photo button
var photoWriteBtn = Titanium.UI.createButton({
	title:'사진등록'
});
photoWriteBtn.addEventListener('click', function() {
	if( photoTitle.value === '' ) {
		Ti.UI.createAlertDialog({title:'PhotoVine', message:'제목을 입력해 주세요!'}).show();
		photoTitle.focus();
	} else {
		photo.sendData(photoTitle.value);
	}
});
photoFormWin.rightNavButton = photoWriteBtn;
photoFormWin.addEventListener('focus', function() { photoTitle.focus(); });
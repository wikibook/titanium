Ti.include("appglobal.js");

var photoviewWin = Titanium.UI.currentWindow;
photoviewWin.backgroundColor = BACKGROUNDCOLOR;
photoviewWin.barColor = BARCOLOR;
showIndicator('Loading');

// create table view data object
var xhr = Ti.Network.createHTTPClient();
xhr.onload = function()
{
	try
	{
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName("Item");
		var item = items.item(0);
		var createdate = item.getElementsByTagName("CreateDate").item(0).text;
		var title = item.getElementsByTagName("Title").item(0).text;
		var memid = item.getElementsByTagName("MemID").item(0).text;
		var view = item.getElementsByTagName("View").item(0).text;
		var vote = item.getElementsByTagName("Vote").item(0).text;
		var content = item.getElementsByTagName("Content").item(0).text;
		if( content == '' ) { content = '내용이 없습니다.'; };
		Ti.API.info(content);
		
		// 이미지뷰 처리
		var imagesBtn = Titanium.UI.createButton({
			title:'이미지뷰',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
	
		// picture data
		var photoimages = doc.getElementsByTagName("PhotoImages");
		if( photoimages != null ) {
			var imgData = [];
			for(var i=0; i<item.getElementsByTagName("PhotoImage").length; i++) {
				imgData[i] = item.getElementsByTagName("PhotoImage").item(i).text;
			};
			var photoimage = Ti.UI.createImageView({
				top:40,
				image:imgData[0],
				height:'auto',
				width:'auto',
				borderRadius:5
			});

			imagesBtn.addEventListener('click', function() {
				var photoslideviewWin = Titanium.UI.createWindow({
					title:'이미지뷰',
					backgroundColor:BACKGROUNDCOLOR,
					barColor:BARCOLOR,
					url:'photoslideview.js'
				});
				var imageCloseBtn = Titanium.UI.createButton({
					title:'닫기',
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
				});
				photoslideviewWin.setLeftNavButton(imageCloseBtn);
				imageCloseBtn.addEventListener('click',function()
				{
					photoslideviewWin.close();
				});
				photoslideviewWin.imgData = imgData;
				photoslideviewWin.open({modal:true});
			});
			
		} else {
			imagesBtn.title = '이미지뷰(0)';
			imagesBtn.addEventListener('click', function() {
				alert('no image');
			});
		}
	
		// 추천
		var voteBtn = Titanium.UI.createButton({
			title:'추천',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		// 댓글보기
		var commentBtn = Titanium.UI.createButton({
			title:'댓글',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		// 댓글작성
		var commentFormBtn = Titanium.UI.createButton({
			title:'댓글작성',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		// flexspace
		var flexSpace = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		
		// draw form
		var memidView = Titanium.UI.createView({
			top:5,
			left:5,
			backgroundColor:'#CCC',
			height:25,
			width:150,
			borderRadius:10
		});
		var memidLbl = Titanium.UI.createLabel({
			font:{fontSize:12,fontWeight:'bold'},
			color:NAMELABELCOLOR,
			text:memid,
			height:'auto',
			width:'auto',
			textAlign:'center'
		});

		var createdateView = Titanium.UI.createView({
			top:5,
			right:5,
			backgroundColor:'#CCC',
			height:25,
			width:150,
			borderRadius:10
		});
		var createdateLbl = Titanium.UI.createLabel({
			font:{fontSize:12,fontWeight:'bold'},
			color:NAMELABELCOLOR,
			text:createdate,
			height:'auto',
			width:'auto',
			textAlign:'center'
		});
		var titleLbl = Titanium.UI.createLabel({
			font:{fontSize:15,fontWeight:'bold'},
			color:BLACKCOLOR,
			text:title,
			top:0,
			left:3,
			right:3,
			border:1,
			height:'auto'
		});
		
		memidView.add(memidLbl);
		photoviewWin.add(memidView);
		createdateView.add(createdateLbl);
		photoviewWin.add(createdateView);
		photoviewWin.add(photoimage);
		hideIndicator(1000);
		photoviewWin.setToolbar([imagesBtn,flexSpace,voteBtn,commentBtn,commentFormBtn],{translucent:true});
	}
	catch(E)
	{
		//alert(E);
	}
};
xhr.open("GET","http://www.photovine.co.kr/m/PhotoView.php?No="+photoviewWin.no);
Ti.API.info("http://www.photovine.co.kr/m/PhotoView.php?No="+photoviewWin.no);
xhr.send();
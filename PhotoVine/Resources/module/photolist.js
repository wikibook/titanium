Ti.include("appglobal.js");

var photoListWin = Ti.UI.currentWindow;
photoListWin.backgroundColor = BACKGROUNDCOLOR;
photoListWin.barColor = BARCOLOR;

var tab = Titanium.UI.currentTab;
showIndicator('Loading');

// 인기사진
var favLabel = Ti.UI.createLabel({
	text:'가장 인기있는 사진',
	color:TITLECOLOR,
	font:{fontSize:14, fontWeight:'bold'},
	left:10,
	top:5,
	height:20	
});
var scrollView = Titanium.UI.createScrollView({
	contentWidth:990,
	contentHeight:50,
	top:30,
	height:70,
	width:310,
	borderRadius:10,
	backgroundColor:'#A9A9A9'
});
photoListWin.add(favLabel);
photoListWin.add(scrollView);
// scroll data
var scrollViewData = function() {
	var data = [];
	var imgData = [];
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function()
	{
		try
		{
			var doc = this.responseXML.documentElement;
			var items = doc.getElementsByTagName("Item");
			if( items.length>0 ) {
				var x = 0;
				var margin = 65;
				var leftmargin;
				for (var c=0;c<items.length;c++)
				{
					var item = items.item(c);
					var no = item.getElementsByTagName("No").item(0).text;
					var title = item.getElementsByTagName("Title").item(0).text;
					var thumbnail = item.getElementsByTagName("PhotoImage").item(0).text;
					if( x==0 ) {
						leftmargin = 10;
					} else {
						leftmargin = 10 + margin*x;
					}
					data[x] = {title:title, no:no};
					imgData[x] = Titanium.UI.createImageView({
						height:60,
						width:60,
						borderRadius:8,
						backgroundColor:THUMBNAILBORDERCOLOR,
						defaultImage:'./image/pupload.jpg',
						image:thumbnail,
						left:leftmargin,
						no:no,
						title:title
					});
					imgData[x].addEventListener('click',function(e)
					{
						var photoViewWin = Ti.UI.createWindow({
							title:e.source.title,
							url:'photoview.js',
						    backgroundColor:BACKGROUNDCOLOR,
							barColor:BARCOLOR
						});
						photoViewWin.no = e.source.no;
						photoViewWin.hideTabBar();
						tab.open(photoViewWin,{animated:true});
					});
					scrollView.add(imgData[x]);
					x++;
				}
			}
		}
		catch(E)
		{
			//alert(E);
		}
	};
	xhr.open("GET","http://www.photovine.co.kr/m/FavoritePhoto.php");
	xhr.send();
};
scrollViewData();

// recent bbs list
var recentLabel = Ti.UI.createLabel({
	text:'최근 올라온 사진',
	color:TITLECOLOR,
	font:{fontSize:14, fontWeight:'bold'},
	left:10,
	top:108,
	height:15	
});
photoListWin.add(recentLabel);

var recentPhotoData = function()
{
	var data = [];
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function()
	{
		try
		{
			var doc = this.responseXML.documentElement;
			var items = doc.getElementsByTagName("Item");
			if( items.length>1 ) {
				var x = 0;
				for (var c=0;c<items.length;c++)
				{
					var item = items.item(c);
					var no = item.getElementsByTagName("No").item(0).text;
					var createdate = item.getElementsByTagName("CreateDate").item(0).text;
					var title = item.getElementsByTagName("Title").item(0).text;
					var memid = item.getElementsByTagName("MemID").item(0).text;
					var view = item.getElementsByTagName("View").item(0).text;
					var vote = item.getElementsByTagName("Vote").item(0).text;
					var thumbnail = item.getElementsByTagName("PhotoImage").item(0).text;
					var row = Ti.UI.createTableViewRow({title_:title, no:no, height:80, backgroundColor:BACKGROUNDCOLOR, selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY, hasChild:true});
					//Image
					var img = Ti.UI.createImageView({
						left:5,
						image:thumbnail,
						height:70,
						width:70,
						borderRadius:8,
						preventDefaultImage:true
					});
					row.add(img);
					//Title
					var titleLabel = Ti.UI.createLabel({
						text:title,
						color:TITLECOLOR,
						font:{fontSize:15, fontWeight:'normal'},
						left:90,
						top:23,
						height:20	
					});
					row.add(titleLabel);
					//Nickname, id
					var nameLabel = Ti.UI.createLabel({
						color:NAMELABELCOLOR,
						font:{fontSize:11, fontWeight:'bold'},
						text:memid,
						top:8,
						left:90,
						width:120,
						height:10,
						textAlign:'left'
					});
					row.add(nameLabel);
					//Date
					var dateLabel = Ti.UI.createLabel({
						color:DATELABELCOLOR,
						font:{fontSize:10, fontWeight:'bold'},
						text:createdate,
						top:8,
						left:198,
						width:110,
						height:10,
						textAlign:'right'
					});
					row.add(dateLabel);
					//View
					var viewLabel = Ti.UI.createLabel({
						color:VIEWLABELCOLOR,
						font:{fontSize:11, fontWeight:'bold'},
						text:'조회 : '+view,
						bottom:8,
						left:140,
						width:80,
						height:10,
						textAlign:'right'
					});
					row.add(viewLabel);
					//Vote
					var voteLabel = Ti.UI.createLabel({
						color:REPLYLABELCOLOR,
						font:{fontSize:11, fontWeight:'bold'},
						text:'추천 : '+vote,
						bottom:8,
						right:-7,
						width:70,
						height:10,
						textAlign:'right'
					});
					row.add(voteLabel);
					data[x++] = row;
				}
				var tableview = Titanium.UI.createTableView({data:data,top:130, backgroundColor:BACKGROUNDCOLOR});
				photoListWin.add(tableview);
				tableview.addEventListener('click',function(e)
				{
					var photoViewWin = Ti.UI.createWindow({
						title:e.rowData.title_,
						url:'photoview.js',
					    backgroundColor:BACKGROUNDCOLOR,
						barColor:BARCOLOR
					});
					photoViewWin.no = e.rowData.no;
					photoViewWin.hideTabBar();
					tab.open(photoViewWin,{animated:true});
				});
			}
			hideIndicator(1000);
		}
		catch(E)
		{
			//alert(E);
		}
	};
	xhr.open("GET","http://www.photovine.co.kr/m/PhotoList.php");
	xhr.send();
};
recentPhotoData();

Ti.App.addEventListener('fire_recentPhotoRefresh', function(e){
	recentPhotoData();
});

// refresh
var refreshBtn = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
refreshBtn.addEventListener('click', function()
{
	recentPhotoData();
});
photoListWin.rightNavButton = refreshBtn;
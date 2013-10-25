Ti.include("appglobal.js");

var slideshowWin = Titanium.UI.currentWindow;
slideshowWin.backgroundColor = BACKGROUNDCOLOR;
slideshowWin.barColor = BARCOLOR;
showIndicator('Loading');

var coverflowViewData = function() {
	var images = [];
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET","http://www.photovine.co.kr/m/SlideShow.php");
	xhr.onload = function()
	{
		try
		{
			var doc = this.responseXML.documentElement;
			var items = doc.getElementsByTagName("Item");
			if( items.length>1 ) {
				for (var c=0;c<items.length;c++)
				{		
					var thumbnail = items.item(c).getElementsByTagName("PhotoImage").item(0).text;
					images[c] = thumbnail;
				}
				
				// create coverflow
				var slideshowView = Titanium.UI.createCoverFlowView({
					defaultImage:'',
					images:images,
					backgroundColor:BACKGROUNDCOLOR
				});
				slideshowWin.add(slideshowView);
			}
			hideIndicator(1000);
		}
		catch(E)
		{
			//alert(E);
		}
	};
	xhr.send();
};
coverflowViewData();

// refresh
var refreshBtn = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
refreshBtn.addEventListener('click', function()
{
	coverflowViewData();
});
slideshowWin.rightNavButton = refreshBtn;
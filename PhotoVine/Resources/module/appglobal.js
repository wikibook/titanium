var TOPBACKGROUNDCOLOR = '#FF7300';
var BLACKBACKGROUNDCOLOR = '#000000';
var BACKGROUNDCOLOR = '#f1f0ea';
var SEPARATORBACKGROUNDCOLOR = '#c8c8c8';
var COMMENTBACKGROUNDCOLOR = '#c8c8c8';
var SEPARATORCOLOR = '#505050';

var BARCOLOR = '#1583AF';
var BARIMAGE = '';//'../image/top_bg.gif';
var MAINBARIMAGE = '';//'image/top_bg.gif';

var TITLECOLOR = '#282828';
var NAMELABELCOLOR = '#707072';
var DATELABELCOLOR = '#707072';
var CONTENTCOLOR = '#323232';
var THUMBNAILBORDERCOLOR = '#f1f0ea';
var VIEWLABELCOLOR = '#323232';
var REPLYLABELCOLOR = '#323232';
var BLACKCOLOR = '#000000';
var WHITECOLOR = '#FFFFFF';
var GRAYLINE ='#8b8b8b';

// custom loading indicator
var indWin = null;
var actInd = null;
function showIndicator(msg)
{
	// container
	indWin = Titanium.UI.createWindow({
		height:150,
		width:150
	});

	// black view
	var indView = Titanium.UI.createView({
		height:150,
		width:150,
		backgroundColor:'#000',
		borderRadius:10,
		opacity:0.8
	});
	indWin.add(indView);

	// loading indicator
	actInd = Titanium.UI.createActivityIndicator({
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
		height:30,
		width:30
	});
	indWin.add(actInd);

	// message
	var message = Titanium.UI.createLabel({
		text:msg,
		color:'#fff',
		width:'auto',
		height:'auto',
		font:{fontSize:20,fontWeight:'bold'},
		bottom:20
	});
	indWin.add(message);
	indWin.open();
	actInd.show();
};

function hideIndicator(dur)
{
	actInd.hide();
	indWin.close({opacity:0,duration:dur});
};
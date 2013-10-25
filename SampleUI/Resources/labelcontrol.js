var win = Titanium.UI.currentWindow;
var labelA = Titanium.UI.createLabel({
	top:20,
    text:'기본 라벨',
	  width:200,
    height:50,
    color:'#000',
    textAlign:'center'
});

var labelB = Titanium.UI.createLabel({
	top:100,
	text:'라벨 꾸미기',
	height:50,
	width:200,
	color:'#000',
	font:{fontSize:25, fontStyle:'italic'},
	textAlign:'center',
	shadowColor:'#000',
	shadowOffset:{x:3,y:3}
});

Ti.UI.currentWindow.title = 'Titanium.UI.createLabel';
Titanium.UI.currentWindow.add(labelA);
Titanium.UI.currentWindow.add(labelB);
var win = Titanium.UI.currentWindow;
var strLabel1 = 'Label 1';
var strLabel2 = 'Label 2';

var labelA = Titanium.UI.createLabel({
	top:20,
    text:strLabel1,
	width:200,
    height:50,
    color:'#000',
    textAlign:'center'
});

win.add(labelA);

var labelB = Titanium.UI.createLabel({
	top:80,
    text:strLabel2,
	width:200,
    height:50,
    color:'#000',
    textAlign:'center'
});

win.add(labelB);
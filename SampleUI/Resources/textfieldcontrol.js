var txtField = Titanium.UI.createTextField({
	top:10,
	height:35,
	width:300,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	hintText:'INPUT_BORDERSTYLE_BEZEL'
});

var txtField2 = Titanium.UI.createTextField({
	top:50,
	height:35,
	width:300,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE,
		hintText:'INPUT_BORDERSTYLE_LINE'
});

var txtField3 = Titanium.UI.createTextField({
	top:90,
	height:35,
	width:300,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		hintText:'INPUT_BORDERSTYLE_NONE'
});

var txtField4 = Titanium.UI.createTextField({
	top:130,
	height:35,
	width:300,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText:'INPUT_BORDERSTYLE_ROUNDED'
});
var copyLabel = Titanium.UI.createLabel({
	top:50,
	width:300,
	height:'auto',
	text:'나는 라벨이다.'
});
Titanium.UI.currentWindow.add(txtField);
//Titanium.UI.currentWindow.add(txtField2);
//Titanium.UI.currentWindow.add(txtField3);
///Titanium.UI.currentWindow.add(txtField4);
//Titanium.UI.currentWindow.title = 'Titanium.UI.INPUT_BORDERSTYLE_XXXXXX';
Titanium.UI.currentWindow.add(copyLabel);

txtField.addEventListener('return',function(e)
{
	copyLabel.text = 'return 이벤트 : ' + e.value;
	txtField.blur();
});
txtField.addEventListener('focus',function(e)
{
	copyLabel.text = 'focus 이벤트 : ' + e.value;
});
txtField.addEventListener('blur',function(e)
{
	copyLabel.text = 'blur 이벤트 : ' + e.value;	
});
txtField.addEventListener('change', function(e)
{
	copyLabel.text = 'change 이벤트 : ' + e.value + '\nTextField 값 : ' + txtField.value;	
});
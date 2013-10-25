var data = [];
data[0] = Ti.UI.createPickerRow({title:'Window'});
data[1] = Ti.UI.createPickerRow({title:'View'});
data[2] = Ti.UI.createPickerRow({title:'Control'});

var picker = Titanium.UI.createPicker({top:700});
picker.add(data);
picker.selectionIndicator = true;

picker.addEventListener('change',function(e)
{
	alert(e.selectedValue[0]);
});

Ti.UI.currentWindow.title = 'Titanium.UI.createPicker';
Ti.UI.currentWindow.add(picker);
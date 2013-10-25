Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();

var appWin = Titanium.UI.createWindow({
    title:'Application Badge',
    backgroundColor:'#fff'
});
var btnApp = Titanium.UI.createButton({
	title:'App Badge = 5',
	top:60,
	height:40,
	width:200
});
btnApp.addEventListener('click', function()
{
	if (Titanium.UI.iPhone.appBadge == 0)
	{
		btnApp.title = 'App Badge = 5';
		Titanium.UI.iPhone.appBadge = 'N';
	}
	else
	{
		btnApp.title = 'App Badge = 0';
		Titanium.UI.iPhone.appBadge = null;
	}
});
appWin.add(btnApp);
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'App Badge',
    window:appWin
});


var tabWin = Titanium.UI.createWindow({
    title:'TabGroup Badge',
    backgroundColor:'#fff'
});
var btnTab = Titanium.UI.createButton({
	title:'Tab Badge = 0',
	top:60,
	height:40,
	width:200
});
btnTab.addEventListener('click', function(e)
{
	if (tab2.badge == null)
	{
		btnTab.title = 'Tab Badge = 10';
		tab2.badge = 10;		
	}
	else
	{
		btnTab.title = 'Tab Badge = 0';
		tab2.badge = null;		
	}
});
tabWin.add(btnTab);

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab Badge',
    window:tabWin
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
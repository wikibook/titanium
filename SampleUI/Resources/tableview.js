// create table view data object
var data = [
	{title:'createTableView()', hasChild:true},
	{title:'createTableViewRow()', hasChild:false},
	{title:'createTableViewSection()', hasChild:false},
	{title:'TableView Example', hasChild:false}
];

data.push({title:'TableView Example2', hasChild:false});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	style: Titanium.UI.iPhone.TableViewStyle.PLAIN
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	Titanium.UI.createAlertDialog({title:'Table View',message:e.index}).show();
});


Ti.UI.currentWindow.title = 'Titanium.UI.createTableView';
Ti.UI.currentWindow.add(tableview);

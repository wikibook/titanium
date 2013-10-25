MainFrame = {};

// Window
MainFrame.masterWindow = Ti.UI.createWindow({title:'Master Window'});
MainFrame.detailWindow = Ti.UI.createWindow({title:'Detail Window',backgroundColor:'#fff'});

// Navigation Group
MainFrame.masterNav = Ti.UI.iPhone.createNavigationGroup({window:MainFrame.masterWindow});
MainFrame.detailNav = Ti.UI.iPhone.createNavigationGroup({window:MainFrame.detailWindow});

// Create SpliteWindow
MainFrame.spliteWindow = Titanium.UI.iPad.createSplitWindow({
	masterView:MainFrame.masterNav,
	detailView:MainFrame.detailNav
});

// SpliteWindow 이벤트 리스너 등
MainFrame.spliteWindow.addEventListener('visible',function(e)
{
	if (e.view == 'detail')
	{
		e.button.title = "항목";
		MainFrame.detailWindow.leftNavButton = e.button;
	} 
	else if (e.view == 'master')
	{
		MainFrame.detailWindow.leftNavButton = null;
	}
});

// masterView 컨텐츠 생성
MainFrame.tableVewData = [
	{title:'받은 편지함', content:'받은 편지함 목록', hasChild:true},
	{title:'보낸 편지함', content:'보낸 편지함 목록', hasChild:true},
	{title:'임시 보관함', content:'임시 보관함 목록', hasChild:true},
	{title:'휴지통', content:'휴지통 목록', hasChild:true}
];
MainFrame.tableView = Ti.UI.createTableView({data:MainFrame.tableVewData});
MainFrame.tableView.addEventListener('click', function(e)
{
	MainFrame.contentView.fireEvent('mailSelected', {
		name:e.rowData.title,
		content:e.rowData.content
	});
});
MainFrame.masterWindow.add(MainFrame.tableView);

// detailView 컨텐츠 생성
// 옵션 생성
MainFrame.button = Titanium.UI.createButton({title:'옵션'});
MainFrame.optionDialog = Titanium.UI.createOptionDialog({
	options:['전달', '답장'],
	title:'선택하세요'
});
MainFrame.button.addEventListener('click', function()
{
	MainFrame.optionDialog.show({view:MainFrame.button,animated:true});
});
MainFrame.detailWindow.rightNavButton = MainFrame.button;
// 라벨 생성
MainFrame.contentView = Ti.UI.createView();
MainFrame.contentLabel = Ti.UI.createLabel({
	text:'선택해 주세요.',
	height:'auto',
	width:'auto',
	color:'#000'
});
MainFrame.contentView.add(MainFrame.contentLabel);
MainFrame.contentView.addEventListener('mailSelected', function(e) {
	MainFrame.contentLabel.text = e.content;
});
MainFrame.detailWindow.add(MainFrame.contentView);

// SpliteWindow 활성화
MainFrame.spliteWindow.open();
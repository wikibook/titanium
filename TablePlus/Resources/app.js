// 흰색 배경의 빈 Window 생성
Titanium.UI.setBackgroundColor('#fff');
var TablePlusWin = Titanium.UI.createWindow();

// 아시아 지역 국가 이름 및 수도
var asiaData = [
		{title:"그루지야 : 트빌리시", header:'ㄱ'},
		{title:"네팔 : 카트만두", header:'ㄴ'},
		{title:"대만 : 타이페이", header:'ㄷ'},
		{title:"대한민국 : 서울"},
		{title:"동티모르 : 딜리"},
		{title:"라오스 : 비엔티안", header:'ㄹ'},
		{title:"레바논 : 베이루트"},
		{title:"말레이시아 : 콸라룸푸르", header:'ㅁ'},
		{title:"메니아 : 예레반"},
		{title:"몰디브 : 말레"},
		{title:"몽골 : 울란바토르"},
		{title:"미얀마 : 양곤"},
		{title:"바레인 : 마나마", header:'ㅂ'},
		{title:"방글라데시 : 다카"},
		{title:"베트남 : 하노이"},
		{title:"부탄 : 팀부"},
		{title:"북한 : 평양"},
		{title:"브루나이 : 반다르세리베가완"},
		{title:"사우디아라비아 : 리야드", header:'ㅅ'},
		{title:"스리랑카 : 콜롬보"},
		{title:"시리아 : 다마스쿠스"},
		{title:"싱가포르 : 싱가포르"},
		{title:"아랍에미리트 : 아부다비", header:'ㅇ'},
		{title:"아제르바이잔 : 바쿠"},
		{title:"아프가니스탄 : 카불"},
		{title:"예멘 : 사나"},
		{title:"오만 : 무스카트"},
		{title:"요르단 : 암만"},
		{title:"우즈베키스탄 : 타슈켄트"},
		{title:"이라크 : 바그다드"},
		{title:"이란 : 테헤란"},
		{title:"이스라엘 : 예루살렘"},
		{title:"인도 : 뉴델리"},
		{title:"인도네시아 : 자카르타"},
		{title:"일본 : 도쿄"},
		{title:"중국 : 베이징", header:'ㅈ'},
		{title:"카자흐스탄 : 아스타나", header:'ㅋ'},
		{title:"카타르 : 도하"},
		{title:"캄보디아 : 프놈펜"},
		{title:"쿠웨이트 : 쿠웨이트"},
		{title:"키르기스스탄 : 비슈케크"}, 
		{title:"키프로스 : 니코시아"},
		{title:"타이 : 방콕", header:'ㅌ'},
		{title:"타지키스탄 : 두샨베"},
		{title:"터키 : 앙카라"},
		{title:"투르크메니스탄 : 아슈하바트"},
		{title:"파키스탄 : 이슬라마바드", header:'ㅍ'},
		{title:"필리핀 : 마닐라"}
];

// 인덱스 생성
var index = [
	{title:'ㄱ',index:0},
	{title:'ㄴ',index:1},
	{title:'ㄷ',index:2},
	{title:'ㄹ',index:5},
	{title:'ㅁ',index:7},
	{title:'ㅂ',index:12},
	{title:'ㅅ',index:18},
	{title:'ㅇ',index:22},
	{title:'ㅈ',index:35},
	{title:'ㅋ',index:36},
	{title:'ㅌ',index:42},
	{title:'ㅍ',index:(asiaData.length -1)}
];

// Table headerView 추가
var header = Ti.UI.createView({
	backgroundColor:'#1583AF',
	height:'auto'
});
var headerLabel = Ti.UI.createLabel({
	height:30,
	font:{fontSize:18,fontWeight:'bold'},
	text:'아시아 지역 국가 이름 및 수도',
	color:'#fff',
	textAlign:'center'
});
header.add(headerLabel);

// 검색창 생
var searchBar = Titanium.UI.createSearchBar({
	showCancel:false
});

var asiaTable = Titanium.UI.createTableView({ top:30, data:asiaData,  search:searchBar, filterAttribute:'title', index:index });
TablePlusWin.addEventListener('delete',function(e)
{
	alert(asiaData[e.index].title + ' 데이터가 삭제되었습니다.');
});
TablePlusWin.addEventListener('move',function(e)
{
	alert(asiaData[e.index].title + ' 데이터가 이동되었습니다.');
});

var tabbedBar = Ti.UI.iOS.createTabbedBar({
	top:0,
	height:30,
	width:320,
	labels:['추가', '삭제', '이동', '완료'],
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	index:3
});
tabbedBar.addEventListener('click',function(e){
	switch(e.index) {
		case 0 :
			newRow = Ti.UI.createTableViewRow({title:'국가명 : 수도명'});
			asiaTable.insertRowBefore(0,newRow);
			break;
		case 1 :
			asiaTable.editing = true;
			break;
		case 2 :
			asiaTable.moving = true;
			break;
		case 3 :
			asiaTable.editing = false;
			asiaTable.moving = false;
			break;
	}
});

TablePlusWin.add(asiaTable);
TablePlusWin.add(tabbedBar);
TablePlusWin.open();
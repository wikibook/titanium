/*
 * Titanium.UI 모듈의 createWindow 메소드를 이용하여,
 * Window를 생성합니다.
 * 속성으로는
 * 		타이틀(title:'HelloWorld')
 * 		배경색(backgroundColor:'#fff')
 * 값을 설정합니다.
 */
var mainWindow = Titanium.UI.createWindow({  
    title:'HelloWorld',
    backgroundColor:'#fff'
});

/*
 * Titanium.UI 모듈의 createLabel 메소드를 이용하여,
 * Label을 생성합니다.
 * 속성으로는 
 * 		색상(color:'#999')
 * 		텍스트(text:'Hello World!')
 * 		폰트(font:{fontSize:30,fontFamily:'Helvetica Neue'})
 * 		정렬(textAlign:'center')
 * 		가로/새로(width:'auto',height:'auto')
 * 값들을 설정합니다.
 */
var label = Titanium.UI.createLabel({
	color:'#999',
	text:'Hello World!',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	height:'auto'
});

/*
 * 생성한 label을 mainWindow에 add시킵니다.
 */
mainWindow.add(label);

/*
 * mainWindow를 open 메소드를 이용하여 화면에 올립니다.
 */
mainWindow.open();
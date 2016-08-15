var screenObj=document.getElementById('screen');
function inputKey(num){
	if(clearBool){
		screenObj.value='';
		clearBool=false;
	}
	if(screenObj.value=='0' && num!='.'){
		screenObj.value=num;
	}else{
		if((screenObj.value.indexOf(".")==-1 && num==".") || num!='.'){
			screenObj.value+=num;
		}
	}
}
function clearFun(){
	screenObj.value='';
}
function sqr(){
	screenObj.value=Math.sqrt(screenObj.value);
}
function del(){
	screenObj.value=screenObj.value.substring(0,screenObj.value.length-1);
}
var beforNum,afterNum,signGlobal,clearBool=false;
function operatingFun(sign){
	
	if(signGlobal!=null){
		result();
		beforNum=resultNum;
		signGlobal=sign;
		afterNum=null;
	}else{
		beforNum=screenObj.value;
		signGlobal=sign;
		clearBool=true;
	}
}
var resultNum='';
function result(){
	afterNum=screenObj.value;
	switch (signGlobal){
		case '+':
			screenObj.value=Number(beforNum)+Number(afterNum);
			break;
		case '-':
			screenObj.value=Number(beforNum)-Number(afterNum);
			break;
		case '*':
			screenObj.value=Number(beforNum)*Number(afterNum);
			break;
		case '/':
			screenObj.value=Number(beforNum)/Number(afterNum);
			break;
		case '%':
			screenObj.value=Number(beforNum)%Number(afterNum);
			break;
		default:
			break;
	}
	clearBool=true;
	resultNum=screenObj.value;
}

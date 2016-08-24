var _currentTab = 0, picWidth = 260, picWidth1 = 280, len = 4;
var flg = false;

function switchVouch(value,flg){
	//console.log(_currentTab);
	/*
	if(flg){
		$("#downlodaButton").show();
	} else {
		$("#downlodaButton").hide();
	}
	*/
	$('.points li').removeClass('current_banner');
	
	for(var i=0 ; i<5; i++) {
		$('#new_txt' + i ).hide();
	}
	
	if(value >= len){
		$('#point0').addClass('current_banner');	
		$('#new_txt0').show();	
	}else{
		$('#point' + value).addClass('current_banner');
		$('#new_txt' + value ).show();	
	}
	
	$('.l_infor').animate({
		left : (-1-value) * picWidth + 'px'
	},500,function(){		
		if(value >= len){
			$('.l_infor').css('left',(-1) * picWidth + 'px');
			_currentTab = 0;
		}
	});
}

function clearAuto() {
	clearInterval(autoStart);
}

function setAuto() {
	autoStart = setInterval("auto(_currentTab)", 2000);
	
}

function auto() {
	_currentTab++;	
	/*
	if(_currentTab == 3 ){
		$("#downlodaButton").show();
		flg = true;
	}else{
		$("#downlodaButton").hide();
		flg = false;
	}
	*/
	switchVouch(_currentTab,flg);
} 
 
setAuto(); 	

/*
function leftScr(){
	_currentTab--;
	if(_currentTab < 0){
		$('.banner_box').css('left',(-1)*(len+1)*picWidth + 'px');
		_currentTab = len - 1;
	}
	switchVouch(_currentTab);	
}

function rightScr(){
	_currentTab++;
	if(_currentTab >= len){
		$('.banner_box').css('left','0px');
		_currentTab = 0;
	}
	switchVouch(_currentTab);	
}
*/
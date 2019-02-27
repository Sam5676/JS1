var userNum = +prompt('Input integer number', '');

alert(checkNumberShorthand(userNum));

function checkNumberShorthand(num){
	return (num>0) ? 1 : (num<0) ? -1 : 0;
}

function checkNumber(num){
	var check=0;
	if(num>0){
		check=1;
	}else if(num<0){
		check=-1;
	}
	return check;
}
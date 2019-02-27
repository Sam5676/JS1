var userYear = +prompt('What year is now?', '');

alert(checkYearOptimal(userYear));

function checkYear(currentYear){
	if(currentYear==2015){
		return 'You are right';
	}else return 'Did you fall from Moon?'
}

function checkYearOptimal(currentYear){
		return (currentYear==2015) ? 'You are right' : 'Did you fall from Moon?';
}
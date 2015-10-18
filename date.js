// date.js

// let's create a function that tells us the date

var days = [
	'Sunday', 
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

// get day of the week
function whatDayIsIt() {
	// var currentDate = new Date();
	// var day = currentDate.getDay(); // this returns a number from 0 - 6 where 0 is Sunday
	// return days[day];
	return days[new Date().getDay()];
};

module.exports = {
	whatDayIsIt: whatDayIsIt
};
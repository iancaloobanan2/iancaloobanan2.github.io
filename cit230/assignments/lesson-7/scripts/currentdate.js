// get the current date
var myDate = new Date();


// get day of week
var weekDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayOfWeek = myDate.getDay(); // returns 0 - 6
var dayOfWeekString = weekDays[dayOfWeek]; // Saturday

// get day of month
var dayOfMonth = myDate.getDate(); // returns 1 - 31

// get month
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = myDate.getMonth(); // returns 0 - 11
var monthString = months[month];

//get full year
var fullYear = myDate.getFullYear(); // retunrs 2018

// Saturday, 2 June 2018
var fullDate = dayOfWeekString + ', ' + dayOfMonth + ' ' + monthString + ' ' + fullYear;

// add to HTML footer
document.getElementById('currentdate').innerHTML = fullDate;

//get today's date
let today = new Date();

//get last visit date
var date2 = new Date(parseInt(localStorage['last_visit'], 10));

//calculate total number of seconds between two dates  
var total_seconds = Math.abs(date2 - today) / 1000;
  
//calculate days difference by dividing total seconds in a day  
var days_difference = Math.floor (total_seconds / (60 * 60 * 24));  

//display result
document.querySelector('#counter').innerHTML = days_difference;

//save visit in localStorage
localStorage['last_visit'] = ''+today.getTime();
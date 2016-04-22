//setdate
// set a variable for the date using built in js date function
// setDate is a method that allows the value of the date variable to be changed by user input
// user enters a new date which is saved to variable

var myObj = ( function iife() {
  var myDate = new Date();

  function setDate() {
    var userInputDate;
    if (typeof userInputDate !== 'undefined') {
      myDate = userInputDate;
    }
  }

  function getDate( format ) {
  	myDate.getDate({ format: "milliseconds" });
/*
  	  return myDate.getMilliseconds();
    myDate.getDate({ format: "formatted" });

      return myDate.getDayName + myDate.getMonthName = myDate.getFullYear;
    myDate.getDate();
  */
  }

  function getDayName() {
    var weekday = new Array(7);
    weekday[0]=  'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    return weekday[myDate.getDay()];
  }

  function getMonthName() {
    var month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    return month[myDate.getMonth()];
  }

  function isFuture() {
    if (myDate > Date.now){

    	return true;
    } else {

    	return false;
    }
  }

  function isToday() {
    if (myDate.getDay === Date.now.getDay && mydate.getMonth ===
   	  Date.now.getMonth && myDate.getFullYear === Date.now.getFullYear) {

    	return true;
    } else {

    	return false;
    }
  }

  return {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
  };
})();


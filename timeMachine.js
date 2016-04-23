'use strict';
var timeMachine = (function iife() {

  var month = new Array(12);
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

  var weekday = new Array (7);
  weekday [0] = 'Sunday';
  weekday [1] = 'Monday';
  weekday [2] = 'Tuesday';
  weekday [3] = 'Wednesday';
  weekday [4] = 'Thursday';
  weekday [5] = 'Friday';
  weekday [6] = 'Saturday';

  var date = null;

  function setDate(d) {
    if ( d instanceof Date ) {

      //testing where d is
      //console.log('in instnce of Date: ' + d);
      date = d;

      return date;
    }
    else if ( d === undefined ) {
      date = new Date();
      //console.log('in else if: ' + d);

      return date;
    }
    else{
      date = new Date(d);
      //console.log('in else: ' + d);

      return date;
    }
  }

  function isFuture() {
    if (date > Date.now()){
      return true;
    } else {
      return false;
    }
  }

  function getDayName() {
    return weekday[ date.getDay() ];
  }

  function getMonthName() {
    return month[ date.getMonth() ];
  }

  return {
    setDate: setDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture
  };
})();

timeMachine();
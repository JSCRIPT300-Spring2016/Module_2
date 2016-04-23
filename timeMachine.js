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

  function makeDate() {
    if (date === null) {
      date = new Date();

      return date;
    }
  }

  function setDate( dateInput ) {
    if ( dateInput instanceof Date ) {

      //testing where dateInput is
      //console.log('in instnce of Date: ' + dateInput);
      date = dateInput;

      return date;
    }
    else if ( dateInput === undefined ) {
      date = new Date();
      //console.log('in else if: ' + dateInput);

      return date;
    }
    else{
      date = new Date(dateInput);
      //console.log('in else: ' + dateInput);

      return date;
    }
  }

  function getDate(formatRequest){

    //this if statement is not quite right yet
    if (date === null){
      date = makeDate();
    }
    if (formatRequest.format === 'formatted') {
      return month [ date.getMonth() ] + ' ' + date.getDate() +
       ', ' + date.getFullYear();
    }
    else if (formatRequest.format === 'milliseconds') {
      return date.getTime();
    }
  }

  function getDayName() {
    return weekday[ date.getDay() ];
  }

  function getMonthName() {
    return month[ date.getMonth() ];
  }

  function isFuture() {
    if (date > Date.now()){
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
    isFuture: isFuture
  };
})();
timeMachine();
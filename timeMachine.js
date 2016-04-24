'use strict';
var timeMachine = ( function iife() {

  var month = new Array( 12 ) ;
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

  var weekday = new Array( 7 );
  weekday [0] = 'Sunday';
  weekday [1] = 'Monday';
  weekday [2] = 'Tuesday';
  weekday [3] = 'Wednesday';
  weekday [4] = 'Thursday';
  weekday [5] = 'Friday';
  weekday [6] = 'Saturday';

  var internalDate = null;

  function dateInstantiate() {
    if ( internalDate === null ) {
      internalDate = new Date();

      return internalDate;
    }
  }

  function setDate( dateInput ) {
    dateInstantiate();

    if ( dateInput instanceof Date ) {
      internalDate = dateInput;

      return internalDate;
    }
    else if ( dateInput === undefined ) {
      internalDate = new Date();

      return internalDate;
    }
    else{
      internalDate = new Date( dateInput );

      return internalDate;
    }
  }

  function getDate( formatRequest ){
    dateInstantiate();

    if ( formatRequest === undefined) {
      return ( internalDate.getTime() );
    }
    else if ( formatRequest.format === 'formatted' ) {
      return month [ internalDate.getMonth() ] + ' ' + internalDate.getDate() +
       ', ' + internalDate.getFullYear();
    }
    else if ( formatRequest.format === 'milliseconds') {
      return internalDate.getTime();
    }
  }

  function getDayName() {
    dateInstantiate();

    return weekday[ internalDate.getDay() ];
  }

  function getMonthName() {
    dateInstantiate();

    return month[ internalDate.getMonth() ];
  }

  function isFuture() {
    dateInstantiate();

    if ( internalDate > Date.now() ) {
      return true;
    } else {
      return false;
    }
  }

  function isToday() {
    dateInstantiate();
    var rightNow = Date.now();
    var establishedInternalDate = getDate();
    if ( establishedInternalDate === rightNow ) {
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
'use strict';
var myDate = (function iffe() {
  /* eslint-disable no-console */
  /* eslint-disable no-unused-vars */
  var privateDate = new Date(); // make this available to both get and set
  var dd = privateDate.getDate();
  var mm = privateDate.getMonth() + 1; //January is 0!
  var yyyy = privateDate.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  var checkDate = mm + dd + yyyy;
  var formatDate = mm + '/' + dd + '/' + yyyy;

  function setDate(newDate) {  // make a function for milli

    if (newDate == undefined) {
      var defaultDate = privateDate;
      console.log(defaultDate);
      // Done - myDate.setDate() if no argument given
    }

    else {  // only using newMilli in use
      var milliDate = new Date();
      milliDate.setDate(newDate);
      console.log(milliDate);
    }

  }

  function getDate(dateAsk) {
    if (dateAsk == undefined) {
      console.log('No Args');
      var n = privateDate.getTime();
      console.log(n);
    }
    else if (dateAsk == 'milliseconds') {
      console.log('milliseconds');
      var m = privateDate.getTime();
      console.log(m);
    }
    else if (dateAsk == 'formatted') {
      console.log('formatted');
      console.log(formatDate);
    }

  }

  function getDayName(dateAsk) {
    var formatDay = privateDate.getDay();
    var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    console.log(weekday[formatDay]);
  }

  function getMonthName(dateAsk) {
    var formatMonth = privateDate.getMonth();
    var monthNames = new Array(12);
    monthNames[0] = 'January';
    monthNames[1] = 'February';
    monthNames[2] = 'March';
    monthNames[3] = 'April';
    monthNames[4] = 'May';
    monthNames[5] = 'June';
    monthNames[6] = 'July';
    monthNames[7] = 'August';
    monthNames[8] = 'September';
    monthNames[9] = 'October';
    monthNames[10] = 'November';
    monthNames[11] = 'December';

    console.log(monthNames[formatMonth]);
  }

  function isFuture(dateAsk) {

    if (dateAsk <= checkDate) {
      console.log('given date is not in the future');
    }
    else {
      console.log('date is in the future');
    }

  }

  function isToday(dateAsk) {

    if (dateAsk == checkDate) {
      console.log('given date is today');
    }
    else {
      console.log('given date is not today' + checkDate);
    }

  }

  return {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday,
  };
})();


myDate.setDate(); //setDate to now
myDate.setDate(8940000);
myDate.todayCheck('04202016');  // given date is today
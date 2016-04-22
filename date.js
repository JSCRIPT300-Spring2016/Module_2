'use strict';
var MyDate = ( function(a) {
  var currentDate;

  function MyDate(d) {
    if(arguments.length === 0){
      setDate();
    } else {
      setDate(d);
    }

    this.setDate = setDate;
    this.getDate = getDate;
    this.getDayName = getDayName;
    this.getMonthName = getMonthName;
    this.isFuture = isFuture;
    this.isToday = isToday;
    this.getYear = getYear;
  }

  function setDate(a) {

    if (a instanceof Date){
      currentDate = new Date(a);
    } else if (isNaN(a) === false){
      currentDate = new Date(a);
    } else if (arguments.length === 0){
      currentDate = new Date();
    }
  }

  function getDate(f) {
    if (arguments.length === 0){
      return currentDate.getTime();
    }

    var format = f.format;

    if (format === 'milliseconds') {
      return currentDate.getTime();

    } else if (format === 'formatted') {
      return this.getMonthName() + ' ' + currentDate.getDate() + ', ' +
      this.getYear();
    }
  }

  function getDayName() {
    return currentDate.toLocaleDateString('en-US', {weekday: 'long'});
  }

  function getMonthName() {
    return currentDate.toLocaleDateString('en-US', {month: 'long'});
  }

  function isFuture() {
    return currentDate > new Date();
  }

  function getYear() {
    return currentDate.getFullYear();
  }

  function isToday() {
    var candidate = new Date();

    return (candidate.getYear() === currentDate.getYear() &&
      (candidate.getMonth() === currentDate.getMonth()) &&
        (candidate.getDay() === currentDate.getDay()));
  }

  return MyDate;

})();

var myObj = new MyDate();
// Testcases:
// console.log('Date: '+ myObj.getDate());
// console.log('Date: '+ myObj.getDate({ format: 'milliseconds' }));
// console.log('Date: '+ myObj.getDate({ format: 'formatted' }));
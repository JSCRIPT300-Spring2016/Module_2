/*
** author: fulin shen
** description: create a date utility using revealing pattern
*/
'use strict';

var dateUtility = (function() {
  var _privateDate;

  function _initDate() {
    _privateDate = new Date();
  }

  function setDate(newDate) {
    if(newDate != null) {
      _privateDate = new Date(newDate);
    } else {
      _privateDate = new Date();
    }
  }

  function getDayName() {
    var locale = 'en-us';
    if(!_privateDate) {
      _initDate();
    }

    return _privateDate.toLocaleDateString(locale, { weekday: 'long' });
  }

  function getMonthName() {
    var locale = 'en-us';
    if(!_privateDate) {
      _initDate();
    }

    return _privateDate.toLocaleString(locale, { month: 'long' });
  }

  //getDate() and getDate('milliseconds') return milliseconds
  //getDate('formatted') return date in the form of 'Month Day, Year'
  function getDate(formatObj) {
    if(!_privateDate) {
      _initDate();
    }

    if((formatObj === undefined) ||
       (formatObj.format.toLowerCase() === 'milliseconds')) {
      return _privateDate.getTime();
    } else if (formatObj.format.toLowerCase() === 'formatted') {
      return getMonthName() + ' ' + _privateDate.getDate()
        + ', ' + _privateDate.getFullYear();
    } else {
      throw new Error('Invalid input date format');
    }
  }

  function isFuture() {
    if(!_privateDate) {
      _initDate();
    }

    var today = new Date();
    if(_privateDate > today) {
      return true;
    } else {
      return false;
    }
  }

  function isToday() {
    if(!_privateDate) {
      _initDate();
    }

    var today = new Date();
    if((today.getDate() == _privateDate.getDate()) &&
      (today.getMonth() == _privateDate.getMonth()) &&
      (today.getYear() == _privateDate.getYear())) {
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

//testing
dateUtility.setDate(12345555555567);
//var month = dateUtility.getMonthName();
//console.log(dateUtility.getDayName());
//console.log(dateUtility.getMonthName());
//console.log(dateUtility.getDate());
//console.log(dateUtility.getDate({format: 'Milliseconds'}));
//console.log(dateUtility.getDate({ format:'formatted' }));
//console.log(dateUtility.getDate('invalidFormat'));
//console.log(dateUtility.isFuture());
//console.log(dateUtility.isToday());

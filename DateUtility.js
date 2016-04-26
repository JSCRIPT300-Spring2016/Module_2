/*************************************************************************
* Name       : Huan Doan
* Course     : JavaScript 300
* Description: Revealing Module Pattern module that provides
*              select Date functions.
*
* Anytime a method is called that needs to access your internally stored
* date, you'll want to make sure you've instantiated it first. Your
* module should not start out with this date being set to anything yet.
* If it hasn't yet been instantiated, instantiate it then (this is a good
* place to use a "private" method.) If it has already been instantiated,
* don't re-instantiate it (with the exception of setDate which should
* instantiate your date again based on how it's called).
*
* In your module file, assign the return value of your module to a global
* variable.
*************************************************************************/
var customDate = (function wrapperIIFE() {

  // private variable - the internally stored date
  var datePrivate;

  function assignDate(value) {
    if (!datePrivate) {
      datePrivate = new Date();
    }
    datePrivate.setTime(value);
  }

  function getFormattedDate() {
    var formattedDate = '';
		
    if (!datePrivate) {
      datePrivate = new Date();
    }

    formattedDate = getMonthNamePublic() + ' ' +
      datePrivate.getDate() + ', ' + datePrivate.getFullYear();

    return formattedDate;
  }

  function getDateMsec() {
    if (!datePrivate) {
      datePrivate = new Date();
    }
	
    return datePrivate.getTime();
  }

  function isObjectFormat(value) {
    return ((value !== null) &&
            (typeof value === 'object'));
  }

  /***************************************************************************
  * Allows the internally stored date to be returned to the user in one of
  * two formats: as milliseconds after "epoch" or as a date string in
  * the following format: "[Month] [date], [year]". This method should take
  * an options parameter that specifies a format property, with a value of
  * "milliseconds" or "formatted". If the options argument is ommited,
  * default to milliseconds.
  ***************************************************************************/
  function getDatePublic(formatOfDate) {
    if ((arguments.length === 1) &&
        (isObjectFormat(formatOfDate)) &&
        (formatOfDate['format'] === 'formatted')) {
      return getFormattedDate();
    } else {
      return getDateMsec();
    }
  }

  /***************************************************************************
  * Returns the name of the day to be returned for the internally stored
  * date - e.g. "Tuesday", or "Wednesday". This method takes no parameters.
  ***************************************************************************/
  function getDayNamePublic() {
    var dayName = '';

    if (!datePrivate) {
      datePrivate = new Date();
    }
	
    switch(datePrivate.getDay()) {
    case 0:
      dayName= 'Sunday';
      break;
    case 1:
      dayName= 'Monday';
      break;
    case 2:
      dayName= 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName ='Thursday';
      break;
    case 5:
      dayName= 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = '';
      break;
    }
	
    return dayName;
  }

  /***************************************************************************
  * Returns the name of the month to be returned for the internally stored
  * date - e.g. "April", or "September". This method takes no parameters.
  ***************************************************************************/
  function getMonthNamePublic() {
    var monthName = '';

    if (!datePrivate) {
      datePrivate = new Date();
    }
	
    switch (datePrivate.getMonth()) {
    case 0:
      monthName = 'January';
      break;
    case 1:
      monthName = 'February';
      break;
    case 2:
      monthName = 'March';
      break;
    case 3:
      monthName = 'April';
      break;
    case 4:
      monthName = 'May';
      break;
    case 5:
      monthName = 'June';
      break;
    case 6:
      monthName = 'July';
      break;
    case 7:
      monthName = 'August';
      break;
    case 8:
      monthName = 'September';
      break;
    case 9:
      monthName = 'October';
      break;
    case 10:
      monthName = 'November';
      break;
    case 11:
      monthName = 'December';
      break;
    default:
      monthName = '';
      break;
    }
	
    return monthName;
  }

  /***************************************************************************
  * Allows the internally stored date (i.e. "private") to be changed to
  * what the user passes in. This method should be able to take either a date
  * instance, a millisecond value, or nothing. If a date instance is passed
  * in, set the interally stored date to a new instance based on this
  * passed-in date. Do not store a reference to what is passed in.
  * If nothing is passed in, set the internally stored date to "now".
  ***************************************************************************/
  function setDatePublic(aDate) {
    if (arguments.length === 1) {
      if (aDate instanceof Date) {
        assignDate(aDate.getTime());
      } else {
        var tempDate = Number(aDate);
		
        if ((!Number.isNaN(tempDate)) && (tempDate > 0)) {
          assignDate(tempDate);
        } else {
          assignDate(Date.now());
        }
      }
    } else {
      assignDate(Date.now());
    }
  }

  /***************************************************************************
  * Returns a boolean true or false, based on whether the internally stored
  * date is in the "future" based on when this method is called.  This
  * method takes no parameter.
  ***************************************************************************/
  function isFuturePublic() {
    if ((datePrivate) && (datePrivate.getTime() > Date.now())) {
      return true;
    } else {
      return false;
    }
  }

  /***************************************************************************
  * Returns a boolean true or false, based on whether the internally stored
  * date is "today" based on when this method is called. Note that this
  * means the internally stored date can be in the future or the past
  * relative to when this method is called.
  ***************************************************************************/
  function isTodayPublic() {
    var today = new Date();

    if ((datePrivate) &&
        (datePrivate.getMonth() === today.getMonth()) &&
        (datePrivate.getDate() === today.getDate()) &&
        (datePrivate.getDay() === today.getDay()) &&
        (datePrivate.getFullYear() === today.getFullYear())) {
      return true;
    } else {
      return false;
    }
  }

  // Return an object with the public methods
  return {
    getDate: getDatePublic
    , getDayName: getDayNamePublic
    , getMonthName: getMonthNamePublic
    , isFuture: isFuturePublic
    , isToday: isTodayPublic
    , setDate: setDatePublic
  };
})();
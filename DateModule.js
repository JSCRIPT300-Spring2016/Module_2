//coder: Katja Borchert

//A Date Utility Module in the "Revealing Pattern Module" format
/* eslint-disable no-unused-vars */
var myObj = (function iife() {
/* eslint-enable no-unused-vars */

  //private variables:
  var date = null;
  var months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];
  
  //private function: date instantiation
  function _initDate(){
    date = new Date();
  }
    
  //public API:
  
  //setDate(): sets the internal date based on user input
  //takes in: empty argument list, date object, or number)
  function setDate(enteredDate) {
  
    //check that date is set: if not, initialize date to now
    if (date === null) {
      _initDate();
    }
	
	/*checks the type of the parameter enteredDate:
	check if the enteredDate is of type number
	(excluding variables of value 'NaN')*/
    if (typeof enteredDate === 'number' && !isNaN(enteredDate)){
      date.setTime(enteredDate);
    } else if (enteredDate instanceof Date){
      date.setTime(enteredDate.getTime());
    } else if (arguments.length === 0){
      date.setTime(Date.now());
	//in any other case alert user
    } else {
      alert('argument was of the wrong type');
    }
  }
  
  /*getDate(): returns the internally stored date; default is milliseconds
  takes in: empty argument list, object with
  property format set to "milliseconds" or "formatted")*/
  function getDate(objFormat){
  
    //check that date is set: if not, initialize date to now
    if (date === null){
      _initDate();
    }
	
	/*check if argument list is empty;
	if so declare objFormat as an object with property format = "milliseconds"*/
    if (arguments.length === 0){
      objFormat = {};
      objFormat.format= 'milliseconds';
    }
	
	/*ensure that arguments are of the correct format: milliseconds or formatted
	(if 'format' is unknown: make an alert)*/
    if (objFormat.format ==='milliseconds'){
      return date.getTime();
    } else if (objFormat.format ==='formatted'){
      return months[date.getMonth()] + ' ' + date.getDate() +
      ', ' + date.getFullYear();
    } else {
      alert('unknown format handed in');
    }
  }
  
  /*getDayName(): returns the day of the week of the internally stored date
  (does not take in any arguments and/or ignores arguments that are handed in)*/
  function getDayName(){
  
    //check that date is set: if not, initialize date to now
    if (date === null) {
      _initDate();
    }
	
    return days[date.getDay()];
  }
  
  /*getMonthName(): returns the month of the internally stored date
  (does not take in any arguments and/or ignoresrguments that are handed in)*/
  function getMonthName(){
	
    //check that date is set: if not, initialize date to now
    if (date === null) {
      _initDate();
    }
	
    return months[date.getMonth()];
  }
  
  /*function checks if internally stored date is in the future
  ('future' is operationalized as:
  any ms more than is established by Date.now())*/
  function isFuture(){
  
    //check that date is set: if not, initialize date to now
    if (date=== null) {
      _initDate();
    }
	
	/*check if internally stored time (in ms) > time (in ms) right now.
	If yes, the internally set date is in the future.*/
    if (date.getTime() > Date.now()){
      return true;
    } else {
      return false;
    }
  }
  
  /*function checks if internally stored date is from today
  'today' is operationalized:
  If the current local date formatted as a "month/day/year"-string
  can be formatted as the same string as the one from today,
  then function returns true.*/
  function isToday(){
  
    //check that date is set: if not, initialize date to now and return true
    if (date === null) {
      _initDate();

      return true;
    } else {
      var compDate = new Date();
      var localeDate = compDate.toLocaleDateString();
      var tempDate = date.toLocaleDateString();
      if (tempDate === localeDate) {
        return true;
      } else {
        return false;
      }
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
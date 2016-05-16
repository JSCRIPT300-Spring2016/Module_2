/* Globals
dateObj
*/

(function() {

	var _myDate = null;

	function setDate(userDate) {
		if (!userDate) {
			_myDate = new Date();
		} else if (userDate) {
			var numAsString = userDate.toString();

			// check if userDate is a number, check length of date string
			if ((isNaN(userDate) === false) && numAsString.length === 13) {
				_myDate = new Date(userDate);
			} else {
				return ("userDate is not valid");
			}
		}

		return (_myDate);
	}

	function getDate(param) {
		if (_myDate === null) {
			setDate();
		} else if (param && param.format && (param.format === "formatted")) {
			var formattedDate = "";
			formattedDate += getMonthName() + " ";
			formattedDate += _myDate.getDate() + ", ";
			formattedDate += _myDate.getFullYear();

			return (formattedDate);
		} else {
		// if (param && param.format && (param.format === "milliseconds")) {
			return (_myDate.getTime());
		}
	}

	function getDayName() {
		var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
			"Friday", "Saturday"];
		var dayIndex = _myDate.getDay();

		return dayArray[dayIndex];
	}

	function getMonthName() {
		var monthArray = ["January", "February", "March", "April", "May",
			"June", "July", "August", "September", "October", "November",
			"December"];
		var monthIndex = _myDate.getMonth();

		return monthArray[monthIndex];
	}

	function isFuture() {
		if (_myDate > Date.now()) {
			return true;
		} else {
			return false;

		}
	}

	function isToday() {
		var today = new Date();
		if (_myDate === null) {
			// console.log("date empty, setting date...");
			setDate();
			isToday();
		} else {
			if (_myDate.getDay() === today.getDay() &&
				_myDate.getMonth() === today.getMonth() &&
				_myDate.getFullYear() === today.getFullYear()) {
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
		isToday: isToday,
		myDate: _myDate
	};

})();

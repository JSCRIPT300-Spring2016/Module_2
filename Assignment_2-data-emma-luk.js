// Emma Luk
// Assignments 2 Using the revealing module pattern, build a Date utility module
var dateObj = (function () {
    var _date = null;

    var DAYS = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Saturday'
    ];

    var MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    //private function: date instantiation
    function _initialiseDate() {
        _date = new Date();
    }
    //check here that date is set: if not, initialize date to now
    function setDate(date) {
        if (typeof date === 'number' || date instanceof Date) {
            _date = new Date(date);
        } else if (typeof date === 'undefined') {
            _initialiseDate();
        } else {
            console.log("sorry!! wrong type");
        }
    }

    function getDate(formatObj) {
        var month;
        var date;
        var year;

        if (_date === null) {
            _initialiseDate();
        }
        if (typeof formatObj === 'undefined' ||
            formatObj && formatObj.format === 'milliseconds') {
            return _date.getTime();
        } else if (formatObj && formatObj.format === 'formatted') {
            month = getMonthName();
            date = _date.getDate();
            year = _date.getFullYear();
            return month + ' ' + date + ', ' + year;
        } else {
            console.log('sorry!! unknown format');
        }
    }

    function getDayName() {
        var dayIndex;
        if (_date === null) {
            _initialiseDate();
        }
        dayIndex = _date.getDay();

        return DAYS[dayIndex];
    }

    function getMonthName() {
        var monthIndex;
        if (_date === null) {
            _initialiseDate();
        }
        monthIndex = _date.getMonth();

        return MONTHS[monthIndex];
    }

    // checks if internally stored date is from today
    //If the current local date formatted as a "month/day/year"
    function isToday() {
        var date;
        var month;
        var year;
        var now;

        if (_date === null) {
            _initialiseDate();
        }
        date = _date.getDate();
        month = _date.getMonth();
        year = _date.getYear();

        return date === now.getDate() &&
            month === now.getMonth() &&
            year === now.getYear();
    }

    //check if internally stored time (in ms) > time (in ms) right now.
    //If yes, the internally set date is in the future.
    function isFuture() {
        var now;
        if (_date === null) {
            _initialiseDate();
        }

        return _date.getTime() > now.getTime();
    }

    return {
        setDate: setDate,
        getDate: getDate,
        getDayName: getDayName,
        getMonthName: getMonthName,
        isToday: isToday,
        isFuture: isFuture
    };
})();

//testing
//> dateObj.getDate()
//1462746222319
//> dateObj.getDate({ format: 'formatted'});
//'May 8, 2016'
//> dateObj.getDate()
//1462746222319
//> dateObj.setDate()
//undefined
//> dateObj.getDate()
//1462746502111
//> dateObj.setDate(new Date ());
//undefined
//> dateObj.getDate()
//1462746661220
//> dateObj.setDate('abcd')
//undefined
//> dateObj.getDate()
//1462746661220
//> dateObj.getDate({ format: 'formatted'});
//'May 8, 2016'
//> dateObj.setDate(new Date ());
//undefined
//> dateObj.getDate({ format: 'formatted'});
//'May 8, 2016'
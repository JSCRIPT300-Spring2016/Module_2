var dateCreation = (function iife() {
    var currentModuleDate = null;
    function instantiateDate() {
        return new Date();
    }

    function setDate(date) {
        if (date===undefined) {
            currentModuleDate = instantiateDate();
        }
        else if (typeof date === 'number') {
            currentModuleDate = new Date(date);
        }
        else if (typeof date === 'object') {
            currentModuleDate = date;
        }
    }

    function getDate(requestedFormat) {
        if (currentModuleDate === null) {
            currentModuleDate = instantiateDate();
        }
        if (requestedFormat.format === "formatted") {
            return currentModuleDate.getMonth() + " " + currentModuleDate.getDate() + ", " + currentModuleDate.getFullYear();
        }
        else if (requestedFormat.format === "milliseconds" || requestedFormat === undefined) {
            return currentModuleDate.getDate();
        }
    }

    function getDayName() {
        var day = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (currentModuleDate === null) {
            return day[instantiateDate().getDay()];
        }

        return day[currentModuleDate.getDay()];
    }

    function getMonthName() {
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if (currentModuleDate === null) {
            return month[instantiateDate().getMonth()];
        }
        return month[currentModuleDate.getMonth()];
    }

    function isFuture() {
        if (currentModuleDate === null) {
            currentModuleDate = instantiateDate();
        }
        if(currentModuleDate.getTime() > Date.now()) {
            return true;
        }
        else {
            return false;
        }
    }

    function isToday() {
        if (currentModuleDate === null) {
            currentModuleDate = instantiateDate();
        }
        var currentTime = new Date();
        if( currentModuleDate.getFullYear() === currentTime.getFullYear() && currentModuleDate.getDay() === currentTime.getDay()) {
            return true;
        }
        else {
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

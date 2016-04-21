var myObj = (function iife(){

		//sets the day of the month to the date object
		function setDate(){
			var sd = new Date();
			return sd.setDate(15);
		}

		//returns the day of the month (from 1 to 31) for the specified date.
		function getDate(){
			var d = new Date();
			return d.getDate({ format: "formatted" });
            
		}

		//method returns the day of the week (from 0 to 6) for the specified date.
		function getDayName(){
			var d = new Date();
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";
			var gda = d.getDay();
			return weekday[gda]; 
		}

		//returns the month (from 0 to 11) for the specified date, according to local time.
		function getMonthName(){
			var d = new Date();
			var month = new Array(12);
			month[0]=  "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
			var gm = d.getMonth();
			return month[gm];
		}

		//function isFuture(){
        //  
		//};
        //
		//function isToday(){
        //  
		//};
		return {
			setDate: setDate,
			getDate: getDate,
			getDayName: getDayName,
			getMonthName: getMonthName,
			//isFuture: isFuture,
			//isToday: isToday,
		};
		
	})();

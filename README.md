# Module_2

Week 2:

  1. Fork this repository.
  2. Using the revealing module pattern, build a Date utility module that includes the following API:  
     a. **setDate** - allows the internally stored date (i.e. "private") to be changed to what the user passes in. This method should be able to take either a date instance, a millisecond value, or nothing. If a date instance is passed in, set the interally stored date to a new instance based on this passed-in date - **do not** store a reference to what is passed in. If nothing is passed in, set the internally stored date to "now". Sample usage:  

    `myDate.setDate();`  
    `myDate.setDate(1460413682198);`  
    `myDate.setDate(new Date());`
    
     b. **getDate** - allows the internally stored date to be returned to the user in one of two formats: as milliseconds after "epoch" or as a date string in the following format: "[Month] [date], [year]". This method should take an options parameter that specifies a format property, with a value of "milliseconds" or "formatted". If the options argument is ommited, default to milliseconds. Sample usage:  

    `myDate.getDate({ format: "milliseconds" });`  
    `myDate.getDate({ format: "formatted" });`  
    `myDate.getDate();`  
    
     c. **getDayName** - returns the name of the day to be returned for the internally stored date - e.g. "Tuesday", or "Wednesday". This method takes no parameters. Sample usage:  
     
     `console.log(myDate.getDayName()); // "Monday"`
     
     d. **getMonthName** - returns the name of the month to be returned for the internally stored date - e.g. "April", or "September". This method takes no parameter. Sample usage:  
     
     `console.log(myDate.getMonthName()); // "April"`
     
     e. **isFuture** - returns a boolean true or false, based on whether the internally stored date is in the "future" based on when this method is called. This method takes no parameter. Sample usage:  
     
     `console.log(myDate.isFuture()); // false`
     
     f. **isToday** - returns a boolean true or false, based on whether the internally stored date is "today" based on when this method is called. Note that this means the internally stored date can be in the future or the past relative to when this method is called. Think carefully about how you determine if something is "today". Sample usage:  
     
     `console.log(myDate.isToday()); // true`
     
  3. You will need to use the Date constructor as well as several of its methods to implement this module.
  4. Anytime a method is called that needs to access your internally stored date, you'll want to make sure you've instantiated it first. Your module should not start out with this date being set to anything yet. If it hasn't yet been instantiated, instantiate it then (this is a good place to use a "private" method.) If it has already been instantiated, don't re-instantiate it (with the exception of setDate which should instantiate your date again based on how it's called (see sample usage above.)
  
  5. In your module file, assign the return value of your module to a global variable (e.g. `myObj`). 
  
  6. Make sure your module is free of lint by using the .eslintrc file you created in Module_1. 
  
  7. Include both your module file and your .eslintrc file in your pull request.

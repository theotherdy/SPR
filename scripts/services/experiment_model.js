	/* Experiment Mathematical Model: contain functions to ouput values for state of experiment */

/* 1. registering modules, services and constants */
var app = angular.module('experiment_model', [])
	// creating concept for time of day to alter output standard deviation
	.constant('start_of_day', 9.0)
	.constant('start_of_lunch', 12.0)
	.constant('start_of_dinner', 17.0)
	.constant('start_of_night', 21.0)
	.constant('end_of_day', 24.0)
	.constant('time_per_run', 0.5)
	.service('experimentModel', [experimentMethod]);

function experimentMethod(start_of_day, start_of_lunch, start_of_dinner, start_of_night, end_of_day, time_per_run) { 
	this.day = start_of_day;
	this.lunch = start_of_lunch;
	this.dinner = start_of_dinner;
	this.night = start_of_night;
	this.end = end_of_day;
	this.run = time_per_run;

/* 2. creating sub-methods as part of the function object that can be called */
	


}


/*

Experiment values
- start_of_day // constant
- start_of_lunch // constant
- start_of_dinner // constant
- start_of_night // constant
- end_of_day // constant
- time_per_action // constant
- steps_taken // constant

*/
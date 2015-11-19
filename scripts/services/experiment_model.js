	/* Experiment Mathematical Model */

/* 1. registering experiment model */
var app = angular.module('experiment_model', [])

/* 2. registering constants */
var start_of_day = 9.0;
var start_of_lunch = 12.0;
var start_of_dinner = 17.0;
var start_of_night = 21.0;
var end_of_day = 24.0;
var time_per_action = 0.5;

/*

3. registering object constructors function and injecting constants parameter
	.service('experimentConstructor', [experiment, 'start_of_day', 'start_of_lunch', 'start_of_dinner', 'start_of_night', 'end_of_day', 'time_per_action'])	// build all parameter associated to status and control panel
		
4. calling out 'pair' object constructor function
function experiment() {

}


Experiment
a) values
- start_of_day // constant
- start_of_lunch // constant
- start_of_dinner // constant
- start_of_night // constant
- end_of_day // constant
- time_per_action // constant
- steps_taken // constant

*/
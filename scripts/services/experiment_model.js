	/* Experiment Object Constructor */

/* 1. registering experiment model */
var app = angular.module('experiment_model', [])

/* 2. registering constants */	
	.constant('volume', '1.0')
	.constant('start_of_day', '9.0')
	.constant('start_of_lunch', '12.0')
	.constant('start_of_dinner', '17.0')
	.constant('start_of_night', '21.0')
	.constant('end_of_day', '24.0')
	.constant('time_per_action', '0.5')

/* 3. registering object constructors function and injecting constants parameter */
	.service('experimentConstructor', [experiment, 'start_of_day', 'start_of_lunch', 'start_of_dinner', 'start_of_night', 'end_of_day', 'time_per_action']);	// build all parameter associated to status and control panel
		
/* 4. calling out 'pair' object constructor function */
function experiment() {

}
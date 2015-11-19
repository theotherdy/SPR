	/* Experiment Mathematical Model */

/* 1. registering experiment model */
var app = angular.module('experiment_model', []);

app.controller('experimentModel', function(){

/* 2. defining constants */
	this.start_of_day = 9.0;
	this.start_of_lunch = 12.0;
	this.start_of_dinner = 17.0;
	this.start_of_night = 21.0;
	this.end_of_day = 24.0;
	this.time_per_action = 0.5;

/* 3. output model controller */


});

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
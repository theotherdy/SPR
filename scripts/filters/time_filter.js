	/* Converting values for time of day to digital time display */

/* 1. registering modules, services and constants */
var app = angular.module('time_filter', [])
	.filter('timeFilter', timeOfDay);

/* 2. creating sub-methods as part of the function object that can be called */

function timeOfDay() {
	
}
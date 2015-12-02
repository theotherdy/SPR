	/* Experimental Status: contain functions to ouput values for state of experiment */

/* 1. registering modules, services and constants */
angular.module('experiment_status', [])
	.service('experimentStatus', [experimentTrack]);

function experimentTrack() { 
	var experiment = this;
/* creating concept for time of day to alter output standard deviation */
	experiment.timePerRun = 0.5;
	experiment.startOfDay = 9.0; // 5 runs available
	experiment.startOfLunch = 12.0; // 9 runs available
	// total runs with good SD per day = 14
	experiment.startOfDinner = 17.0; // 7 runs available
	experiment.startOfNight = 21.0; // 5 runs available
	// total runs with good SD per day = 12
	experiment.endOfDay = 24.0;
	// total runs per day = 26
/* creating tracked variables */
	experiment.steps = 0;
	experiment.timeOfDay = experiment.startOfDay;
	experiment.daysAllowed = 2; 
	experiment.daysLeft = 2;
	// total runs with good SD per simulation = 28
	// total runs per simulation = 52
	
/* 2. creating sub-methods as part of the function object that can be called */

/* a) track steps taken */
	experiment.stepsCounter = function() {
		experiment.steps++;
	};

/* b) track time of day */
	experiment.timeOfDayCounter = function() {
		experiment.timeOfDay = experiment.timeOfDay + experiment.timePerRun;
	};
/* c) track day of experiment counter */
	experiment.dayOfExperimentCounter = function() {
		experiment.daysLeft--;
	};
}
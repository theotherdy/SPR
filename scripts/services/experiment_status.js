	/* Experimental Status: contain functions to ouput values for state of experiment */

/* 1. registering modules, services and constants */
angular.module('experiment_status', [])
	.service('experimentStatus', [experimentTrack]);

function experimentTrack() { 
/* creating concept for time of day to alter output standard deviation */
	this.timePerRun = 0.5;
	this.startOfDay = 9.0; // 5 runs available
	this.startOfLunch = 12.0; // 9 runs available
	// total runs with good SD per day = 14
	this.startOfDinner = 17.0; // 7 runs available
	this.startOfNight = 21.0; // 5 runs available
	// total runs with good SD per day = 12
	this.endOfDay = 24.0;
	// total runs per day = 26
/* creating tracked variables */
	this.steps = 0;
	this.timeOfDay = this.startOfDay;
	this.daysAllowed = 2; 
	this.daysLeft = 2;
	// total runs with good SD per simulation = 28
	// total runs per simulation = 52
	
/* 2. creating sub-methods as part of the function object that can be called */

/* a) track steps taken */
	this.stepsCounter = function() {
		this.steps++;
	};

/* b) track time of day */
	this.timeOfDayCounter = function() {
		this.timeOfDay = this.timeOfDay + this.timePerRun;
	};
/* c) track day of experiment counter */
	this.dayOfExperimentCounter = function() {
		this.daysLeft--;
	};
}
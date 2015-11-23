	/* Experimental Status: contain functions to ouput values for state of experiment */

/* 1. registering modules, services and constants */
var app = angular.module('experiment_status', [])
	.service('experimentStatus', [experimentTrack]);

function experimentTrack() { 
/* creating concept for time of day to alter output standard deviation */
	this.startOfDay = 9.0;
	this.startOfLunch = 12.0;
	this.startOfDinner = 17.0;
	this.startOfNight = 21.0;
	this.endOfDay = 24.0;
	this.timePerRun = 0.5;
/* creating tracked variables */
	this.steps = 0;
	this.timeOfDay = this.startOfDay;

/* 2. creating sub-methods as part of the function object that can be called */

/* a) track steps taken */
	this.stepsCounter = function() {
		this.steps++;
	};

/* b) track time of day */
	this.timeOfDayCounter = function() {
		if (this.timeOfDay == this.endOfDay) {
			this.timeOfDay = this.startOfDay;
		} else {
			this.timeOfDay = this.timeOfDay + this.timePerRun;
		}
	};
}

// setup, run, eat home
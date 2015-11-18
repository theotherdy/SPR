	/* master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', [/*'model'*/]);

	/* controllers to build mathematical model of pair */
app.controller('pairOutput', function(){
	
		/* defining all parameters */
	this.fLC = [];
	this.tRC = 2;
	this.Kd = 3;
	this.kOn = 4;
	this.kOff = 5;
	this.mwL = 6;
	this.mwR = 7;
	this.mwP = 8;

		/* set fLC: user input via form; constant */
	this.add_fLC = function(new_fLC) {
		this.fLC.push(new_fLC);
	}; 

	/* this.add_fLC(21); - test */
	// ng-repeat fail when repeated value is used; why?

		/* set tRC: random assignment out of 3 possibilities from model; constant */
	this.set_tRC = function() {
		flip_tRC = 3*Math.random();
		if (flip_tRC <= 1) {
			this.tRC = 1;
		} else if (flip_tRC > 2) {
			this.tRC = 3;
		} else {
			this.tRC = 2;
		}
	};
	this.set_tRC();
});

/*

	this.tLC = tLC; // not needed; equal to fLC
	this.fLC = fLC; // constant; user input
	this.fRC = fRC; // not needed; equal to tRC-pC
	this.pC = pC; // not needed; derived from pC-On/Off equation
	this.Kd = Kd; // constant; random assignment
	this.kOn = kOn; // constant; derived from kOff and Kd
	this.kOff = kOff; // constant; random assigment
	this.mwL = mwL; // constant; random assignment
	this.mwR = mwR; // constant; random assignment
	this.mwP = mwP; // constant derived




build filter for output

		*/
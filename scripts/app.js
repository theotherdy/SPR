	/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', [/*'model'*/]);

	/* 2. controllers to build mathematical model of pair */
app.controller('pairOutput', function(){
	
		/* a) defining all parameters */
	this.Kd = 6;
	this.kOff = 12;
	this.mwL = 6;
	this.mwR = 7;

		/* b) set fLC: user input via form; constant */
	this.fLC = [];
	this.add_fLC = function(new_fLC) {
		this.fLC.push(new_fLC);
	}; 
			// this.add_fLC(21); - test
			// ng-repeat fail when repeated value is used; why?

		/* c) set tRC: random assignment out of 3 possibilities from model; constant */
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

		/* d) set Kd: random assignment out of possibility in array; constant */



		/* e) set kOff: random assignment out of possibility in array; constant */



		/* f) set kOn: derived from Kd and kOff; constant */
	this.set_kOn = function(Kd, kOff) {
		this.kOn = kOff/Kd;
	};
	this.set_kOn(this.Kd, this.kOff);

		/* g) set mwL: random assignment out of possibility in array; constant */



		/* h) set mwR: random assignment out of possibility in array; constant */


		/* i) set mwP: derived from mwR + mwL; constant */
	this.set_mwP = function(mwL, mwR) {
		this.mwP = mwL + mwR;
	};
	this.set_mwP(this.mwL, this.mwR);
});
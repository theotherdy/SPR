/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', [/*'model'*/]);

/* 2. controllers to build mathematical model of pair */
app.controller('pairOutput', function(){
	
/* a) defining all parameters */

/* b) set fLC: user input via form; constant */
	this.fLC = []; // fLC can have 0 as possibility, to obtain background value
	this.add_fLC = function(new_fLC) {
		this.fLC.push(new_fLC);
	};		
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
	// tRC cannot have 0 as possibility

/* d) set Kd: random assignment out of possibility in array; constant */
	this.Kd_possible = [111, 222, 333, 444, 555, 666];

	this.flip_Kd = function() {
		this.Kd_chance = Math.floor(6*Math.random());
	};
	this.flip_Kd();

	this.set_Kd = function() {
		if (this.flip_Kd == 6) {
			this.flip_Kd();
		} else {
			this.Kd = this.Kd_possible[this.Kd_chance];
		}
	};
	this.set_Kd(); 
	// Kd cannot have 0 as possibility

/* e) set kOff: random assignment out of possibility in array; constant */
	this.kOff_possible = [111, 222, 333, 444, 555, 666];

	this.flip_kOff = function() {
		this.kOff_chance = Math.floor(6*Math.random());
	};
	this.flip_kOff();

	this.set_kOff = function() {
		if (this.flip_kOff == 6) {
			this.flip_kOff();
		} else {
			this.kOff = this.kOff_possible[this.kOff_chance];
		}
	};
	this.set_kOff(); 


/* f) set kOn: derived from Kd and kOff; constant */
	this.set_kOn = function(Kd, kOff) {
		this.kOn = kOff/Kd;
	};
	this.set_kOn(this.Kd, this.kOff);

/* g) set mwL: random assignment out of possibility in array; constant */
	this.mwL_possible = [111, 222, 333, 444, 555, 666];

	this.flip_mwL = function() {
		this.mwL_chance = Math.floor(6*Math.random());
	};
	this.flip_mwL();

	this.set_mwL = function() {
		if (this.flip_mwL == 6) {
			this.flip_mwL();
		} else {
			this.mwL = this.mwL_possible[this.mwL_chance];
		}
	};
	this.set_mwL(); 


/* h) set mwR: random assignment out of possibility in array; constant */
	this.mwR_possible = [111, 222, 333, 444, 555, 666];

	this.flip_mwR = function() {
		this.mwR_chance = Math.floor(6*Math.random());
	};
	this.flip_mwR();

	this.set_mwR = function() {
		if (this.flip_mwR == 6) {
			this.flip_mwR();
		} else {
			this.mwR = this.mwR_possible[this.mwR_chance];
		}
	};
	this.set_mwR(); 


/* i) set mwP: derived from mwR + mwL; constant */
	this.set_mwP = function(mwL, mwR) {
		this.mwP = mwL + mwR;
	};
	this.set_mwP(this.mwL, this.mwR);
});
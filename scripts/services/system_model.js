	/* System Mathematical Model */

/* 1. registering system model */
var app = angular.module('system_model', []);

app.service('systemModel', [systemMethod]);

/* 2. defining constants */
	// none

/* 3. creating function to inject into service */

	function systemMethod() {
		
/* a) set tRC: random assignment out of 3 possibilities from model; constant */
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

/* b) set Kd: random assignment out of possibility in array; constant */



	}
		
/*

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

*/

/* d) set kOff: random assignment out of possibility in array; constant */
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


/* e) find kOn: derived from kOff/Kd; constant */
	this.find_kOn = function(Kd, kOff) {
		this.kOn = kOff/Kd;
	};
	this.find_kOn(this.Kd, this.kOff);

/* f) set mwL: random assignment out of possibility in array; constant */
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


/* g) set mwR: random assignment out of possibility in array; constant */
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


/* h) find mwP: derived from mwR + mwL; constant */
	this.find_mwP = function(mwL, mwR) {
		this.mwP = mwL + mwR;
	};
	this.find_mwP(this.mwL, this.mwR);
	/* System Mathematical Model: contain functions to ouput values of ligand-receptor system */

/* 1. registering modules, services and constants */
var app = angular.module('system_model', [])
	.service('systemModel', [systemMethod]);

function systemMethod() { // creating master function object that encapsulate all methods to inject into service

/* 2. creating sub-methods as part of the function object that can be called */

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
	this.set_Kd = function() {
		this.Kd_possible = [0.00000001, 0.00000002, 0.00000004, 0.00000006, 0.00000008, 0.0000001];

		this.flip_Kd = function() {
			this.Kd_chance = Math.floor(6*Math.random());
		};
		this.flip_Kd();

		if (this.Kd_chance == 6) {
			this.flip_Kd();
		} else {
			this.Kd = this.Kd_possible[this.Kd_chance];
		}
	};

/* c) set kOff: random assignment out of possibility in array; constant */
	this.set_kOff = function() {
		this.kOff_possible = [0.00005, 0.00010, 0.00015, 0.00020, 0.00025, 0.00030];

		this.flip_kOff = function() {
			this.kOff_chance = Math.floor(6*Math.random());
		};
		this.flip_kOff();

		if (this.flip_kOff == 6) {
			this.flip_kOff();
		} else {
			this.kOff = this.kOff_possible[this.kOff_chance];
		}
	};

/* d) find kOn: derived from kOff/Kd; constant */
	this.find_kOn = function(Kd, kOff) {
		this.kOn = kOff/Kd;
	};

/* e) set mwL: random assignment out of possibility in array; constant */
	this.set_mwL = function() {
		this.mwL_possible = [20000, 40000, 60000, 80000, 100000, 120000];

		this.flip_mwL = function() {
			this.mwL_chance = Math.floor(6*Math.random());
		};
		this.flip_mwL();


		if (this.flip_mwL == 6) {
			this.flip_mwL();
		} else {
			this.mwL = this.mwL_possible[this.mwL_chance];
		}
	};

/* f) set mwR: random assignment out of possibility in array; constant */
	this.set_mwR = function() {
		this.mwR_possible = [20000, 40000, 60000, 80000, 100000, 120000];

		this.flip_mwR = function() {
			this.mwR_chance = Math.floor(6*Math.random());
		};
		this.flip_mwR();

		if (this.flip_mwR == 6) {
			this.flip_mwR();
		} else {
			this.mwR = this.mwR_possible[this.mwR_chance];
		}
	};

/* g) find mwP: derived from mwR + mwL; constant */
	this.find_mwP = function(mwL, mwR) {
		this.mwP = this.mwL + this.mwR;
	};

}
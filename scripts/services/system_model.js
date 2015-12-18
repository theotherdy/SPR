	/* System Mathematical Model: contain functions to ouput values of ligand-receptor system */

/* 1. registering modules, services and constants */
angular.module('system_model', [])
	.service('systemModel', [systemMethod]);

function systemMethod() { // creating master function object that encapsulate all methods to inject into service
	var system = this;
/* 2. creating sub-methods as part of the function object that can be called */

/* a) set tRC: random assignment out of 3 possibilities from model; constant */
	system.set_tRC = function() {

		flip_tRC = 3*Math.random();

		if (flip_tRC <= 1) {
			system.tRC = 0.000001;
		} else if (flip_tRC > 2) {
			system.tRC = 0.0000015;
		} else {
			system.tRC = 0.000002;
		}
	};

/* b) set Kd: random assignment out of possibility in array; constant */
	system.set_Kd = function() {
		system.Kd_possible = [0.00000005, 0.0000001, 0.0000002, 0.0000003, 0.000004, 0.0000005];
		system.flip_Kd = function() {
			system.Kd_chance = Math.floor(6*Math.random());
		};
		system.flip_Kd();

		if (system.Kd_chance == 6) {
			system.flip_Kd();
		} else {
			system.Kd = system.Kd_possible[system.Kd_chance];
		}
	};

/* c) set kOff: random assignment out of possibility in array; constant */
	system.set_kOff = function() {
		system.kOff_possible = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5];
		system.flip_kOff = function() {
			system.kOff_chance = Math.floor(6*Math.random());
		};
		system.flip_kOff();

		if (system.flip_kOff == 6) {
			system.flip_kOff();
		} else {
			system.kOff = system.kOff_possible[system.kOff_chance];
		}
	};

/* d) find kOn: derived from kOff/Kd; constant */
	system.find_kOn = function(Kd, kOff) {
		system.kOn = kOff/Kd;
	};

/* e) set mwL: random assignment out of possibility in array; constant */
	system.set_mwL = function() {
		system.mwL_possible = [30000, 40000, 45000, 50000, 60000];

		system.flip_mwL = function() {
			system.mwL_chance = Math.floor(5*Math.random());
		};
		system.flip_mwL();


		if (system.flip_mwL == 5) {
			system.flip_mwL();
		} else {
			system.mwL = system.mwL_possible[system.mwL_chance];
		}
	};

/* f) set mwR: random assignment out of possibility in array; constant */
	system.set_mwR = function() {
		system.mwR_possible = [60000, 80000, 100000, 120000, 140000];

		system.flip_mwR = function() {
			system.mwR_chance = Math.floor(5*Math.random());
		};
		system.flip_mwR();

		if (system.flip_mwR == 5) {
			system.flip_mwR();
		} else {
			system.mwR = system.mwR_possible[system.mwR_chance];
		}
	};

/* g) find mwP: derived from mwR + mwL; constant */
	system.find_mwLR = function(mwL, mwR) {
		system.mwLR = system.mwL + system.mwR;
	};

/* h) find the RU increase when R is totally saturated by L; constant */
	system.find_RU_Max = function(sys_tRC, sys_mwR, con_vol, con_RPUM, sys_mwL, sys_mwLR) {
		system.RU0 = sys_tRC*sys_mwR*con_vol*con_RPUM;
		system.RU_MaxL = sys_tRC*sys_mwL*con_vol*con_RPUM;
		system.RU_MaxLR = sys_tRC*sys_mwLR*con_vol*con_RPUM;
	};

/* i) load new set of receptor-ligand pair */
	system.loadNewPair = function(con_vol, con_RPUM) {
		system.set_tRC();
		system.set_Kd();
		system.set_kOff();
		system.find_kOn(system.Kd, system.kOff);
		system.set_mwL();
		system.set_mwR();
		system.find_mwLR(system.mwL, system.mwR);
		system.find_RU_Max(system.tRC, system.mwR, con_vol, con_RPUM, system.mwL, system.mwLR);
	};
}
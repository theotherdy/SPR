	/* Output Mathematical Model: contain functions to input user-generated parameters and ouput values for graphical display */

/* 1. registering modules, services and constants */
var app = angular.module('output_model', ['system_model', 'experiment_status'])
	.service('outputModel', ['systemModel', 'experimentStatus', outputMethod]);

function outputMethod(systemModel, experimentStatus) { 

/* 2. creating sub-methods as part of the function object that can be called */

/* a) defining arrays to store data locally */
	this.fLC = []; // fLC  must be <= 0, to obtain background value
	this.timeOn = []; // timeOn must be < 0
	this.timeOff = []; // timeOff must be < 0

/* b) set fLC: user input via form; variable */
	this.add_fLC = function(new_fLC) {
		this.fLC.push(new_fLC);
	};

/* c) set timeOn: user input via form; variable */
	this.add_timeOn = function(new_timeOn) {
		this.timeOn.push(new_timeOn);
	};		

/* d) set timeOff: user input via form; variable */
	this.add_timeOff = function(new_timeOff) {
		this.timeOff.push(new_timeOff);
	};

/* e) find actual RU0: derived by tRC * RPUM * mwR * vol; constant (check); variable */
	this.find_RU0_actual = function(sys_tRC, sys_mwR, con_vol, con_RPUM) {
		this.RU0_actual = sys_tRC*sys_mwR*con_vol*con_RPUM;
	};

/* f) set RU0: user select data set from table; variable (currently testing with equation at time 0) */
	this.find_RU0_set = function(sys_kOn, out_fLC, sys_tRC, sys_kOff, out_RU0, sys_mwL, con_RPUM, con_vol) {
		this.RU0_set = 0;
	};

/* g) find ComplexConcOn: derived by association equation (kOn, tRC, fLC, timeOn); variable */
	this.calc_ComplexConcOn = function(sys_kOn, out_fLC, out_timeOn, sys_tRC, sys_kOff, out_RU0) {
		this.ComplexConcOn = 1;
	};

	// use experiment.steps

/* h) find ComplexConcOff: derived by disassociation equation (tRC, kOff, timeOff); variable */
	this.calc_ComplexConcOff = function(out_RU0, sys_kOff, out_timeOff) {
		this.ComplexConcOff = out_RU0*(Math.pow(Math.E,-sys_kOff*out_timeOff));
	};

/* i) find RU_ComplexOn: derived by (ComplexConcOn * mwL * RPUM * vol); variable */
	this.calc_RU_ComplexOn = function(out_ComplexConcOn, sys_mwL, con_RPUM, con_vol) {
		this.RU_ComplexOn = out_ComplexConcOn*sys_mwL*con_RPUM*con_vol;
	};

/* j) find RU_ComplexOff: derived by (ComplexConcOff * mwL * RPUM * vol); variable */
	this.calc_RU_ComplexOff = function(out_ComplexConcOff, sys_mwL, con_RPUM, con_vol) {
		this.RU_ComplexOff = out_ComplexConcOff*sys_mwL*con_RPUM*con_vol;
	};

/* k) find RU_ComplexEQ: derived by (RU_ComplexConcOn at timeOn); variable */
	this.calc_RU_ComplexEQ = function(sys_kOn, out_fLC, out_timeOn, sys_tRC, sys_kOff, out_RU0, sys_mwL, con_RPUM, con_vol) {
		this.RU_ComplexEQ = 2;
	};

}
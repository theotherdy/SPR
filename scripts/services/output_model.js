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

/* e) find RU0 on: derived by tRC * RPUM * mwR * vol; constant; */
	this.find_RU0_on = function(sys_tRC, sys_mwR, con_vol, con_RPUM) {
		this.RU0_on = sys_tRC*sys_mwR*con_vol*con_RPUM;
	};

/* e) find RU0 off: derived from RU_ComplexOn at timeOn; variable */
	this.find_RU0_off = function() {
		this.RU0_off = 100;
	};

/* f) find RU_ComplexOff: derived from 1st order disassociation formula; variable */
	this.calc_RU_ComplexOff = function(out_RU0_off, sys_kOff, out_timeOff) {
		this.RU_ComplexOff = out_RU0_off*(Math.pow(Math.E, -sys_kOff*out_timeOff));
	};

/* g) find RU_ComplexOn: derived from 2nd order association formula; variable */
	this.calc_RU_ComplexOn = function(con_RPUM, con_vol, sys_mwR, sys_kOn, out_fLC, sys_tRC, out_timeOn, out_RU_ComplexOff) {
		this.RU_ComplexOn = con_RPUM*con_vol*sys_mwR*((sys_kOn*out_fLC*sys_tRC*out_timeOn)-(Math.pow(Math.E, -sys_kOn*out_fLC*out_timeOn)))-out_RU_ComplexOff;
	};
}
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
	this.RU_OnAdjusted = [];

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

/* e) find the RU increase when R is totally saturated by L; constant */
	this.find_RU_Max = function(sys_tRC, sys_mwR, con_vol, con_RPUM, sys_mwL, sys_mwLR) {
		this.RU0 = sys_tRC*sys_mwR*con_vol*con_RPUM;
		this.RU_MaxL = sys_tRC*sys_mwL*con_vol*con_RPUM;
		this.RU_MaxLR = sys_tRC*sys_mwLR*con_vol*con_RPUM;
	};

/* f) find RU_On: derived from 2nd order association formula; variable */
	this.calc_RU_On = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, RU0_set) {
		this.RU_On = ((out_RU_MaxL*out_fLC)/(sys_Kd+out_fLC))*(1-Math.pow(Math.E,-(sys_kOn*out_fLC+sys_kOff)*out_timeOn));
		this.RU_OnAdjusted.push(this.RU_On+out_RU0-RU0_set);
	};

/* g) find RU_Off: derived from 1st order disassociation formula; variable */
	this.calc_RU_Off = function(out_RU_On, sys_kOff, out_timeOff, out_RU0, RU0_set) {
		this.RU_Off = out_RU_On*(Math.pow(Math.E, -sys_kOff*out_timeOff));
		this.RU_OffAdjusted = this.RU_Off+out_RU0-RU0_set;
	};

}
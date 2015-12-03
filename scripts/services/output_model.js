	/* Output Mathematical Model: contain functions to input user-generated parameters and ouput values for graphical display */

/* 1. registering modules, services and constants */
angular.module('output_model', ['system_model', 'experiment_status', 'cookies'])
	.service('outputModel', ['systemModel', 'experimentStatus', '$cookies', '$timeout', outputMethod]);

function outputMethod(systemModel, experimentStatus, $cookies, $timeout) { 

/* 2. creating sub-methods as part of the function object that can be outputed */

/* a) all the data to be stored */
	var output = this; // create a specific selector for outputMethod specific module required in plotCoordinates but used with 'all or nothing' principle
	output.fLC = []; // fLC  must be <= 0, to obtain background value
	output.timeOn = []; // timeOn must be < 0
	output.timeOff = []; // timeOff must be < 0
	output.RU_OnAdjusted = [];
	output.intermediateTimeOn = [];
/*	output.intermediateTimeOff = [];
	output.intermediateRU_off = []; */

/* b) check for cookies and restore or create new */


/* c) set fLC: user input via form; variable */
	output.add_fLC = function(new_fLC) {
		output.fLC.push(new_fLC);
	};

/* d) set timeOn: user input via form; variable */
	output.add_timeOn = function(new_timeOn) {
		output.timeOn.push(new_timeOn);
	};		

/* e) set timeOff: user input via form; variable */
	output.add_timeOff = function(new_timeOff) {
		output.timeOff.push(new_timeOff);
	};

/* f) find the RU increase when R is totally saturated by L; constant */
	output.find_RU_Max = function(sys_tRC, sys_mwR, con_vol, con_RPUM, sys_mwL, sys_mwLR) {
		output.RU0 = sys_tRC*sys_mwR*con_vol*con_RPUM;
		output.RU_MaxL = sys_tRC*sys_mwL*con_vol*con_RPUM;
		output.RU_MaxLR = sys_tRC*sys_mwLR*con_vol*con_RPUM;
	};

/* g) find RU_On: derived from 2nd order association formula; variable */
	output.calc_RU_On = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, backgroundSet) {
		output.RU_On = ((out_RU_MaxL*out_fLC)/(sys_Kd+out_fLC))*(1-Math.pow(Math.E,-(sys_kOn*out_fLC+sys_kOff)*out_timeOn));
		output.RU_OnAdjusted.push(output.RU_On+out_RU0-backgroundSet);
	};

/* h) find RU_Off: derived from 1st order disassociation formula; variable */
	output.calc_RU_Off = function(out_RU_On, sys_kOff, out_timeOff, out_RU0, backgroundSet) {
		output.RU_Off = out_RU_On*(Math.pow(Math.E, -sys_kOff*out_timeOff));
		output.RU_OffAdjusted = output.RU_Off+out_RU0-backgroundSet;
	};

/* j) generate intermediate outputs for SPR graph of association and disassocation to plot */
	output.plotCoordinates = function(out_timeOn, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet) {
		output.intermediateTimeOn.length = 0; // clear previous graph points
			// pre-defined variables
		var totalSteps = 5;
		var currentStep = 0;
		
			// creating all plot
		output.plotIntermediateTimeOn(out_timeOn, currentStep, totalSteps);
		output.plotIntermediateRU_on(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet, currentStep, totalSteps); 
		/*output.plotIntermediateTimeOff(out_timeOff, currentStep, totalSteps); 
		output.plotIntermediateRU_off(out_RU_OffAdjusted, currentStep, totalSteps);*/
	};

		// intermediate points for time on (x-axis coordinate 1)
	output.plotIntermediateTimeOn = function(out_timeOn, currentStep, totalSteps) {
		output.intermediateTimeOn.push(currentStep*(out_timeOn/totalSteps));

		if(currentStep < totalSteps) {
			currentStep++;
			output.plotIntermediateTimeOn(out_timeOn, currentStep, totalSteps);
		}
	};

		// intermediate points for RU On (y-axis coordinate 1)
	output.plotIntermediateRU_on = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet, currentStep, totalSteps) {
		output.calc_RU_On(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, output.intermediateTimeOn[currentStep], out_RU0, backgroundSet);

		if(currentStep < totalSteps) {
			currentStep++;
			/*$timeout(function() {*/output.plotIntermediateRU_on(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet, currentStep, totalSteps);/*}, 500);*/ // 10 miliseconds increment
		}
	};
		// intermediate points for time off (x-axis coordinate 2)
/*	output.plotIntermediateTimeOff = function(out_timeOff, currentStep, totalSteps) {
		output.intermediateTimeOff.push(currentStep*(out_timeOff/totalSteps));

		if(currentStep < totalSteps) {
			currentStep++;
			output.plotIntermediateTimeOff(out_timeOff, currentStep, totalSteps);
		}
	};

		// intemediate points for RU Off (y-axis coordinate 2)
	output.plotIntermediateRU_off = function(out_RU_OffAdjusted, currentStep, totalSteps) {
		output.intermediateRU_off.push(currentStep*(out_RU_OffAdjusted/totalSteps));

		if(currentStep < totalSteps) {
			currentStep++;
			$timeout(function() {output.plotIntermediateRU_off(out_RU_OffAdjusted, currentStep, totalSteps);}, 0.01);
		}
	}; */
}
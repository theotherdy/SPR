	/* Output Mathematical Model: contain functions to input user-generated parameters and ouput values for graphical display */

/* 1. registering modules, services and constants */
angular.module('output_model', ['system_model', 'experiment_status', 'cookies'])
	.service('outputModel', ['systemModel', 'experimentStatus', '$cookies', '$timeout', outputMethod]);

function outputMethod(systemModel, experimentStatus, $cookies, $timeout) { 

/* 2. creating sub-methods as part of the function object that can be called */

/* a) defining arrays to store data locally */
	var call = this; // create a specific selector for intermediate points function
	call.fLC = []; // fLC  must be <= 0, to obtain background value
	call.timeOn = []; // timeOn must be < 0
	call.timeOff = []; // timeOff must be < 0
	call.RU_OnAdjusted = [];
	call.intermediateTimeOn = [];

/* b) check for cookies and restore or create new */


/* c) set fLC: user input via form; variable */
	call.add_fLC = function(new_fLC) {
		call.fLC.push(new_fLC);
	};

/* d) set timeOn: user input via form; variable */
	call.add_timeOn = function(new_timeOn) {
		call.timeOn.push(new_timeOn);
	};		

/* e) set timeOff: user input via form; variable */
	call.add_timeOff = function(new_timeOff) {
		call.timeOff.push(new_timeOff);
	};

/* f) find the RU increase when R is totally saturated by L; constant */
	call.find_RU_Max = function(sys_tRC, sys_mwR, con_vol, con_RPUM, sys_mwL, sys_mwLR) {
		call.RU0 = sys_tRC*sys_mwR*con_vol*con_RPUM;
		call.RU_MaxL = sys_tRC*sys_mwL*con_vol*con_RPUM;
		call.RU_MaxLR = sys_tRC*sys_mwLR*con_vol*con_RPUM;
	};

/* g) find RU_On: derived from 2nd order association formula; variable */
	call.calc_RU_On = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, RU0_set) {
		call.RU_On = ((out_RU_MaxL*out_fLC)/(sys_Kd+out_fLC))*(1-Math.pow(Math.E,-(sys_kOn*out_fLC+sys_kOff)*out_timeOn));
		call.RU_OnAdjusted.push(call.RU_On+out_RU0-RU0_set);
	};

/* h) find RU_Off: derived from 1st order disassociation formula; variable */
	call.calc_RU_Off = function(out_RU_On, sys_kOff, out_timeOff, out_RU0, out_RU0_set) {
		call.RU_Off = out_RU_On*(Math.pow(Math.E, -sys_kOff*out_timeOff));
		call.RU_OffAdjusted = call.RU_Off+out_RU0-out_RU0_set;
	};

/* j) generate intermediate outputs for SPR graph of association and disassocation to plot */
	call.plotCoordinates = function(out_timeOn) {
		call.intermediateTimeOn.length = 0; // clear previous graph points
		var steps = 4;
		var step = 0;
		
		// intermediate points for time on (x-axis coordinate 1)
		call.plotSingleCoordinate(out_timeOn, step, steps); 

		//var steps = 4;
		//var valTimeOn; // define variable to push
		//call.intermediateTimeOn.length = 0;
		/* call.intermediateTimeOn.push(1); */ // test to check if push is working, which works
		//var createTimeOnIntermediate = function(i) {
		//	setTimeout(function(){
		//		valTimeOn = i*(out_timeOn/steps);
		//		call.intermediateTimeOn.push(valTimeOn); // value is correct and function is working but its not pushing into array
				/* alert(valTimeOn); */ // test to see if setTimeout is working, which does
		//	}, 1500);
		//};
		///for (i = 0; i <= steps; i++) {
		//	createTimeOnIntermediate(i);
		//}

		// intermediate points for RU On (y-axis coordinate 1)

		// intermediate points for time off (x-axis coordinate 2)

		// intemediate points for RU Off (y-axis coordinate 2)
	};
	
	call.plotSingleCoordinate = function(out_timeOn, step, steps) {
		call.intermediateTimeOn.push(step*(out_timeOn/steps))

		if(step < steps) {
			step++;
			$timeout(function() {call.plotSingleCoordinate(out_timeOn, step, steps)}, 1500);
		}
	}
}
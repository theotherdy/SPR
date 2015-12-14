	/* Output Mathematical Model: contain functions to input user-generated parameters and ouput values for graphical display */

/* 1. registering modules, services and constants */
angular.module('output_model', ['cookies'])
	.service('outputModel', ['$cookies', '$timeout', outputMethod]);

function outputMethod($cookies, $timeout) { 

/* 2. creating sub-methods as part of the function object that can be outputed */

/* a) all the data to be stored */
	var output = this; // create a specific selector for outputMethod specific module required in plotCoordinates but used with 'all or nothing' principle
	output.fLC = []; // fLC  must be >= 0, to obtain background value
	output.timeOn = []; // timeOn must be > 0
	output.RU_On_Output = []; // store max value of RU On
	output.RU_On_Coordinate = []; // store RU vs timeOn data into [x,y] coordinates before pushing into Line
	output.RU_On_Line = []; // store all coordinates in [[x1,y1],[x2,y2],[x3,y3]] format for plotting
	output.timeOff = []; // timeOff must be > 0
/*	output.intermediateTimeOff = [];
	output.intermediateRU_off = []; */

/* b) check for cookies and restore or create new */


/* c) set fLC: user input via form; variable */
	output.add_fLC = function(new_fLC) {
		output.fLC.push(new_fLC/1000000);
	};

/* d) set timeOn: user input via form; variable */
	output.add_timeOn = function(new_timeOn) {
		output.timeOn.push(new_timeOn);
	};

/* e) set timeOff: user input via form; variable */
	output.add_timeOff = function(new_timeOff) {
		output.timeOff.push(new_timeOff);
	};

/* f) find RU_On: derived from 2nd order association formula; variable */
	output.calc_RU_On = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, backgroundSet) {
		output.RU_On = ((out_RU_MaxL*out_fLC)/(sys_Kd+out_fLC))*(1-Math.pow(Math.E,-(sys_kOn*out_fLC+sys_kOff)*out_timeOn));
		output.RU_OnAdjusted = output.RU_On+out_RU0-backgroundSet;
	};

/* g) find and store the maximum RU for a given input fLC and time on */
	output.calc_RU_OnMax = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, backgroundSet) {
		output.calc_RU_On(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, backgroundSet);
		output.RU_On_Output.push(output.RU_OnAdjusted);
	};

/* h) find RU_Off: derived from 1st order disassociation formula; variable */
	output.calc_RU_Off = function(out_RU_On, sys_kOff, out_timeOff, out_RU0, backgroundSet) {
		output.RU_Off = out_RU_On*(Math.pow(Math.E, -sys_kOff*out_timeOff));
		output.RU_OffAdjusted = output.RU_Off+out_RU0-backgroundSet;
	};

/* i) generating coordinates for RU on line */
	output.plotCoordinatesOn = function(out_timeOn, currentStep, totalSteps, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet) {
		output.RU_On_Coordinate.push(currentStep*(out_timeOn/totalSteps)); // upload x coordinate
		output.calc_RU_On(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, output.RU_On_Coordinate[0], out_RU0, backgroundSet);
		output.RU_On_Coordinate.push(output.RU_OnAdjusted); // upload y coordinate
		output.RU_On_Line.push(output.RU_On_Coordinate); // [x,y] push into line; line is what chart.data will take to plot
		output.RU_On_Coordinate.length = 0; // clear temporary coordinate generator for new sets of coordinates in [x,y] format

// multiple points are created but since whatever pushed is an equation, the timeOn will change as increment happen

		if(currentStep < totalSteps) { // increment step
			currentStep++;
			/*$timeout(function() {*/output.plotCoordinatesOn(out_timeOn, currentStep, totalSteps, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet);/*}, 500);*/
		}
	};

/* j) master method to call to generate intermediate coordinates for SPR graph of association and disassocation to plot */
	output.plotCoordinates = function(out_timeOn, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet) {
		/* output.intermediateTimeOn.length = 0; // clear previous graph points */
			// set number of intermediates to produce
		var totalSteps = 5;
		var currentStep = 0;
		
			// creating all plot
		output.plotCoordinatesOn(out_timeOn, currentStep, totalSteps, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet);
		/*output.plotIntermediateTimeOff(out_timeOff, currentStep, totalSteps); 
		output.plotIntermediateRU_off(out_RU_OffAdjusted, currentStep, totalSteps);*/
	};
}

/* k) generating coordinates for RU off line */

/* g) generate intermediate points for time off (x-axis coordinate 2) */
/*	output.plotIntermediateTimeOff = function(out_timeOff, currentStep, totalSteps) {
		output.intermediateTimeOff.push(currentStep*(out_timeOff/totalSteps));

		if(currentStep < totalSteps) {
			currentStep++;
			output.plotIntermediateTimeOff(out_timeOff, currentStep, totalSteps);
		}
	}; */

/* l) generate intemediate points for RU Off (y-axis coordinate 2)
	output.plotIntermediateRU_off = function(out_RU_OffAdjusted, currentStep, totalSteps) {
		output.intermediateRU_off.push(currentStep*(out_RU_OffAdjusted/totalSteps));

		if(currentStep < totalSteps) {
			currentStep++;
			$timeout(function() {output.plotIntermediateRU_off(out_RU_OffAdjusted, currentStep, totalSteps);}, 0.01);
		}
	}; */
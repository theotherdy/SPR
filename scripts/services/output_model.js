	/* Output Mathematical Model: contain functions to input user-generated parameters and ouput values for graphical display */

/* 1. registering modules, services and constants */
angular.module('output_model', ['cookies', 'experiment_status'])
	.service('outputModel', ['experimentStatus', '$cookies', '$timeout', outputMethod]);

function outputMethod(experimentStatus, $cookies, $timeout) { 

/* 2. creating sub-methods as part of the function object that can be outputed */

/* a) all the data to be stored */
	var output = this; // create a specific selector for outputMethod specific module required in plotCoordinates but used with 'all or nothing' principle
	var experiment = experimentStatus;
	output.fLC_tableDisplay = []; // input fLC value specify by the user, display on table and charts so user can track progress
	output.fLC = []; // actual fLC value use in plotting as adjusted by standard error
	output.timeOn = []; // timeOn must be > 0
	output.timeOffDefault = 10; // set timeOff to 10 seconds for default
	output.RU_On_Output = []; // store max value of RU On
	output.RU_On_Coordinate = []; // store RU vs timeOn data into [x,y] coordinates before pushing into Line
	output.RU_Line = []; // store all coordinates to plot line in [[x1,y1],[x2,y2],[x3,y3]] format for plotting
	output.RU_Off_Coordinate = [];
	output.RU_CompiledLabelPlotAll = []; // store all plot into format that adds label of [{label: "abc1", data: [line1]}, {label: "abc2", data: [line2]}...] for overlapping display
	output.magnitudeAdjust = 1000; // default input unit at mM magnitude, adjustable by clicking
	output.unitAdjust = "mM";

/* b) check for cookies and restore or create new */



/* function to generate standard deviation
	


/* c) set fLC: user input via form; variable */
	output.add_fLC = function(new_fLC) {
		output.fLC_tableDisplay.push(new_fLC/output.magnitudeAdjust);
		output.fLC.push(experiment.measurementError(new_fLC/output.magnitudeAdjust)); // divided by magnitudeAdjust to convert input of various units (mM, uM, nM) into the uniform units of M for later processing
	};

/* d) set timeOn: user input via form; variable */
	output.add_timeOn = function(new_timeOn) {
		output.timeOn.push(new_timeOn);
	};

/* f) find RU_On: derived from 2nd order association formula; variable */
	output.calc_RU_On = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_timeOn, out_RU0, backgroundSet) {
		output.RU_On = ((out_RU_MaxL*out_fLC)/(sys_Kd+out_fLC))*(1-Math.pow(Math.E,-(sys_kOn*out_fLC+sys_kOff)*out_timeOn));
		output.RU_OnAdjusted = output.RU_On+out_RU0-backgroundSet;
	};

/* g) find and store the maximum RU for a given input fLC and time on */
	output.calc_RU_OnMax = function(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet) {
		output.calc_RU_On(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, output.timeOn[output.timeOn.length-1], out_RU0, backgroundSet);
		output.RU_On_Output.push(output.RU_OnAdjusted);
	};

/* h) find RU_Off: derived from 1st order disassociation formula; variable */
	output.calc_RU_Off = function(out_RU_On, sys_kOff, out_timeOff, out_RU0, backgroundSet) {
		output.RU_Off = out_RU_On*(Math.pow(Math.E, -sys_kOff*out_timeOff));
		output.RU_OffAdjusted = output.RU_Off+out_RU0-backgroundSet;
	};

/* i) generating coordinates for RU on line */
	output.plotCoordinatesOn = function(out_timeOn, currentStep, totalSteps, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet) {
			// generate RU On part of curve
		output.RU_On_Coordinate.push(currentStep*(out_timeOn/totalSteps)); // upload x coordinate
		output.calc_RU_On(out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, output.RU_On_Coordinate[0], out_RU0, backgroundSet);
		output.RU_On_Coordinate.push(output.RU_OnAdjusted); // upload y coordinate
		output.RU_Line.push(angular.copy(output.RU_On_Coordinate)); // upload [x,y] coordinate in this form
		output.RU_On_Coordinate.length = 0; // clear temporary coordinate generator for new sets of coordinates in [x,y] format		
		if(currentStep < totalSteps) { // increment step
			currentStep++;
			output.plotCoordinatesOn(out_timeOn, currentStep, totalSteps, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet);
		} // now we have a line with data in format of [[x1,y1],[x2,y2]...]
	};

/* j) generating coordinates for RU off line */
	output.plotCoordinatesOff = function(currentStep, totalSteps, out_timeOn, sys_kOff, out_RU0, backgroundSet) {
			// generate RU Off part of curve
		output.RU_Off_Coordinate.push(currentStep*(output.timeOffDefault/totalSteps)+out_timeOn); // shift time by out_timeOn to start after RU On curve finish
		output.intermediateTimeOff = currentStep*(output.timeOffDefault/totalSteps);
		output.calc_RU_Off(output.RU_On_Output[output.RU_On_Output.length-1]-out_RU0+backgroundSet, sys_kOff, output.intermediateTimeOff, out_RU0, backgroundSet); // output.RU_On_Output[output.RU_On_Output.length-1] is subjected to intrinsic +out_RU0-backgroundSet, so need to remove it
		output.RU_Off_Coordinate.push(output.RU_OffAdjusted);
		output.RU_Line.push(angular.copy(output.RU_Off_Coordinate));
		output.RU_Off_Coordinate.length = 0;
		if(currentStep < totalSteps) { // increment step
			currentStep++;
			output.plotCoordinatesOff(currentStep, totalSteps, out_timeOn, sys_kOff, out_RU0, backgroundSet);
		}
	};

/* k) compiling the plot together as a single line and add label */
	output.plotCompileLabel = function() {
		output.compileLabel = {
			label: angular.copy(output.fLC_tableDisplay[output.fLC_tableDisplay.length-1]*output.magnitudeAdjust)+" "+output.unitAdjust,
			data: angular.copy(output.RU_Line)
		};
		output.RU_CompiledLabelPlotAll.push(angular.copy(output.compileLabel));
		output.RU_Line.length = 0; // clear temporary line generator to generate new sets of line in [[x1,y1],[x2,y2]...] format
	};

/* l) master method to call to generate intermediate coordinates for SPR graph of association and disassocation to plot */
	output.plotCoordinates = function(out_timeOn, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet) {
			// set number of intermediates to produce
		var totalSteps = 100;
		var currentStep = 0;
		
			// creating all plot
		output.plotCoordinatesOn(out_timeOn, currentStep, totalSteps, out_RU_MaxL, out_fLC, sys_Kd, sys_kOn, sys_kOff, out_RU0, backgroundSet);
		output.plotCoordinatesOff(currentStep, totalSteps, out_timeOn, sys_kOff, out_RU0, backgroundSet);
		output.plotCompileLabel();
	};
}
	/* Main Controller: executes all Services onto the View */

/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model', 'display', 'cookies'])
	.constant('vol', 0.000001) // volume inside chip
	.constant('RPUM', 100000000) // response per unit mass (RU/g)
	.controller('viewCtrl', viewMethod);

/* 2. setting up controller */
viewMethod.$inject = ['systemModel', 'outputModel', 'experimentStatus', 'chartConfig', 'tableConfig', '$cookies', 'vol', 'RPUM']; // injecting services and constant into viewMethod function

function viewMethod(systemModel, outputModel, experimentStatus, chartConfig, tableConfig, $cookies, vol, RPUM) {	// declaring services and constant relationship to viewMethod
/* a) define how different dependencies are called it out onto the view */
	var view = this;
	view.system = systemModel;
	view.output = outputModel;
	view.experiment = experimentStatus;
	view.chart = chartConfig;
	view.table = tableConfig;
	view.vol = vol;
	view.RPUM = RPUM;
	view.backgroundSet = 0;
	view.isDisabled_background = false;
	view.isDisabled_run = false;
	view.isDisabled_wash = true;

/* b) check if there is stored data in cookies */


/* c) initialise application to generate unique values for the new system */
	view.system.set_tRC();
	view.system.set_Kd();
	view.system.set_kOff();
	view.system.find_kOn(view.system.Kd, view.system.kOff);
	view.system.set_mwL();
	view.system.set_mwR();
	view.system.find_mwLR(view.system.mwL, view.system.mwR);
	view.system.find_RU_Max(view.system.tRC, view.system.mwR, view.vol, view.RPUM, view.system.mwL, view.system.mwLR);

/* creating function for switching fLC input to mM magnitude */
	view.magnitude_mM = function() {
		view.output.magnitudeAdjust = 1000;
		view.output.unitAdjust = "mM";
	};

/* creating function for switching fLC input to uM magnitude */
	view.magnitude_uM = function() {
		view.output.magnitudeAdjust = 1000000;
		view.output.unitAdjust = "uM";
	};

/* creating function for switching fLC input to nM magnitude */
	view.magnitude_nM = function() {
		view.output.magnitudeAdjust = 1000000000;
		view.output.unitAdjust = "nM";
	};

/* d) creating function for "setup" button */
	view.setup = function () {
		view.experiment.timeOfDayCounter();
		view.experiment.dayOfExperimentCounter();
	};

/* e) creating function for set "zero" button */
	view.set_background = function() {
		view.backgroundSet = view.output.RU_On_Output[view.output.RU_On_Output.length-1];
		view.isDisabled_background = true;
		for (var i = 0; i < view.output.RU_On_Output.length; i++) {
			view.output.RU_On_Output[i] -= view.backgroundSet;
		}
	};

/* f) creating function for "run experiment" button  */
	view.runExperiment = function (new_fLC, new_timeOn) {
		view.output.add_fLC(new_fLC);
		view.output.add_timeOn(new_timeOn);
		view.output.calc_RU_OnMax(view.system.RU_MaxL, view.output.fLC[view.experiment.steps], view.system.Kd, view.system.kOn, view.system.kOff, view.system.RU0, view.backgroundSet);
		view.output.plotCoordinatesOn(new_timeOn, view.output.currentStep, view.output.totalSteps, view.system.RU_MaxL, view.output.fLC[view.experiment.steps], view.system.Kd, view.system.kOn, view.system.kOff, view.system.RU0, view.backgroundSet);
		view.output.plotCompileLabelOn();
		view.experiment.stepsCounter();
		view.experiment.timeOfDayCounter();
		view.isDisabled_run = true;
		view.isDisabled_wash = false;
	};

/* g) creating function for "wash-up" button */
	view.washUp = function(new_timeOn) {
		view.output.plotCoordinatesOff(view.output.currentStep, view.output.totalSteps, new_timeOn, view.system.kOff, view.system.RU0, view.backgroundSet);
		view.output.plotCompileLabelOff();
		view.output.kOffErrorCalc(output.RU_On_Output);
		view.table.compileData(angular.copy(view.experiment.steps), view.output.fLC_tableDisplay[view.output.fLC_tableDisplay.length-1]*view.output.magnitudeAdjust, view.output.timeOn[view.output.timeOn.length-1], view.output.RU_On_Output[view.output.RU_On_Output.length-1]);
		view.isDisabled_run = false;
		view.isDisabled_wash = true;
	}; 

/* h) creating function for "eat" button */
	view.eat = function () {
		view.experiment.timeOfDayCounter();
	};

/* i) creating function for "home" button */
	view.goHome = function () {
		view.experiment.timeOfDay = view.experiment.startOfDay;
	};

/* creating function for "clear graph" button */
	view.clearChart = function() {
		view.output.RU_CompiledLabelPlotAll.length = 0;
	};

/* j) creating a function for "restart" button */
	view.restart = function () {
		view.experiment.daysLeft = view.experiment.daysAllowed;
		view.experiment.timeOfDay = view.experiment.startOfDay;
		view.experiment.steps = 0;
			// remove all data in existing arrays
		view.output.fLC.length = 0;
		view.output.timeOn.length = 0;
		view.output.RU_On_Output.length = 0;
		view.output.RU_On_Coordinate.length = 0;
		view.output.RU_Off_Coordinate.length = 0;
		view.output.RU_Line.length = 0;
		view.output.RU_CompiledLabelPlotAll.length = 0;
		view.table.data.length = 0;
	};
}
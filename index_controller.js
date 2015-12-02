	/* Main Controller: executes all Services onto the View */

/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model', 'cookies', 'filters', 'chart_config'])
	.constant('vol', 0.000001) // volume inside chip
	.constant('RPUM', 100000000) // response per unit mass (RU/g)
	.constant('defaultTimeOff', 900) // 900 seconds; if want to include option of altering time off, just remove the constant from the controller
	.controller('viewCtrl', viewMethod);

/* 2. setting up controller */
viewMethod.$inject = ['systemModel', 'vol', 'RPUM', 'outputModel', 'defaultTimeOff', 'experimentStatus', 'chartConfig', '$cookies']; // injecting services and constant into viewMethod function

function viewMethod(systemModel, vol, RPUM, outputModel, defaultTimeOff, experimentStatus, chartConfig, $cookies) {	// declaring services and constant relationship to viewMethod
/* a) define how different dependencies are called it out onto the view */
	var view = this;
	view.system = systemModel;
	view.vol = vol;
	view.RPUM = RPUM;
	view.output = outputModel;
	view.dTimeOff = defaultTimeOff;
	view.experiment = experimentStatus;
	view.chart = chartConfig;
	view.RU0_set = 0;
	view.isDisabled = false;

/* b) check if there is stored data in cookies */


/* c) initialise application to generate unique values for the new system */
	view.system.set_tRC();
	view.system.set_Kd();
	view.system.set_kOff();
	view.system.find_kOn(view.system.Kd, view.system.kOff);
	view.system.set_mwL();
	view.system.set_mwR();
	view.system.find_mwLR(view.system.mwL, view.system.mwR);
	view.output.find_RU_Max(view.system.tRC, view.system.mwR, view.vol, view.RPUM, view.system.mwL, view.system.mwLR);

/* d) creating function for "setup" and "eat" button */
	view.setup = function () {
		view.experiment.timeOfDayCounter();
		view.experiment.dayOfExperimentCounter();
	};

/* e) creating function for "run experiment" button  */
	view.runExperiment = function (new_fLC, new_timeOn) {
		view.output.add_fLC(new_fLC);
		view.output.add_timeOn(new_timeOn);
		view.output.add_timeOff(view.dTimeOff);
		view.output.calc_RU_On(view.output.RU_MaxL, view.output.fLC[view.experiment.steps], view.system.Kd, view.system.kOn, view.system.kOff, view.output.timeOn[view.experiment.steps], view.output.RU0, view.RU0_set); // convert into function which injects output to graph
		view.output.calc_RU_Off(view.output.RU_On, view.system.kOff, view.output.timeOff[view.experiment.steps], view.output.RU0, view.RU0_set);
		view.output.plotCoordinates(new_timeOn, view.output.RU_OnAdjusted[view.output.RU_OnAdjusted.length-1], view.dTimeOff, view.output.RU_OffAdjusted);
		view.experiment.stepsCounter();
		view.experiment.timeOfDayCounter();
	};

/* f) creating function for set "zero" button */
	view.set_RU0 = function() {
		view.RU0_set = view.output.RU_OnAdjusted[view.output.RU_OnAdjusted.length-1];
		view.isDisabled = true;
		view.output.carryOverTimeOn = 0;
	};

/* g) creating function for "eat" button */
	view.eat = function () {
		view.experiment.timeOfDayCounter();
	};

/* h) creating function for "home" button */
	view.goHome = function () {
		view.experiment.timeOfDay = view.experiment.startOfDay;
	};

/* i) creating a function for "restart" button */
	view.restart = function () {
		view.experiment.daysLeft = view.experiment.daysAllowed;
		view.experiment.timeOfDay = view.experiment.startOfDay;
		view.experiment.steps = 0;
			// remove all data in existing arrays
		view.output.fLC.length = 0;
		view.output.timeOn.length = 0;
		view.output.timeOff.length = 0;
		view.output.RU_OnAdjusted.length = 0;
		view.output.RU_OffAdjusted = null;
		view.output.intermediateTimeOn.length = 0;
		view.output.intermediateRU_on.length = 0;
		view.output.intermediateTimeOff.length = 0;
		view.output.intermediateRU_off.length = 0;
	};
}
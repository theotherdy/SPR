	/* Main Controller: executes all Services onto the View */

/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
angular.module('SPR', ['model', 'chart-js', 'cookies', 'filters'])
	.constant('vol', 0.000001) // volume inside chip
	.constant('RPUM', 100000000); // response per unit mass (RU/g)

/* 2. setting up controller */
app.controller('viewCtrl', viewMethod);
viewMethod.$inject = ['systemModel', 'vol', 'RPUM', 'outputModel', 'experimentStatus', 'chartConfig', '$cookies']; // injecting services and constant into viewMethod function

function viewMethod(systemModel, vol, RPUM, outputModel, experimentStatus, chartConfig, $cookies) {	// declaring services and constant relationship to viewMethod
/* a) define how different dependencies are called it out onto the view */
	this.system = systemModel;
	this.vol = vol;
	this.RPUM = RPUM;
	this.output = outputModel;
	this.experiment = experimentStatus;
	this.chart = chartConfig;
	this.RU0_set = 0;
	this.isDisabled = false;

/* b) check if there is stored data in cookies */


/* c) initialise application to generate unique values for the new system */
	this.system.set_tRC();
	this.system.set_Kd();
	this.system.set_kOff();
	this.system.find_kOn(this.system.Kd, this.system.kOff);
	this.system.set_mwL();
	this.system.set_mwR();
	this.system.find_mwLR(this.system.mwL, this.system.mwR);
	this.output.find_RU_Max(this.system.tRC, this.system.mwR, this.vol, this.RPUM, this.system.mwL, this.system.mwLR);

/* d) creating function for "setup" and "eat" button */
	this.setup = function () {
		this.experiment.timeOfDayCounter();
		this.experiment.dayOfExperimentCounter();
	};

/* e) creating function for "run experiment" button  */
	this.runExperiment = function (new_fLC, new_timeOn, new_timeOff) {
		this.output.add_fLC(new_fLC);
		this.output.add_timeOn(new_timeOn);
		this.output.add_timeOff(new_timeOff);
		this.output.calc_RU_On(this.output.RU_MaxL, this.output.fLC[this.experiment.steps], this.system.Kd, this.system.kOn, this.system.kOff, this.output.timeOn[this.experiment.steps], this.output.RU0, this.RU0_set); // convert into function which injects output to graph
		this.output.calc_RU_Off(this.output.RU_On, this.system.kOff, this.output.timeOff[this.experiment.steps], this.output.RU0, this.RU0_set);
		/* this.output.plotCoordinates(new_timeOn); */
		this.experiment.stepsCounter();
		this.experiment.timeOfDayCounter();
	};

/* f) creating function for set "zero" button */
	this.set_RU0 = function() {
		this.RU0_set = this.output.RU_OnAdjusted[this.output.RU_OnAdjusted.length-1];
		this.isDisabled = true;
		this.output.carryOverTimeOn = 0;
	};

/* g) creating function for "eat" button */
	this.eat = function () {
		this.experiment.timeOfDayCounter();
	};

/* h) creating function for "home" button */
	this.goHome = function () {
		this.experiment.timeOfDay = this.experiment.startOfDay;
		/* this.experiment.intermediateTimeOn.length = 0; */
	};

/* i) creating a function for "restart" button */
	this.restart = function () {
		this.experiment.daysLeft = this.experiment.daysAllowed;
		this.experiment.timeOfDay = this.experiment.startOfDay;
			// remove all data in existing arrays
		this.output.fLC.length = 0;
		this.output.timeOn.length = 0;
		this.output.timeOff.length = 0;
		this.output.RU_OnAdjusted.length = 0;
		/* this.experiment.intermediateTimeOn.length = 0; */
	};
}
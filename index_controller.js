	/* Main Controller: executes all Services onto the View */

/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model'])
	.constant('vol', 0.000001) // volume inside chip
	.constant('RPUM', 0.01); // response per unit mass (RU/Da)

/* 2. setting up controller */
app.controller('viewCtrl', viewMethod);
viewMethod.$inject = ['systemModel', 'vol', 'RPUM', 'outputModel', 'experimentStatus']; // injecting systemModel of viewMethod into viewCrtl

function viewMethod(systemModel, vol, RPUM, outputModel, experimentStatus) {	// declaring systemModel relationship to viewMethod
/* a) define how different dependencies are called it out onto the view */
	this.system = systemModel;
	this.vol = vol;
	this.RPUM = RPUM;
	this.output = outputModel;
	this.experiment = experimentStatus;

/* b) initialise application to generate unique values for the new system */
	this.system.set_tRC();
	this.system.set_Kd();
	this.system.set_kOff();
	this.system.find_kOn(this.system.Kd, this.system.kOff);
	this.system.set_mwL();
	this.system.set_mwR();
	this.system.find_mwP(this.system.mwL, this.system.mwR);
	this.output.find_RU0_actual(this.system.tRC, this.system.mwR, this.vol, this.RPUM);

/* d) creating function for "setup" and "eat" button */
	this.setup = function () {
		this.experiment.timeOfDayCounter();
		this.experiment.dayOfExperimentCounter();
	};

/* c) creating function for "run experiment" button  */
	this.runExperiment = function (new_fLC, new_timeOn, new_timeOff) {
		this.output.add_fLC(new_fLC);
		this.output.add_timeOn(new_timeOn);
		this.output.add_timeOff(new_timeOff);
		this.output.find_RU0_set(this.system.kOn, this.output.fLC[0], this.system.tRC, this.system.kOff, this.output.RU0_actual, this.system.mwL, this.RPUM, this.vol);
		this.output.calc_ComplexConcOn(this.system.kOn, this.output.fLC[0], this.output.timeOn[0], this.system.tRC, this.system.kOff, this.output.RU0_actual);
		this.output.calc_ComplexConcOff(this.output.RU0_actual, this.system.kOff, this.output.timeOff);
		this.output.calc_RU_ComplexOn(this.output.ComplexConcOn, this.system.mwL, this.RPUM, this.vol);
		this.output.calc_RU_ComplexOff(this.output.ComplexConcOff, this.system.mwL, this.RPUM, this.vol);
		this.output.calc_RU_ComplexEQ(this.system.kOn, this.output.fLC[0], this.output.timeOn[0], this.system.tRC, this.system.kOff, this.output.RU0_actual, this.system.mwL, this.RPUM, this.vol);
		this.experiment.stepsCounter();
		this.experiment.timeOfDayCounter();
	};

/* d) creating function for "setup" and "eat" button */
	this.eat = function () {
		this.experiment.timeOfDayCounter();
	};

/* e) creating function for "home" button */
	this.goHome = function () {
		this.experiment.timeOfDay = this.experiment.startOfDay;
	};

/* f) creating a function for "restart" button */
	this.restart = function () {
		this.experiment.daysLeft = this.experiment.daysAllowed;
		this.experiment.timeOfDay = this.experiment.startOfDay;
			// remove all data in existing arrays
		this.output.fLC.length = 0;
		this.output.timeOn.length = 0;
		this.output.timeOff.length = 0;
	};
}
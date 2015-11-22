	/* Main Controller: executes all Services onto the View */

/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model']);

/* 2. setting up controller */

app.controller('viewCtrl', viewMethod);
viewMethod.$inject = ['systemModel', 'outputModel', 'vol', 'RPUM']; // injecting systemModel of viewMethod into viewCrtl

function viewMethod(systemModel, outputModel, vol, RPUM) {	// declaring systemModel relationship to viewMethod
/* a) define how different dependencies are called it out onto the view */
	this.system = systemModel;
	this.output = outputModel;
	this.vol = vol;
	this.RPUM = RPUM;

/* b) initialise application to generate unique values for the new system */
	this.system.set_tRC();
	this.system.set_Kd();
	this.system.set_kOff();
	this.system.find_kOn(this.system.Kd, this.system.kOff);
	this.system.set_mwL();
	this.system.set_mwR();
	this.system.find_mwP(this.system.mwL, this.system.mwR);

/* c) creating function for output form  */
	this.runExperiment = function (new_fLC, new_timeOn, new_timeOff) {
		this.output.add_fLC(new_fLC);
		this.output.add_timeOn(new_timeOn);
		this.output.add_timeOff(new_timeOff);
	};


}

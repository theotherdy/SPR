	/* Main Controller: executes all Services onto the View */

/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model']);

/* 2. setting up controller */

app.controller('viewCtrl', viewMethod);
viewMethod.$inject = ['systemModel']; // injecting systemModel of viewMethod into viewCrtl

function viewMethod(systemModel) {	// declaring systemModel relationship to viewMethod
	this.system = systemModel; // require for calling systemModel in view

/* 3. initialise application to generate unique values for the new system */
	this.system.set_tRC();
	this.system.set_Kd();
	this.system.set_kOff();
	this.system.find_kOn(this.system.Kd, this.system.kOff);
	this.system.set_mwL();
	this.system.set_mwR();
	this.system.find_mwP(this.system.mwL, this.system.mwR);
}


// pairModel - this.flip_Kd();
// pairModel - this.set_Kd();
// pairModel - this.flip_kOff();
// pairModel - this.set_kOff();
// pairModel - this.set_kOn(this.Kd, this.kOff);
// pairModel - this.flip_mwL();
// pairModel - this.set_mwL();
// pairModel - this.flip_mwR();
// pairModel - this.set_mwR();
// pairModel - this.set_mwP(this.mwL, this.mwR);

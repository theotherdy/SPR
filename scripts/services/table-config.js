	/* Creating table using ui-grid API */

/* 1. registering modules, services and constants */
angular.module('table_config', ['output_model', 'ui.grid'])
	.service('tableConfig', ['outputModel', tableCreate]);

/* 2. creating sub-methods as part of the function object that can be called */

function tableCreate(outputModel) {
	var table = this;
	var output = outputModel;

	
}
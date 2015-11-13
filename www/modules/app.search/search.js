(function (module){
	'use strict';
	function config($stateProvider){
		$stateProvider.state('search', {
			url : '/search',
			views : {
				'' : { templateUrl : 'modules/app.search/search.html'
				}
			}
		});
	}
	module.config(['$stateProvider', config]);
}(angular.module('app.search', ['fp.utils'])));
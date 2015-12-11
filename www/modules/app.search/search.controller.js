(function (module){
	'use strict';
	
	function SearchController($scope){
		$scope.search = {
			query : "",
			results : ["obj1","aaa","bbbb","cc"]
			}
		this.onTap = function (){
			alert("tap")
		}
	}
	
	module.controller("searchController",["$scope",SearchController]);
}(angular.module('app.search')));

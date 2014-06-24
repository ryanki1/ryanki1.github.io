"use strict";

angular.module("igWeather", [
  "landingModule",
  "sharedModule"
])
	.config(["$sceProvider", 
		function($sceProvider){
		$sceProvider.enabled(true);
	}]);


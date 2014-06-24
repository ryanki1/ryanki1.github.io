"use strict";

angular.module("igWeather", [
  "ngSanitize",	
  "landingModule",
  "sharedModule"
])
	.config(["$sceProvider", 
		function($sceProvider){
		$sceProvider.enabled(true);
	}]);


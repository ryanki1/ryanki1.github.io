"use strict";

angular.module("sharedModule")
	.factory("weatherService", [
    "$http",
		function($http){
			var srv = {
          getWeather: function(callback){

            return $http({method: "JSONP", url: IG_Weather.weatherUrl})
              .success(function(data){
                callback(data);
              })
              .error(function(){
                callback({error: "Error: GetWeather didn't return results"});   
              });
              
          }
			}
			return srv;
		}
	]) 
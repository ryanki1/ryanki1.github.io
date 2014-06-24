"use strict";
angular.module("landingModule")
    .controller("landingCtrl", ["$scope", 
                                "$log",
                                "weatherService",                                 
                                function($scope, $log, weatherService){

        var kelvinToCelsius = function(kelvin){
          var kelvinCelsiusOffset = -272.15;
          var celsiusTo2Places = (Math.floor((kelvin + kelvinCelsiusOffset)*100))/100;
          return celsiusTo2Places;  
        };

        $scope.title = "Ink Global Weather";
        $scope.details = function(city) {
          if (! city) {
            return;    
          }
          $scope.selectedTemp   = kelvinToCelsius(city.main.temp);
          $scope.tempMin        = kelvinToCelsius(city.main.temp_min);
          $scope.tempMax        = kelvinToCelsius(city.main.temp_max);
          $scope.longitude      = Math.abs(city.coord.lon);
          $scope.WE             = city.coord.lon < 0 ? "W" : "E";
          $scope.latitude       = Math.abs(city.coord.lat);
          $scope.SN             = city.coord.lat < 0 ? "S" : "N";
          $scope.conditions     = city.weather[0].description;
          $scope.icon           = "http://openweathermap.org/img/w/" + city.weather[0].icon + ".png";
          $scope.pressure       = city.main.pressure;
          $scope.humidity       = city.main.humidity; 
        }

        weatherService.getWeather(function(data){
          $scope.cities = data.list;  
        });

    }]);
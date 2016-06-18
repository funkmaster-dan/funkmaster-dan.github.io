'use strict';

var weddingApp = angular.module('weddingApp', [
  'ngRoute',
  'weddingControllers'
]);

weddingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      }).
      when('/theday', {
        templateUrl: 'partials/theday.html',
        controller: 'thedayCtrl'
      }).
	  when('/weddingparty', {
        templateUrl: 'partials/weddingparty.html',
        controller: 'weddingpartyCtrl'
      }).
	  when('/rsvp', {
        templateUrl: 'partials/rsvp.html',
        controller: 'rsvpCtrl'
      }).
	  when('/registry', {
        templateUrl: 'partials/registry.html',
        controller: 'rsvpCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
	  
  }]);
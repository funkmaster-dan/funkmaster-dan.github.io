var weddingControllers = angular.module('weddingControllers', []);

weddingControllers.controller('homeCtrl');

weddingControllers.controller('thedayCtrl');

weddingControllers.controller('weddingpartyCtrl');

weddingControllers.controller('rsvpCtrl',  ['$scope', '$http',
	function($scope, $http) {
		
		$scope.submitted = false;
		$scope.guestvisible = false;
		$scope.guest = "No";
	
		$scope.guestchange = function() {
			
			if ($scope.guest == "Yes") { $scope.guestvisible = true; } 
			else { $scope.guestvisible = false; }
		
		}
	
		$scope.processForm = function() {
		
			$scope.submitted = true;
			
			$scope.formData = {
				'entry.1219118148'  : $('#name').val(),
				'entry.78650478'    : $('#attending').val(),
				'entry.1257866998'	: $('#diet').val(),
				'entry.1760731309'	: $('#beatles').val(),
				'entry.56052198'    : $('#number').val(),
				'entry.526434478'	: $('#guestname').val(),
				'entry.1347701067'	: $('#guestdiet').val()
			};
		
			$http({
			method  : 'POST',
			url     : 'https://docs.google.com/forms/d/1OzDagJbUOVG8JGHg5_Ml-t8BnUmOO2vD4hpXu7ChMBA/formResponse',
			data    : $.param($scope.formData),  // pass in data as strings
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			}).success(function(response) {
			});
			
		};
		
		
		
	}]);
	
	weddingControllers.controller('registryCtrl');
			
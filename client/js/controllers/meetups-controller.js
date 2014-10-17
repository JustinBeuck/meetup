app.controller('meetupsController', ['$scope', '$resource', 
	function ($scope, $resource) {
		$scope.meetups = [
			{ name: "MEAN SF Developers"},
			{ name: "MEAN Austin Developers" }
		]

		$scope.createMeetup = function () {
			$scope.meetups.push({ name: $scope.meetupName });
			$scope.meetupName = '';
		}

	}])

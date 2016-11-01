angular.module('RouteControllers', [])
	.controller('AvailController', function($scope){
		$scope.availDates = [new Date(2016,10,30), new Date(2016,10,30)];
		$scope.caldate = caldate;

		$scope.checkAvail = function(){
			for (i=0; i>$scope.availDates.length; i++){
				if($scope.caldate.getTime() == $scope.availDates[i].getTime()){
					alert ("date available");
					//$scope.availability = "Date is not Available";
				}
				else{
					alert ("date not available");

					//$scope.availability = "Date is Available";
				};
				
			};
		};

		$scope.submitForm = function(){
			if($scope.bookingForm.$valid){
				alert("Booking successfully submitted");
			}
		}

	});
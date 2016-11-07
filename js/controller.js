angular.module('RouteControllers', [])
	.controller('AvailController', function($scope, EventDateService){
		
		$scope.availDates = {};

		var url = "../data/availDates.json";

		$scope.checkAvail = function(){
			
			EventDateService.inputDate(url).then(function(results){
				$scope.availDates = results.data.aDates;

				for (i=0; i<$scope.availDates.length; i++){

					if($scope.caldate.getTime() == $scope.availDates[i].getTime()){
						//alert ("date available");
						$scope.availability = "Date is Available";
					}
					else{
						//alert ("date not available");

						$scope.availability = "Date is not Available";
					};
				
				};
			}).catch(function(err){
				console.log(err);
			});
		};

		$scope.submitForm = function(){
			if($scope.bookingForm.$valid){
				alert("Booking successfully submitted");
			}
			else{
				alert("Please complete the form.");
			}
		}

	});
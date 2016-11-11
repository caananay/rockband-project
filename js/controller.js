angular.module('RouteControllers', [])
	.controller('AvailController', function($scope, EventDateService, CalenderDateService){
		
		$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
		var url = "../data/availDates.json";
		
		
		$scope.checkAvail = function(){
			
			EventDateService.inputDate(url).then(function(results){
				$scope.availDates = results.data;
				
				$scope.availability = CalenderDateService.checkDate($scope.caldate, $scope.availDates);
						

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
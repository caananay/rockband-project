angular.module('EventService', [])
	.factory('EventDateService', function($http){

		EventDateService = {
			inputDate: function(url, data){
				return $http.get(url, data);
			}	
		};
		return EventDateService;

	});		





/*	.factory('EventDateService', function($scope){
		
		EventDateService = {

			inputDate: function(calenderDate, availableDates){
			
				for (i=0; i>availableDates.length; i++){
					if(calenderDate.getTime() == availableDates[i].getTime()){
						return "date available";
						//$scope.availability = "Date is Available";
					}
					else{
						return "date not available";

						//$scope.availability = "Date is not Available";
					};
				
				};
			
			}
		};
	return EventDateService;		
		
	});

	/*EventDateService = {
			inputDate: function($scope.caldate, $scope.availDates[i]){

				if ($scope.caldate.getTime() == $scope.availDates[0].getTime() || $scope.caldate.getTime() == $scope.availDates[1].getTime()){
					$scope.eventdate = $scope.caldate;
					return $scope.eventdate;
				}
				
			}
		};
		return EventDateService;*/
angular.module('EventService', [])
	.factory('EventDateService', function($http){

		EventDateService = {
			inputDate: function(url, data){
				return $http.get(url, data);
			}	
		};
		return EventDateService;

	});

angular.module('CalenderService', [])
	.factory('CalenderDateService', function(){
		
		CalenderDateService = {
			checkDate: function(caldate, availDates){
				for (i = 0; i<availDates.length; i++) {
					if(caldate.getTime() == new Date(availDates[i]).getTime()){
						return "Date is Available";
					}
				}
				return "Date is not Available";
			}
		}
			return CalenderDateService;
		});

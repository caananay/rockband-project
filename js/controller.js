angular.module('RouteControllers', [])
	.controller('HomeController', function($scope){
		
		 $scope.toggle1 = function(){
		 	$("#collapseTwo").hide(500);
		 	$("#collapseOne").slideToggle(500);
		 }
			
		$scope.toggle2 = function(){
			$("#collapseOne").hide(500);
		 	$("#collapseTwo").slideToggle(500);
		 }
	 })	 

	/*.controller('NavController', function(){
		$(window).scroll(function() {
			if ($(document).scrollTop() > 150) {
				$(".navbar").addClass("nav-color-add");
				$(".navbar-default .navbar-nav > li > a").css({"color":"#ccccff","font-weight":"bold"});
				$(".navbar-default .navbar-brand").css({"color":"#ccccff","font-weight":"bold"});
			} else {
				$(".navbar").removeClass("nav-color-add");
				$(".navbar-default .navbar-nav > li > a").css({"color":"#777","font-weight":"normal"});
				$(".navbar-default .navbar-brand").css({"color":"#777","font-weight":"normal"});
			}
		});

	})*/

	.controller('NavController', function(){
		$(window).scroll(function() {
			if ($(document).scrollTop() > 150) {
				$(".navbar").addClass("nav-color-add");
				$(".navbar-default .navbar-nav > li > a").addClass("navbar-text-color");
				$(".navbar-default .navbar-brand").addClass("navbar-text-color");
			} else {
				$(".navbar").removeClass("nav-color-add");
				$(".navbar-default .navbar-nav > li > a").removeClass("navbar-text-color");
				$(".navbar-default .navbar-brand").removeClass("navbar-text-color");
			}
		});

	})

			

	.controller('AvailController', function($scope, EventDateService, CalenderDateService){
		
		$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
		var url = "data/availDates.json";
		
		
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
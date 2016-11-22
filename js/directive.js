angular.module('NavigationBarDirective', ['RouteControllers']).directive('navigation', function(){
	return {
		restrict: 'E', //E-> element
		templateUrl: 'templates/directives/navigation-bar.html',
		controller: 'NavController'
	};
});

angular.module('BfooterDirective', []).directive('bfooter', function(){
	return {
		restrict: 'E', //E-> element
		templateUrl: 'templates/directives/footer.html'
	};
});
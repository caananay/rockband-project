angular.module('NavigationBarDirective', []).directive('navigation', function(){
	return {
		restrict: 'E', //E-> element
		templateUrl: '../templates/directives/navigation-bar.html'
	};
});

angular.module('BfooterDirective', []).directive('bfooter', function(){
	return {
		restrict: 'E', //E-> element
		templateUrl: '../templates/directives/footer.html'
	};
});
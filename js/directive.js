angular.module('NavigationBarDirective', []).directive('navigation', function(){
	return {
		restrict: 'E', //E-> element
		templateUrl: '/templates/directives/navigation-bar.html'
	};
});
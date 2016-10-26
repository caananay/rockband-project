angular.module('RockApp',['ngRoute', 'NavigationBarDirective']);

angular.module('RockApp').config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'templates/home.html'
		//controller: 'HomeController'
	}).when('/band',{
		templateUrl: 'templates/band.html'
	}).when('/music',{
		templateUrl: 'templates/music.html'
	}).when('/event',{
		templateUrl: 'templates/event.html'
	});
});
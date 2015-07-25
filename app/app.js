/**
 * Created on 15.07.2015.
 */
var app = angular.module('scopedListsApp', [
    'ngRoute', 'customSections', 'angularResizable', 'angularResizable'
]);

app.config(function($routeProvider){
    $routeProvider
        .when('/demo/screenWithLists', {
            templateUrl: 'demo/screenWithLists.html'
        })
        .when('/demo', {
            templateUrl: 'demo/main.html'
        })
        .otherwise({
            templateUrl: 'main/view.html'
        });
});

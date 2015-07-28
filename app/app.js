/**
 * Created on 15.07.2015.
 */
var app = angular.module('scopedListsApp', [
    'ngRoute', 'customSections', 'angularResizable', 'ui.sortable'
]);

app.config(function($routeProvider){
    $routeProvider

        //---------------------------------------
        // demo

        .when('/demo/screenWithLists', {
            templateUrl: 'demo/screenWithLists.html'
        })
        .when('/demo', {
            templateUrl: 'demo/main.html'
        })
        .when('/demo/libTests/sortable', {
            controller: 'demoSortableController',
            templateUrl: 'demo/libTests/sortable.html'
        })
        .when('/demo/listActions', {
            controller: 'demoListActions',
            templateUrl: 'demo/listActions/view.html'
        })

        // demo
        //---------------------------------------

        .otherwise({
            templateUrl: 'main/view.html'
        });
});

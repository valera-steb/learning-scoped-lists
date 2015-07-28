angular.module('customSections', [])
    .directive("sectionPlaceholder", function($compile, $route, $rootScope) {
        return {
            restrict: 'AC',
            link: function(scope, element, attr) {
                // Store the placeholder element for later use
                $rootScope["placeholder_" + attr.sectionPlaceholder] = element[0];

                // Clear the placeholder when navigating
                $rootScope.$on('$routeChangeSuccess', function(e, a, b) {
                    element.html('');
                });
            }
        };
    })
    .directive("sectionItem", function($compile, $route, $rootScope) {
        return {
            restrict: 'AC',
            link: function(scope, element, attr) {
                // Locate the placeholder element
                var targetElement = angular.element($rootScope["placeholder_" + attr.sectionItem]);

                // Compile the template and bind it to the current scope, and inject it into the placeholder
                targetElement.html(element.html());
                $compile(targetElement.children())(scope);
            }
        };
    });
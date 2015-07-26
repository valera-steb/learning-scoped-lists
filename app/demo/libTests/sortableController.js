/**
 * Created by steb on 26.07.15.
 */
app.controller('demoSortableController', function ($scope, $timeout) {

    function setUpData() {
        $scope.items = [
            "1", "2", "3", "4"
        ];

        $scope.items2 = [
            "2:1", "2:2", "2.3", '2.4', '2.5'
        ];
    }


    function setUpOptions() {
        $scope.makeCopy = false;


        $scope.dragControlListeners = {
//            accept: function (sourceItemHandleScope, destSortableScope) {
//                console.log(sourceItemHandleScope, destSortableScope);
//                return true;
//            },//override to determine drag is allowed or not. default is true.

            itemMoved: function (event) {
                //Do what you want},
                console.log('moved ', event);

                $timeout(function () {
                    debugger;
//                    event.dest.sortableScope.removeItem(event.dest.index);
                    event.source.itemScope.sortableScope.insertItem(event.source.index, event.source.itemScope.item);
                });
            },

            orderChanged: function (event) {
                //Do what you want},
            }

            //containment: '#board'//optional param.
        };
    }

    function control() {
        $scope.$watch('makeCopy', function () {
            console.log('switch mode');
        });
    }

    setUpData();
    setUpOptions();
    control();
});
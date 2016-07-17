var app = angular.module('myApp', []);
app.controller('sidebarCtrl', function($scope) {

    $scope.currentContent = 'home';

    $scope.showPanel = function(tab) {
        $scope.currentContent = tab;
    };
});
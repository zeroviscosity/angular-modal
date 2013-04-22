/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
* Angular Modal
* 
* Copyright (C) 2013 Kent English (Zero Viscosity)
*
* License: MIT
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

myApp.directive('angularModal', function() {
    return {
        controller: ['$scope', '$rootScope', '$element', 
            function($scope, $rootScope, $element) {
                $scope.defaults = {
                    title: 'Notification',
                    message: '',
                    alert: null,
                    class: '',            
                    action: function() {  }
                };
                $scope.options = {};
                
                $rootScope.$on('showModal', function(evt, options) {
                    //Reset the options
                    $scope.options = angular.copy($scope.defaults);
                    //Include new options
                    angular.extend($scope.options, options);
                    $scope.options.class = ($scope.options.alert) ? 
                            'alert alert-' + $scope.options.alert : '';
                    //Display the modal
                    $($element).find('.modal').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                });
            }
        ],
        template: 
            '<div class="modal hide fade">' +
            '  <div class="modal-header">' +
            '    <h3>{{options.title}}</h3>' +
            '  </div>' +
            '  <div class="modal-body">' +
            '    <div ng-class="options.class">' +
            '      {{options.message}}' +
            '    </div>' +
            '  </div>' +
            '  <div class="modal-footer">' +
            '    <button class="btn" data-dismiss="modal" aria-hidden="true" ' +
            '        ng-click="options.action()">OK</button>' +
            '  </div>' +
            '</div>'
    };
});


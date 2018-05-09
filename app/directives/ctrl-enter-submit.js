angular.module('dairyApp').directive('ctrlEnterSubmit', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('keydown', function(event) {
                let code = event.keyCode || event.which;

                if (event.ctrlKey && code === 13) {
                    if (!event.shiftKey) {
                        event.preventDefault();
                        scope.$apply(attrs.ctrlEnterSubmit);
                    }
                }
            });
        }
    }
});
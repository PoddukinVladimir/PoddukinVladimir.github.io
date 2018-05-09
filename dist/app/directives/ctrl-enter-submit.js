'use strict';

angular.module('dairyApp').directive('ctrlEnterSubmit', function () {
    return {
        restrict: 'A',
        link: function link(scope, elem, attrs) {
            elem.bind('keydown', function (event) {
                var code = event.keyCode || event.which;

                if (event.ctrlKey && code === 13) {
                    if (!event.shiftKey) {
                        event.preventDefault();
                        scope.$apply(attrs.ctrlEnterSubmit);
                    }
                }
            });
        }
    };
});
//# sourceMappingURL=ctrl-enter-submit.js.map
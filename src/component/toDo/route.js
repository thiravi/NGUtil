(function () {
angular
    .module('myApp')
    .run(appRun);
appRun.$inject = ['routerHelper'];
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'toDoctrl',
            config: {
                url: '/toDo',
                templateUrl: 'component/toDo/index.html',
                controller: 'myApp.toDoController',
                controllerAs: 'vm'
            }
        }
    ];
}
})();
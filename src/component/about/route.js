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
            state: 'about',
            config: {
                url: '/about',
                templateUrl: 'component/about/index.html',
                controller: 'myApp.aboutController',
                controllerAs: 'vm'
            }
        }
    ];
}
})();
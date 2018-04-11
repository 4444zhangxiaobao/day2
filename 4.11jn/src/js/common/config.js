app.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('dianyuan', {
        url: '/dianyuan',
        templateUrl: './src/template.dianyuan.html'
    }).state('shouye', {
        url: '/shouye',
        templateUrl: './src/template.shouye.html'
    }).state('caidan', {
        url: '/caidan',
        templateUrl: './src/template.caidan.html'
    }).state('jieping', {
        url: '/jieping',
        templateUrl: './src/template.jieping.html'
    })
}])
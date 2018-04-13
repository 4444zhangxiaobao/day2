app.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('banner', {
        url: '/banner',
        templateUrl: './src/template/banner.html',
        controller: ['$rootScope', function($rootScope) {
            new Swiper('.banner', {
                autoplay: 1000,
                loop: true
            })
        }]
    }).state('aikan', {
        url: '/aikan',
        template: '<div>爱看</div>'
    }).state('dianshi', {
        url: '/dianshi',
        template: '<div>电视剧</div>'
    }).state('zongyi', {
        url: '/zongyi',
        template: '<div>综艺</div>'
    }).state('shaoer', {
        url: '/shaoer',
        template: '<div>少儿</div>'
    })
}])



// controller: ['$scope', function($scope) {
//     new Swiper('.banner', {
//         autoplay: 1000,
//         loop: true
//     })
// }]
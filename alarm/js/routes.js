/**
 * Created by Shivam Mathur on 22-06-2015.
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/view1.html',
            controller: 'view1ctrl'
        })
        .when('/view2',{
            templateUrl: 'views/view2.html',
            controller: 'view2ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
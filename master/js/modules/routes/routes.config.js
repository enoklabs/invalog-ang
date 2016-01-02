/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/overview');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('modernizr', 'icons')
          })
          .state('app.overview', {
              url: '/overview',
              title: 'OverView',
              templateUrl: helper.basepath('overview.html')
          })
            .state('app.inventory', {
                url: '/inventory',
                title: 'Inventory',
                templateUrl: helper.basepath('inventory.html')
            })
            .state('app.maintenance', {
                url: '/maintenance',
                title: 'Maintenance',
                templateUrl: helper.basepath('maintenance.html')
            })
            .state('app.warranty', {
                url: '/warranty-tracker',
                title: 'Warranty Tracker',
                templateUrl: helper.basepath('tools/warranty.html')
            })
            .state('app.manuals', {
                url: '/manuals-tracker',
                title: 'Manuals Tracker',
                templateUrl: helper.basepath('tools/manuals.html')
            })
            .state('app.articles', {
                url: '/articles',
                title: 'Articles',
                templateUrl: helper.basepath('articles.html')
            })
          .state('' +
              'app.submenu', {
              url: '/submenu',
              title: 'Submenu',
              templateUrl: helper.basepath('submenu.html')
          })
          //
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // -----------------------------------
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

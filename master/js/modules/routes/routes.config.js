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
            //
            // INVENTORY Page Routes
            // -----------------------------------
            .state('app.inventory', {
                url: '/inventory',
                title: 'Inventory',
                templateUrl: helper.basepath('inventory/index.html')
            })
            .state('app.item', {
                url: '/inventory/item',
                title: 'Item',
                templateUrl: helper.basepath('inventory/item.html')
            })
            .state('app.item-create', {
                url: '/inventory/create',
                title: 'Create Item',
                templateUrl: helper.basepath('inventory/create.html')
            })
            //
            // MAINTENANCE Page Routes
            // -----------------------------------
            .state('app.maintenance', {
                url: '/maintenance',
                title: 'Maintenance',
                templateUrl: helper.basepath('maintenance/index.html')
            })
            .state('app.maintenance-grid', {
                url: '/maintenance-grid',
                title: 'Maintenance',
                templateUrl: helper.basepath('maintenance/maintenance-grid.html')
            })
            .state('app.maintenance-calendar', {
                url: '/maintenance-calendar',
                title: 'Maintenance',
                templateUrl: helper.basepath('maintenance/maintenance-calendar.html')
            })
            //
            // WARRANTY Page Routes
            // -----------------------------------
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
            //
            // STORAGE / MOVING Page Routes
            // -----------------------------------
            .state('app.storage', {
                url: '/storage',
                title: 'Storage / Moving',
                templateUrl: helper.basepath('storage/index.html')
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
            .state('' +
                'app.equity', {
                url: '/equity',
                title: 'Equity',
                templateUrl: helper.basepath('submenu.html')
            })
            .state('' +
                'app.sales', {
                url: '/sales',
                title: 'Sales',
                templateUrl: helper.basepath('submenu.html')
            })
            .state('' +
                'app.donations', {
                url: '/donations',
                title: 'Donations',
                templateUrl: helper.basepath('submenu.html')
            })
            .state('' +
                'app.sharing', {
                url: '/sharing',
                title: 'Sharing',
                templateUrl: helper.basepath('submenu.html')
            })
            .state('' +
                'app.recommendations', {
                url: '/recommendations',
                title: 'Recommendations',
                templateUrl: helper.basepath('submenu.html')
            })
          //
          // Single Page Routes
          // -----------------------------------
            .state('page', {
                url: '/page',
                templateUrl: 'app/pages/page.html',
                resolve: helper.resolveFor('modernizr', 'icons'),
                controller: ['$rootScope', function($rootScope) {
                    $rootScope.app.layout.isBoxed = false;
                }]
            })
            .state('page.login', {
                url: '/login',
                title: 'Login',
                templateUrl: 'app/pages/login.html'
            })
            .state('page.register', {
                url: '/register',
                title: 'Register',
                templateUrl: 'app/pages/register.html'
            })
            .state('page.recover', {
                url: '/recover',
                title: 'Recover',
                templateUrl: 'app/pages/recover.html'
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

/*!
 *
 * Invalog - Bootstrap App + AngularJS
 *
 */

// APP START
// -----------------------------------

(function() {
    'use strict';

    angular
        .module('invalog', [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.tables',
            'app.utils',
            'app.calendar',
            'app.pages',
            'app.bootstrapui'
        ]);
})();

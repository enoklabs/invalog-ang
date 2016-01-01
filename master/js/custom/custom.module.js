(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'invalog',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();

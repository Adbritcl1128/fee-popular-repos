
(function() {
    'use strict';

    angular.module('gh')
        .filter('size', size);

    function size() {

        /**
         * Take repo data in as a number and returns number divided by 1000.  Applies the
         * toFixed method with to determine the length
         * @param  {Number} repo Number from repo
         * @return {Number}
         */
        return function Size(repo) {

            let newSize = repo / 1000;
            return newSize.toFixed(2) + ' mb';
        };
    }

}());

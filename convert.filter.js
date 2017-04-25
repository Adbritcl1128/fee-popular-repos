//
// (function() {
//  'use strict';
//
//  angular.module('gh')
//    .filter('convert', convert);
// 
//    /**
//     * Changes the format and size of the file
//     * @return {function} The function that specifies the style of the size format
//     */
//    function convert() {
//
//      /**
//       * Converts the size of a repo to a new format
//       * @param  {Number} size        The size of the repo in kilobytes
//       * @param  {String} [suffix=''] The suffix to append to the number
//       * @return {String}
//       */
//      return function convertToMB(size, suffix = '') {
//        return (size * 0.001) + suffix;
//      };
//
//    }
//
// }());

(function() {
  'use strict';

  angular.module('gh')
  .directive('repo', repo);

  function repo() {

    return {
      templateUrl: 'repos/repository.template.html',
      restrict: 'E',
      scope: {
        repo:'='
      }
    };
  }






}());

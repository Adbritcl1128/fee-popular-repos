(function() {
  'use strict';

  angular.module('gh')
  .directive('repositoryDir', repositoryDir);

  function repositoryDir() {

    return {
      templateUrl: 'repos/user-repos.template.js',
      restrict: 'E',
      scope: {

      }
    };
  }






}());

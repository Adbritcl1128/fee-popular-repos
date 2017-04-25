(function() {
  'use strict';

  angular.module('gh')
  .directive('repo', repo);

  function repo() {
    let $ =angular.element;
    return {
      templateUrl: 'repos/repository.template.html',
      restrict: 'E',
      scope: {
        repo:'='
      },
      link: setUpCollapse
    };
    function setUpCollapse(scope, element) {

      $(element).find('header').on('click', function togglePanelBody(){
        $(this).find('article').toggleClass('hidden');
      });
    }
  }






}());

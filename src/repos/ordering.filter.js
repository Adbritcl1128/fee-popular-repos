
(function() {
  'use strict';

  angular.module('gh')
  .filter('popularRepo', popularRepo);


  /**
  * Creates a filter to sort repository
  * @return {function} function that sorts by popularity
  */
  function popularRepo() {

    /**
    * Calculates and sorts how highly rated the repository is
    * @param  {Object} repo
    * @return {Number}       ]
    */
    return function sortByPop(repo) {
      if(!Array.isArray(repo)) {
        return repo;
      }

      let repoCopy = [].concat(repo);

      return repoCopy.sort(function sortRepos(a,b) {
        let aPop = (a.stargazers_count) + (a.forks_count * 2 )+ (a.open_issues_count / 2);
        let bPop = (b.stargazers_count) + (b.forks_count * 2 )+ (b.open_issues_count / 2);

        return bPop - aPop;
      });
    };

  }

}());

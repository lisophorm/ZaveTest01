(function () {
  'use strict';

  angular
    .module('zaveTestGood')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $window) {

    $log.debug('runBlock end');

    var w = angular.element($window);

    var resizeFunc = function () {
      console.log('resize');
      if($('#review-form').height()>$(document).height()) {
        $('#review').height($('#review-form').height()+200);
      } else {
        $('#review').height($(document).height());
      }

      //console.log(source.offsetHeight);
    }
    setTimeout(resizeFunc,300);
    w.bind('resize', resizeFunc);


  }


})();

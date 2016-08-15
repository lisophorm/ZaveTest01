(function() {
  'use strict';

  angular
    .module('zaveTestGood')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

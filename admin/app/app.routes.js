(function () {
  angular
    .module('pkg.<<PKG_LOWER>>')
    .config(routeConfig)
    ;

  /**
   * @ngInject
   */
  function routeConfig(RouteHelpersProvider) {
    var helper = RouteHelpersProvider;
    var pkg = helper.package('<<PKG_LOWER>>');

    pkg.state('');
  }
})();

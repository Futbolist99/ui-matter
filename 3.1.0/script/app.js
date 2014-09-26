(function() {
  angular.module('app', ['ngRoute', 'ngAnimate', 'pascalprecht.translate', 'ui.bootstrap']).config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '/admin/speedbag/i18n/',
      suffix: '.json'
    });
    return $translateProvider.preferredLanguage('pt-BR');
  });

  angular.element(document).ready(function() {
    return angular.bootstrap(angular.element('#app-container'), ['app']);
  });

}).call(this);

angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/footer.html',
    "<div class=\"footer\"><div><!-- ngInclude: 'partials/example.html' --><p>This partial is included in the template by nginclude.</p><!--/ngInclude: 'partials/example.html' --></div><p>VTEX 2013</p></div>"
  );


  $templateCache.put('views/header.html',
    "<div class=\"page-header\"><h1 translate=\"\">speedbag</h1><p class=\"lead\">The no-nonsense front end boilerplate</p></div>"
  );

}]);

import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app.routes';

import yourinfo from './components/yourinfo/yourinfo.module';
import propertyinfo from './components/propertyinfo/propertyinfo.module';
import header from './shared/header/header.module';

angular.module('PropertyTest', [uiRouter, yourinfo, propertyinfo, header])
  .config(routing)
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('header.html', require('./shared/header/header.html'));
  }]);

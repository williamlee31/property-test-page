import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import routing from './app.routes';
import services from './services/services.module';

import yourinfo from './components/yourinfo/yourinfo.module';
import propertyinfo from './components/propertyinfo/propertyinfo.module';
import header from './shared/header/header.module';
import sidebar from './shared/sidebar/sidebar.module';

angular.module('PropertyTest', [uiRouter, ngAnimate, services, yourinfo, propertyinfo, header, sidebar])
  .config(routing)
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('header.html', require('./shared/header/header.html'));
    $templateCache.put('sidebar.html', require('./shared/sidebar/sidebar.html'));
  }]);

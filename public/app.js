import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app.routes';

import yourinfo from './yourinfo/yourinfo.module';
import propertyinfo from './propertyinfo/propertyinfo.module';

angular.module('PropertyTest', [uiRouter, yourinfo, propertyinfo])
  .config(routing);

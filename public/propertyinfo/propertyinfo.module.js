import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './propertyinfo.routes';
import PropertyInfoController from './propertyinfo.controller';

export default angular.module('app.propertyinfo', [uiRouter])
  .config(routing)
  .controller('PropertyInfoController', PropertyInfoController)
  .name;
  
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './yourinfo.routes';
import YourInfoController from './yourinfo.controller';

export default angular.module('yourinfo', [uiRouter])
  .config(routing)
  .controller('YourInfoController', YourInfoController)
  .name;

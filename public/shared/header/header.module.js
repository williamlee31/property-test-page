import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './header.routes';
import HeaderController from './header.controller';

export default angular.module('header', [uiRouter])
  .config(routing)
  .controller('HeaderController', HeaderController)
  .name;

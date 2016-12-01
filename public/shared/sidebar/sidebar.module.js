import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './sidebar.routes';
import SidebarController from './sidebar.controller';

export default angular.module('sidebar', [uiRouter])
  .config(routing)
  .controller('SidebarController', SidebarController)
  .name;

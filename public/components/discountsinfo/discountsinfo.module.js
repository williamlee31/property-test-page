import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './discountsinfo.routes';
import DiscountsInfoController from './discountsinfo.controller';

export default angular.module('discountsinfo', [uiRouter])
  .config(routing)
  .controller('DiscountsInfoController', DiscountsInfoController)
  .name;

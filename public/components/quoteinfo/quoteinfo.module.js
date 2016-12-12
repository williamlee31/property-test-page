import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './quoteinfo.routes';
import QuoteInfoController from './quoteinfo.controller';

export default angular.module('quoteinfo', [uiRouter])
  .config(routing)
  .controller('QuoteInfoController', QuoteInfoController)
  .name;

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './services.routes';
import NavigationService from './navigation.service';
import InformationService from './information.service';

export default angular.module('services', [uiRouter])
  .service('NavigationService', NavigationService)
  .service('InformationService', InformationService)
  .name;

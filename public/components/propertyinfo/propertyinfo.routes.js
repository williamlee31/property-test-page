export default function routing ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('PropertyInfo', {
      url: '/property',
      template: require('./propertyinfo.html'),
      controller: 'PropertyInfoController',
      controllerAs: 'propertyinfo'
    });
}

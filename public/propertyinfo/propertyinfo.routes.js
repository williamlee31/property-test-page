export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('PropertyInfo', {
      url: '/property',
      template: require('./propertyinfo.html'),
      controller: 'PropertyInfoController',
      controllerAs: 'propertyinfo'
    });
}

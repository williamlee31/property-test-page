export default function routing ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('Header', {
      template: require('./header.html'),
      controller: 'HeaderController',
      controllerAs: 'header'
    });
}

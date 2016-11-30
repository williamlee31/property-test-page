export default function routing ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('YourInfo', {
      url: '/',
      template: require('./yourinfo.html'),
      controller: 'YourInfoController',
      controllerAs: 'yourinfo'
    });
}

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('YourInfo', {
      url: '/',
      template: require('./yourinfo.html'),
      controller: 'YourInfoController',
      controllerAs: 'yourinfo'
    });
}

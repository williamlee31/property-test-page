export default function routing ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('QuoteInfo', {
      url: '/quote',
      template: require('./quoteinfo.html'),
      controller: 'QuoteInfoController',
      controllerAs: 'quoteinfo'
    });
}

export default function routing ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('DiscountsInfo', {
      url: '/discounts',
      template: require('./discountsinfo.html'),
      controller: 'DiscountsInfoController',
      controllerAs: 'discountsinfo'
    });
}

export default function routing ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('Sidebar', {
      template: require('./sidebar.html'),
      controller: 'SidebarController',
      controllerAs: 'sidebar'
    });
}

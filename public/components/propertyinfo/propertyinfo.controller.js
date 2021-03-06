export default class PropertyInfoController {
  constructor($state, InformationService, NavigationService) {
    'ngInject';
    this.$state = $state;
    this.InformationService = InformationService;
    this.NavigationService = NavigationService;

    this.name = this.InformationService.currentCustomer.name;

    this.NavigationService.navbarIndex.property = true;
    this.NavigationService.setCurrentIndex(1);
  }

  changeName() {
    this.name = 'Fourth';
    this.$state.go('DiscountsInfo');
  }
}

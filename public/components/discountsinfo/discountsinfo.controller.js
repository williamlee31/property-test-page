export default class DiscountsInfoController {
  constructor($state, InformationService, NavigationService) {
    'ngInject';
    this.$state = $state;
    this.InformationService = InformationService;
    this.NavigationService = NavigationService;

    this.name = this.InformationService.currentCustomer.name;

    this.NavigationService.navbarIndex.discounts = true;
    this.NavigationService.setCurrentIndex(2);
  }

  changeName() {
    this.name = 'Fourth';
    this.$state.go('QuoteInfo');
  }
}

export default class QuoteInfoController {
  constructor(InformationService, NavigationService) {
    'ngInject';
    this.InformationService = InformationService;
    this.NavigationService = NavigationService;

    this.name = this.InformationService.currentCustomer.name;

    this.NavigationService.navbarIndex.quote = true;
    this.NavigationService.setCurrentIndex(3);
  }

  changeName() {
    this.name = 'Fourth';
  }
}

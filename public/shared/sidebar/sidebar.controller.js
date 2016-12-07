export default class SidebarController {
  constructor(InformationService) {
    'ngInject';
    this.InformationService = InformationService;
    this.name = this.InformationService.currentCustomer.name;
  }

  changeName() {
    this.name = 'Fourth';
  }
}

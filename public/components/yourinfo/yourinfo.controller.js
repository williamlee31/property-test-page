export default class YourInfoController {
  constructor($state, InformationService, NavigationService) {
    'ngInject';
    this.$state = $state;
    this.InformationService = InformationService;
    this.NavigationService = NavigationService;

    this.customer = {
      name: ''
    };

    this.NavigationService.navbarIndex.yourInfo = true;
    this.NavigationService.setCurrentIndex(0);
  }

  changeName() {
    this.name = 'Second';
  }

  saveInfo() {
    this.InformationService.saveInformation(this.customer.name);
    this.$state.go('PropertyInfo');
  }
}

export default class HeaderController {
  constructor(NavigationService) {
    'ngIndex';
    this.NavigationService = NavigationService;

    this.navbarIndex = this.NavigationService.navbarIndex;
    this.currentIndex = this.NavigationService.currentIndex;
    console.log(this.navbarIndex);
  }
}

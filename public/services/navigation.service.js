export default class NavigationService {
  constructor() {
    this.navbarIndex = {
      yourInfo: false,
      property: false,
      discounts: false,
      quote: false
    }

    this.currentIndex = {
      yourInfo: false,
      property: false,
      discounts: false,
      quote: false
    }
  }

  setCurrentIndex(index) {
    switch(index) {
      case 0: 
        for(var key in this.currentIndex){
          this.currentIndex[key] = false;
        }
        this.currentIndex.yourInfo = true;
        break;
      case 1:
        for(var key in this.currentIndex){
          this.currentIndex[key] = false;
        }
        this.currentIndex.property = true;
        break;
      case 2:
        for(var key in this.currentIndex){
          this.currentIndex[key] = false;
        }
        this.currentIndex.discounts = true;
        break;
      case 3: 
        for(var key in this.currentIndex){
          this.currentIndex[key] = false;
        }
        this.currentIndex.quote = true;
        break;
    }
  }

  submitYourInfo() {
    if(!this.navbarIndex.property) this.navbarIndex.property = true;
  }

  submitProperty() {

  }

}
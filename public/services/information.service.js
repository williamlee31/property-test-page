export default class InformationService {
  constructor() {
    this.currentCustomer = {
      name: ''
    };
  }

  saveInformation(customerInformation) {
    this.currentCustomer.name = customerInformation;
  }
}

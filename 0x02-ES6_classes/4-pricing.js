import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Number(amount);
    this._currency = currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

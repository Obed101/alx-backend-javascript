import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Number(amount);
    currency = new Currency()
    this._currency = currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency} (${this._currency._code})`
  }
}

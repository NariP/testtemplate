export const multiplication = (a, b) => a * b

export class Money {
  #amount
  #currency
  constructor(num, currency) {
    this.#amount = num
    this.#currency = currency
  }
  times(multiplier) {
    return new Money(this.#amount * multiplier)
  }
  equals(instance) {
    return this.#amount === instance.getAmount()
      && this.#currency === instance.getCurrency()
  }
  getAmount() {
    return this.#amount
  }
  getCurrency() {
    return this.#currency
  }
  dollar(amount) {
    return new Money(amount, "USD")
  }
  franc(amount) {
    return new Money(amount, "CHF")
  }
}

export class Dollar extends Money{
//
}

export class Franc extends Money{
//
}
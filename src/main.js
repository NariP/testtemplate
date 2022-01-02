export const multiplication = (a, b) => a * b

class Expression {
  constructor() {
  }
}

export class Money extends Expression{
  #amount
  #currency
  constructor(num, currency) {
    super();
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
  plus(instance) {
    const currency = instance.getCurrency()
    const amount = instance.getAmount()

    if(currency === 'USD') return new Money(amount + this.#amount, currency)
    if(currency === 'CHF') return new Money(amount + this.#amount, currency)
  }
}

export class Dollar extends Money{
//
}

export class Franc extends Money{
//
}

export class Bank {
  reduce(amount, currency) {
    return new Money().dollar(10)
  }
}
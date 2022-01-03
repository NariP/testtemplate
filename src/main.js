export const multiplication = (a, b) => a * b

class Expression {
  constructor() {
  }
  reduce(to) {
    //
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
  plus(addend, instance) {
    const currency = instance.getCurrency()
    if(currency === 'USD') return new Sum(this.getAmount(), addend)
    if(currency === 'CHF') return new Sum(this.getAmount(), addend)
  }
  reduce(to) {
    return this
  }
}

export class Dollar extends Money{
//
}

export class Franc extends Money{
//
}

export class Bank {
  reduce(source, to) {
    return source.reduce(to)
    // if(source instanceof Money) return source.reduce(to)
    // const sum = new Sum(source)
    // return new sum.reduce(to)
  }
}

export class Sum extends Expression{
  augend
  addend
  constructor(augend, addend) {
    super()
    this.augend = augend
    this.addend = addend
  }

  reduce(to) {
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}
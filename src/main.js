export const multiplication = (a, b) => a * b

class Expression {
  constructor() {
  }
  reduce(bank, to) {
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
  reduce(bank, to) {
    const rate = bank.rate(this.#currency, to)
    return new Money(this.#amount / rate, to)
  }
}

export class Dollar extends Money{
//
}

export class Franc extends Money{
//
}

export class Bank {
  #rates={}
  reduce(source, to) {
    return source.reduce(this, to)
  }
  addRate(from, to, rate) {
    this.#rates[new Pair(from, to)] = rate
  }
  rate(from, to) {
    if (from === to) return 1
    const rate = this.#rates[new Pair(from, to)]
    return rate
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

  reduce(bank, to) {
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}

export class Pair {
  #from
  #to
  constructor(from, to) {
    this.#from = from
    this.#to = to
  }
  equals(pair) {
    return this.#from === pair.from && this.#to === pair.to
  }
  hashCode() {
    return 0
  }
}
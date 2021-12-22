export const multiplication = (a, b) => a * b

class Money {
  #amount
  constructor(num) {
    this.#amount = num
  }
  times(multiplier) {
    return new Dollar(this.#amount * multiplier)
  }
  equals(instance) {
    return this.#amount === instance.getAmount() && this.constructor === instance.constructor
  }
  getAmount() {
    return this.#amount
  }
}

export class Dollar extends Money{
//
}

export class Franc extends Money{
//
}
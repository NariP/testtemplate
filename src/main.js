export const multiplication = (a, b) => a * b

export class Dollar {
  #amount
  constructor(num) {
    this.#amount = num
  }
  times(multiplier) {
    return new Dollar(this.#amount * multiplier)
  }
  equals(instance) {
    return this.#amount === instance.getAmount()
  }
  getAmount() {
    return this.#amount
  }
}
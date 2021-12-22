export const multiplication = (a, b) => a * b

export class Dollar {
  constructor(num) {
    this.amount = num
  }
  times(multiplier) {
    return new Dollar(this.amount * multiplier)
  }
}
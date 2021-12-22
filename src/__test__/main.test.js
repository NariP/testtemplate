import {Dollar, Franc} from '../main';

describe('testMultiplication', () => {
  const five = new Dollar(5)
  test('Dollar5 = 5', () => {
    expect(five.getAmount()).toBe(5)
  })

  test('$5 X 2 = 10', ()=>{
    expect(new Dollar(10).getAmount()).toBe(five.times(2).getAmount())
  } )

  test('$5 X 3 = 15', ()=>{
    expect(new Dollar(15).getAmount()).toBe(five.times(3).getAmount())
  } )

  test('test equality success', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  })
  test('test equality fail', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  })

  test('private property', () => {
    expect(new Dollar(5).amount).toBeUndefined()
  })

  test('get private property', () => {
    expect(new Dollar(5).getAmount()).toBe(5)
  })
})

describe('test FrancMultiplication', () => {
  test('Franc', () => {
    expect(new Franc(5).getAmount()).toBe(5)
  })
  const five = new Franc(5)
  test('5CHF X 2 = 10', ()=>{
    expect(new Franc(10).getAmount()).toBe(five.times(2).getAmount())
  } )

  test('5CHF X 3 = 15', ()=>{
    expect(new Franc(15).getAmount()).toBe(five.times(3).getAmount())
  } )
})

describe('test apple and orange', () => {
  test('is Franc same to dollar', () => {
    expect(new Franc(5).equals(new Dollar(5))).toBe(false)
  })
})
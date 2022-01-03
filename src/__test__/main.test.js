import {Dollar, Franc, Money, Bank, Sum} from '../main';

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

it('Dollar Franc 중복', () => {
  expect(new Money().dollar(5).equals(new Money().dollar(5))).toBeTruthy()
  expect(new Money().franc(5).equals(new Money().dollar(5))).toBeFalsy()
})

it('$5 + $5 = 10', () => {
  const res = new Money().dollar(5).plus(new Money().dollar(5))
  expect(new Money().dollar(10).equals(res)).toBeTruthy()
  expect(new Money().franc(10).equals(res)).toBeFalsy()

  const bank = new Bank()
  const reduced = bank.reduce(res, 'USD')
  expect(new Money().dollar(10).equals(reduced)).toBeTruthy()
})


it('진짜로 만들기', () => {
  const sum = new Sum(new Money().dollar(3), new Money().dollar(4))
  const bank = new Bank()
  const res = bank.reduce(sum, 'USD')
  expect(new Money().dollar(7)).toStrictEqual(res)
})

it('test reduce Money', () => {
  const bank = new Bank()
  const res = bank.reduce(new Money().dollar(1), 'USD')
  expect(new Money().dollar(1)).toStrictEqual(res)
})
import {Dollar} from '../main';

describe('testMultiplication', () => {
  const five = new Dollar(5)
  test('Dollar5 = 5', () => {
    expect(five.amount).toBe(5)
  })

  test('$5 X 2 = 10', ()=>{
    expect(new Dollar(10)).toBe(five.times(2))
  } )

  test('$5 X 3 = 15', ()=>{
    expect(new Dollar(15)).toBe(five.times(3))
  } )

  test('test equality success', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  })
  test('test equality fail', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  })
})
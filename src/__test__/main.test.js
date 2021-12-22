import {multiplication, Dollar} from '../main';

let temp;
describe("simple test", () => {
  beforeEach(() => {
    temp = 1;
  });

  afterEach(() => {
    temp = 0;
  });

  test('1 is 1', () => {
    expect(1).toBe(1);
  });

  test('[1,2,3] is [1,2,3]', () => {
    expect([1,2,3]).toEqual(1);
  });
})

describe('testMultiplication', () => {
  const five = new Dollar(5)
  test('Dollar5 = 5', () => {
    expect(five.amount).toBe(5)
  })

  const product = five.times(2)
  test('$5 X 2 = 10', ()=>{
    expect(product.amount).toBe(10)
  } )

  const product2 = five.times(3)
  test('$5 X 3 = 15', ()=>{
    expect(product2.amount).toBe(15)
  } )
})
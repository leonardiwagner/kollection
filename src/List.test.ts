import { expect } from 'chai';
import 'mocha';

import { List } from './List';

describe('List', () => {
  it('should forEach a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5] as number[]);
    const result = [] as number[];
    list.forEach((element: number) => result.push(element * 2));

    const expectedResult = [2, 4, 6, 8, 10] as number[]

    expect(result).to.deep.equal(expectedResult);
  })

  it('should map a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5] as number[]);
    const result = list.map((element: number) => element * 2);

    const expectedResult = new List<number>([2, 4, 6, 8, 10] as number[])

    expect(result).to.deep.equal(expectedResult);
  })

  it('should reduce a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5] as number[]);
    const result = list.reduce((a, b) => a + b);
    const expectedResult = 15

    expect(result).to.deep.equal(expectedResult);
  })

  it('should reduce a list with single item', () => {
    const list = new List<number>([1] as number[]);
    const result = list.reduce((a, b) => a + b);
    const expectedResult = 1

    expect(result).to.deep.equal(expectedResult);
  })

  it('should fold a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5] as number[]);
    const result = list.fold((a, b) => a + b, "U");
    const expectedResult = "U12345"

    expect(result).to.deep.equal(expectedResult);
  })

  it('should fold a list with single item', () => {
    const list = new List<number>([1] as number[]);
    const result = list.fold((a, b) => a + b, "U");
    const expectedResult = "U1"

    expect(result).to.deep.equal(expectedResult);
  })

  it('should flatten a list', () => {
    //const list = new List<number>([1, [2, [3, 4]], 5] as number[]);
    //const result = list.flatten();

    //const expectedResult = [1, 2, 3, 4, 5] as number[]

    //expect(result).to.deep.equal(expectedResult);
  })
})

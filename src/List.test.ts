import { expect } from 'chai';
import 'mocha';

import { List } from './List';

describe('List', () => {
  it('should add item to list', () => {
    const list = new List([1, 2, 3]);

    const result = list.add(4);
    const expectedResult = new List([1, 2, 3, 4]);

    expect(result).to.deep.equal(expectedResult);
  })

  it('should concat a list', () => {
    const list = new List([1, 2]);
    const list2 = new List([3, 4]);

    const result = list.concat(list2);
    const expectedResult = new List([1, 2, 3, 4]);

    expect(result).to.deep.equal(expectedResult);
  })

  it('should check empty list', () => {
    const list = new List([]);

    const result = list.isEmpty;
    const expectedResult = true;

    expect(result).to.deep.equal(expectedResult);
  })

  it('should check not empty list', () => {
    const list = new List([1, 2]);

    const result = list.isEmpty;
    const expectedResult = false;

    expect(result).to.deep.equal(expectedResult);
  })

  it('should forEach a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5]);
    const result = [] as number[];
    list.forEach((element: number) => result.push(element * 2));

    const expectedResult = [2, 4, 6, 8, 10] as number[]

    expect(result).to.deep.equal(expectedResult);
  })

  it('should fold a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5] as number[]);
    const result = list.fold<string>((a, b) => a + b, "U");
    const expectedResult = "U12345"

    expect(result).to.deep.equal(expectedResult);
  })

  it('should fold a list with single item', () => {
    const list = new List<number>([1] as number[]);
    const result = list.fold((a, b) => a + b, "U");
    const expectedResult = "U1"

    expect(result).to.deep.equal(expectedResult);
  })

  it('should join a list', () => {
    const list = new List([1, 2, 3]);
    const result = list.join(0)

    const expectedResult = new List([1,0,2,0,3])

    expect(result).to.deep.equal(expectedResult);
  })

  it('should map a list', () => {
    const list = new List<number>([1, 2, 3, 4, 5] as number[]);
    const result = list.map((element: number) => element * 2);

    const expectedResult = new List<number>([2, 4, 6, 8, 10] as number[])

    expect(result).to.deep.equal(expectedResult);
  })

  it('should permutate a list', () => {
    const list = new List([1, 2, 3, 4]);
    const result = list.permutations();

    const expectedResult = new List([
      new List([1,2,3,4]),
      new List([1,2,4,3]),
      new List([1,3,2,4]),
      new List([1,3,4,2]),
      new List([1,4,3,2]),
      new List([1,4,2,3]),
      new List([2,1,3,4]),
      new List([2,1,4,3]),
      new List([2,3,1,4]),
      new List([2,3,4,1]),
      new List([2,4,3,1]),
      new List([2,4,1,3]),
      new List([3,2,1,4]),
      new List([3,2,4,1]),
      new List([3,1,2,4]),
      new List([3,1,4,2]),
      new List([3,4,1,2]),
      new List([3,4,2,1]),
      new List([4,2,3,1]),
      new List([4,2,1,3]),
      new List([4,3,2,1]),
      new List([4,3,1,2]),
      new List([4,1,3,2]),
      new List([4,1,2,3])
    ])

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

  it('should remove item from list', () => {
    const list = new List([0, 1, 2, 3]);
    const result = list.remove(2);
    const expectedResult = new List([0, 1, 3]);

    expect(result).to.deep.equal(expectedResult);
  })

  it('should reverse list', () => {
    const list = new List<number>([1, 2, 3, 4] as number[]);

    const result = list.reverse();
    const expectedResult = new List<number>([4, 3, 2, 1] as number[]);

    expect(result).to.deep.equal(expectedResult);
  })

  it('should rotate a list', () => {
    const list = new List([1, 2, 3, 4, 5]);
    const result = list.rotate(2);
    const expectedResult = new List([3, 4, 5, 1, 2])

    expect(result).to.deep.equal(expectedResult);
  })

  it('should swap positions in a list', () => {
    const list = new List([1, 2, 3, 4, 5]);
    const result = list.swapPositions(0, 2);
    const expectedResult = new List([3, 2, 1, 4, 5])

    expect(result).to.deep.equal(expectedResult);
  })

  it('should transpose list', () => {
    const list = new List<number>([10, 11] as number[]);

    const list2 = new List<number>([20] as number[]);
    const list3 = new List<number>([] as number[]);
    const list4 = new List<number>([30, 31, 32] as number[]);

    const result = list.transpose(new List([list2, list3, list4]));

    const expectedResult = new List([new List([10,20,30]), new List([11,31]), new List([32])]);

    expect(result).to.deep.equal(expectedResult);
  })

  it('should zip list', () => {
    const list = new List([10, 11]);

    const result = list.zip(new List([1, 2, 3]));

    const expectedResult = new List([new List([10,1]), new List([11,2]), new List([undefined ,3])]);

    expect(result).to.deep.equal(expectedResult);
  })

  it('should flatten a list', () => {
    //const list = new List<number>([1, [2, [3, 4]], 5] as number[]);
    //const result = list.flatten();

    //const expectedResult = [1, 2, 3, 4, 5] as number[]

    //expect(result).to.deep.equal(expectedResult);
  })
})

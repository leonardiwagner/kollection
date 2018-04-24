export class List<T> {
  public elements: Array<T>;
  public length: number;
  public head: T;
  public init: Array<T>;
  public tail: Array<T>;
  public last: T;
  public isEmpty: boolean;

  constructor(elements: Array<T>) {
    this.elements = elements;
    this.length = elements.length;
    this.head = elements.slice(0, 1)[0];
    this.init = elements.slice(0, elements.length - 1);
    this.tail = elements.slice(1);
    this.last = elements.slice(elements.length - 1, elements.length)[0];
    this.isEmpty = elements.length === 0;
  }

  add(element: T): List<T> {
    return this.concat(new List([element]));
  }

  get(index: number): T {
    return this.elements[index];
  }

  concat(list: List<T>): List<T> {
    const concatElements = this.elements.concat(list.elements);
    return new List<T>(concatElements);
  }

  forEach(f: (element: T) => any): void {
    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      f(element);
    }
  }

  map<U = T>(f: (element: T) => U): List<U> {
    const resultElements = [] as U[];

    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      resultElements.push(f(element));
    }

    return new List<U>(resultElements);
  }

  reduce(f: (accumulator: T, element: T) => T): T {
    if(this.elements.length === 1){
      return this.elements[0];
    }

    let result: T  = this.elements[0];

    for(let i = 1; i < this.elements.length; i++) {
      const element = this.elements[i];
      result = f(result, element);
    }

    return result;
  }

  fold<U = T>(f: (accumulator: U, element: T) => U, initialValue: U): U {
    let result: U  = initialValue;

    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      result = f(result, element);
    }

    return result;
  }

  reverse(): List<T> {
    const newList = [];
    for(let i = this.elements.length - 1; i >= 0; i--) {
      const element = this.elements[i];
      newList.push(element);
    }

    return new List(newList);
  }

  transpose(listOfList: List<List<T>>): List<List<T>> {
    const arrayOfLists = this.elements.map(x =>  new List([x]))

    for(let i = 0; i < listOfList.length; i++) {
      for(let j = 0; j < listOfList.get(i).length; j++) {
        if(j > arrayOfLists.length - 1) {
          arrayOfLists.push(new List([]))
        }

        const element = listOfList.get(i).get(j)
        arrayOfLists[j] = arrayOfLists[j].add(element)
      }
    }

    return new List(arrayOfLists);
  }

  zip(list: List<T>): List<List<T>> {
    const sizeOfList = (list.length > this.length) ? list.length : this.length;

    const elements = [];
    for(let i = 0; i < sizeOfList; i++) {
      elements.push(new List([this.elements[i], list.get(i)]))
    }

    return new List(elements)
  }
}

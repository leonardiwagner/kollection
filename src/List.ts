export class List<T> {
  private elements: Array<T>;
  public length: number;
  public head: T;
  public init: Array<T>;
  public tail: Array<T>;
  public last: T;
  public isEmpty: boolean;
  public asArray: Array<T>;

  constructor(elements: Array<T> = [], isEmptyList: boolean = false) {
    this.elements = elements;
    this.length = elements.length;
    this.isEmpty = elements.length === 0;
    this.head = elements.slice(0, 1)[0];
    this.init = elements.slice(0, elements.length - 1);
    this.tail = elements.slice(1);
    this.last = elements.slice(elements.length - 1, elements.length)[0];
    this.asArray = this.isEmpty ? [] : this.elements;
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

  copy(): List<T> {
    //it's copying only the first level
    //if there is other lists inside, probably
    //will copy as reference, need to check it! !TODO
    return new List(this.elements.slice())
  }

  fold<U = T>(f: (accumulator: U, element: T) => U, initialValue: U): U {
    let result: U  = initialValue;

    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      result = f(result, element);
    }

    return result;
  }

  forEach(f: (element: T) => any): void {
    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      f(element);
    }
  }

  join(element: T): List<T> {
    const newElements = []
    for(let i = 0; i < this.init.length; i++) {
      newElements.push(this.elements[i])
      newElements.push(element)
    }

    newElements.push(this.last)

    return new List(newElements)
  }

  map<U = T>(f: (element: T) => U): List<U> {
    const resultElements = [] as U[];

    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      resultElements.push(f(element));
    }

    return new List<U>(resultElements);
  }

  permutations(): List<List<T>> {
    const permutations:List<T>[] = [];

    const generate = (list: List<T>, permutationIndex: number = 0) => {
      if(permutationIndex === list.length - 1 ) {
        permutations.push(list)
      }

      for(let i = permutationIndex; i < list.length; i++) {
        generate(list.swapPositions(i, permutationIndex), permutationIndex + 1)
      }
    }

    generate(this)

    return new List(permutations);
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

  remove(index: number): List<T> {
    return new List(this.elements.slice(0, index).concat(this.elements.slice(index + 1)))
  }

  reverse(): List<T> {
    const newList = [];
    for(let i = this.elements.length - 1; i >= 0; i--) {
      const element = this.elements[i];
      newList.push(element);
    }

    return new List(newList);
  }

  rotate(amount: number) : List<T> {
    return new List(this.elements.slice(amount).concat(this.elements.slice(0, amount)))
  }

  swapPositions(positionA: number, positionB: number): List<T> {
    const newList = [];

    for(let i = 0; i < this.length; i ++){
      if(i == positionA) {
        newList.push(this.elements[positionB])
      } else if(i == positionB) {
        newList.push(this.elements[positionA])
      } else {
        newList.push(this.elements[i])
      }
    }

    return new List(newList)
  }

  /* doings same as zip but with multiple lists */
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

export class List<T> {
  private elements: Array<T>;
  public length: number;
  public head: T;
  public tail: Array<T>;

  constructor(elements: Array<T>) {
    this.elements = elements;
    this.length = elements.length;
    this.head = elements.slice(0, 1)[0];
    this.tail = elements.slice(1);
  }

  forEach(f: (element: T) => any): void {
    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      f(element);
    }
  }

  map<U>(f: (element: T) => U): List<U> {
    const resultElements = [] as U[];

    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      resultElements.push(f(element));
    }

    return new List<U>(resultElements);
  }

  reduce(f: (a: T, b: T) => T): T {
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

  fold<U>(f: (a: U, b: T) => U, initialValue: U): U {
    let result: U  = initialValue;

    for(let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      result = f(result, element);
    }

    return result;
  }
}

# kollection
collection library for javascript

### fold
> fold\<U>(f: (accumulator: U, element: T) => U, initialValue: U): U

reduces a list with an initial value.

```javascript
const list = new List([1, 2, 3])
const result = list.fold((a, b) => a + b, "N")

//result: "N123"
```

### forEach
> forEach(f: (element: T) => any): void

applies a function to each elements from a collection

```javascript
const list = new List([1, 2, 3])
list.forEach(x => console.log(`number: ${x}`))

//number: 1
//number: 2
//number: 3
```

### map
> map\<U>(f: (element: T) => U): List\<U>

applies a function to each elements from a collection and store each result

```javascript
const list = new List([1, 2, 3])
const result = list.map(x => x * 2)

//result: [2, 4, 6]
```

### reduce
> reduce(f: (accumulator: T, element: T) => T): T

reduces a list

```javascript
const list = new List([1, 2, 3])
const result = list.reduce((a, b) => a + b)

//result: 6
```

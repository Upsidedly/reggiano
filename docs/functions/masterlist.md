# Functions List

<!-- tabs:start -->

#### **String**
*Nothing Yet...*
#### **Array**
- [isEmpty](functions/masterlist.md?id=isempty)
- [shuffle](functions/masterlist.md?id=shuffle)
#### **Number**
- [arbintrary](functions/masterlist.md?id=arbintrary)
<!-- tabs:end -->

## String

*Nothing Yet...*

## Array

### isEmpty

Returns a boolean indicating whether the array is empty.

#### Example
```js
import { isEmpty } from 'reggiano'

isEmpty([]) // true
isEmpty([1]) // false
isEmpty(['sandwhich', 'pretzle']) // false
```

### shuffle

Shuffles the provided array.

#### Example
```js
import { shuffle } from 'reggiano'

const list = ['dog', 'cat', 'fish', 'spider', 'bee']

shuffle(list)
// ['bee', 'dog', 'fish', 'cat', 'spider']

shuffle(list)
// ['bee', 'cat', 'fish', 'spider', 'dog']

shuffle(list)
// ['cat', 'bee', 'dog', 'fish', 'spider']
```

## Number

### arbintrary

Generates a random number between the range of `min` to `max`

#### Example
```js
import { arbintrary } from 'reggiano'

arbintrary(1, 10) // => 5
arbintrary(1, 10) // => 7
arbintrary(1, 10) // => 9
arbintrary(1, 10) // => 2
```
import { readFile } from 'fs/promises';
import { PickError, JsonError } from './errors.js';

function inplace(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function outplace(array: any[]) {
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle.
    while (n) {

        // Pick a remaining element.
        i = Math.floor(Math.random() * n--);

        // And swap it with the current element.
        copy.push(array.splice(i, 1)[0]);
    }

    return copy;
}

type main = {
    /**
 * The version of the library.
 */
    version: '1.0.3',
    /**
     * Shallow capitalization of the provided string
     * @param {string} text The string to be capitalized
     * @returns {string} The capitalized string
     * @example ```js
     * import { shallowcap } from 'reggiano'
     * 
     * const capitalized = shallowcap('hello world')
     * // => 'Hello world'
     * ```
     */
    shallowcap: (text: string) => string,
    /**
     * Random integer generation between the given range
     * @param {number} min The minimum value
     * @param {number} max The maximum value
     * @returns {number} The random integer
     * @example ```js
     * import { arbintrary } from 'reggiano'
     * 
     * const random = arbintrary(0, 10)
     * // => 5
     * const random = arbintrary(0, 10)
     * // => 8
     * const random = arbintrary(0, 10)
     * // => 3
     * ```
     */
    arbintrary: (min: number, max: number) => number,
    /**
     * Shuffles the provided array in-place using the Fisher–Yates algorithm
     * @param {any[]} array The array to be shuffled
     * @returns {any[]} The shuffled array
     * @example ```js
     * import { ishuffle } from 'reggiano'
     * 
     * const array = ['cat', 'dog', 'fish', 'spider', 'bee']
     * shuffle(['cat', 'dog', 'fish', 'spider', 'bee'])
     * 
     * console.log(array)
     * // => ['spider', 'fish', 'bee', 'cat', 'dog']
     * ```
     */
    ishuffle: (array: any[]) => any[],
    /**
     * Returns a deep clone of the object provided
     * @param {any} object The object to be cloned
     * @returns {any} The cloned object
     * @example ```js
     * import { deepclone } from 'reggiano'
     * 
     * const object = { dog: 'woof', cat: 'meow', bird: 'tweet' }
     * const clone = deepclone(object)
     * // => { dog: 'woof', cat: 'meow', bird: 'tweet' }
     * clone.dog = 'bark'
     * 
     * console.log(clone)
     * // => { dog: 'bark', cat: 'meow', bird: 'tweet' }
     * 
     * console.log(object)
     * // => { dog: 'woof', cat: 'meow', bird: 'tweet' }
     * ```
     */
    deepclone: (obj: Record<any, any>) => Record<any, any>,

    /**
     * Returns a shallow clone of the object provided
     * @param {any} object The object to be cloned
     * @returns {any} The cloned object
     * @example ```js
     * import { shallowclone } from 'reggiano'
     * 
     * const object = {
     *   dog: 'woof',
     *   cat: 'meow',
     *   bird: 'tweet'
     *   foo: {
     *     bar: 'baz'
     *   }
     * }
     * 
     * const clone = shallowclone(object)
     * // => { dog: 'woof', cat: 'meow', bird: 'tweet', foo: { bar: 'baz' } }
     * 
     * clone.dog = 'bark'
     * 
     * console.log(clone)
     * // => { dog: 'bark', cat: 'meow', bird: 'tweet', foo: { bar: 'baz' } }
     * 
     * console.log(object)
     * // => { dog: 'woof', cat: 'meow', bird: 'tweet', foo: { bar: 'baz' } }
     * 
     * clone.foo.bar = 'qux'
     * console.log(clone)
     * // => { dog: 'bark', cat: 'meow', bird: 'tweet', foo: { bar: 'qux' } }
     * 
     * console.log(object)
     * // => { dog: 'woof', cat: 'meow', bird: 'tweet', foo: { bar: 'qux' } }
     * ```
     */
    shallowclone: (obj: Record<any, any>) => Record<any, any>,

    /**
     * Concats the provided arrays returns the result
     * @param {any[]} arrays The arrays to be concatenated
     * @returns {any[]} The concatenated array
    */
    concat: (...arrays: any[][]) => any[],

    /**
     * Returns a random boolean (true or false)
     * @returns {boolean} The random boolean
     * @example ```js
     * import { ranbool } from 'reggiano'
     * 
     * const random = ranbool()
     * // => true
     * 
     * const random = ranbool()
     * // => false
     * 
     * const random = ranbool()
     * // => false
     * 
     * const random = ranbool()
     * // => true
     * 
     * const random = ranbool()
     * // => false
     * 
     * // etc.
     * ```
     */
    ranbool: () => boolean,

    /**
     * Picks random elements of your count and returns it.
     * @param {any[]} array The array to be picked from
     * @param {number} count The number of elements to be picked
     * @returns {any[]} The picked elements
     * @example ```js
     * import { pick } from 'reggiano'
     * 
     * const array = ['cat', 'dog', 'fish', 'spider', 'bee']
     * 
     * picksome(array)
     * // => 'fish'
     * 
     * picksome(array, 2)
     * // => ['dog', 'spider']
     * 
     * picksome(array, 3)
     * // => ['cat', 'fish', 'spider']
     * 
     * picksome(array, 5)
     * // => just use shuffle at this point
     * 
     * picksome(array, 6)
     * // => PickError: Count not in range
     * 
     * ```
     */
    picksome(array: any[], count: number): any[],

    /**
     * Returns the diagonal equivalent of the length of the side provided
     * @param {number} side The side length
     * @returns {number} The diagonal length
     * @example ```js
     * import { diagonal } from 'reggiano'
     * const side = 9
     * const diagonal = diagonal(side)
     * // => 12.727922061357857
     * ```
     */
    diagonal: (side: number) => number,

    /**
     * Shuffles the provided array using the Fisher–Yates algorithm
     * @param {any[]} array The array to be shuffled
     * @returns {any[]} The shuffled array
     * @example ```js
     * import { shuffle } from 'reggiano'
     * 
     * const array = ['cat', 'dog', 'fish', 'spider', 'bee']
     * 
     * console.log(shuffle(array))
     * // => ['spider', 'fish', 'bee', 'cat', 'dog']
     * 
     * console.log(shuffle(array))
     * // => ['bee', 'cat', 'dog', 'fish', 'spider']
     * ```
     */
    shuffle: (array: any[]) => any[],

    /**
     * Returns the object of the JSON in the path provided
     * @param {string} path The path to the JSON object
     * @returns {any} The JSON object
     * @example ```js
     * import { json } from 'reggiano'
     * 
     * // Lets say for example the JSON's content was
     * // {
     * //   "foo": { "bar": "baz" },
     * //   "qux": "quux"
     * // }
     * 
     * const json = json('/path/to/json/file.json')
     * // => { foo: { bar: 'baz' }, qux: 'quux' }
     */
    json: (path: string) => Promise<Record<string, any>>,
}

const reggie: main = {
    version: '1.0.3',
    shallowcap: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
    arbintrary: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
    ishuffle: inplace,
    deepclone: structuredClone,
    shallowclone: (obj) => { return { ...obj } },
    concat: (...arrays) => {
        return arrays.reduce((acc, curr) => {
            return [...acc, ...curr]
        })
    },
    ranbool: () => Math.random() >= 0.5,
    picksome: (array: any[], count: number) => {
        const shuffle = outplace(array)
        if (count === array.length) return shuffle
        if (count > array.length || count < 1) throw new PickError(`Count not in range of 1-${array.length}.`)
        if (count === 1) return shuffle[0]
        if (!Number.isInteger(count)) throw new PickError('Count must be an integer.')
        return shuffle.slice(0, count)
    },
    diagonal: (side: number) => side * Math.sqrt(2),
    shuffle: outplace,
    json: async (path: string) => {
        try {
            const json = await readFile(path, 'utf8')
            return JSON.parse(json)
        } catch (e) {
            throw new JsonError(`Could not read JSON file at ${path}.`)
        }
    }
}

const { version, shallowcap, arbintrary, ishuffle, deepclone, shallowclone, concat, ranbool, picksome, diagonal, shuffle, json } = reggie

export { version, shallowcap, arbintrary, ishuffle, deepclone, shallowclone, concat, ranbool, picksome, diagonal, shuffle, json }

export default reggie
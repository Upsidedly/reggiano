type main = {
    /**
 * The version of the library.
 */
    version: '1.0.2',
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
     * Shuffles the provided array
     * @param {any[]} array The array to be shuffled
     * @returns {any[]} The shuffled array
     * @example ```js
     * import { shuffle } from 'reggiano'
     * 
     * const shuffled = shuffle(['cat', 'dog', 'fish', 'spider', 'bee'])
     * // => ['spider', 'fish', 'bee', 'cat', 'dog']
     * // or => ['bee', 'cat', 'dog', 'fish', 'spider']
     * // or => ['fish', 'spider', 'bee', 'cat', 'dog']
     * ```
     */
    shuffle: (array: any[]) => any[],
}

const reggie: main = {
    version: '1.0.2',
    shallowcap: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
    arbintrary: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
    shuffle: (array: any[]) => array.sort(() => Math.random() - 0.5),
}

const { version } = reggie

export { version }

export default reggie
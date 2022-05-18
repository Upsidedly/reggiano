type main = {
    /**
 * The version of the library.
 */
    version: '1.0.0',
    /**
     * Shallow capitalization of the provided string
     * @param {string} text The string to be capitalized
     * @returns {string} The capitalized string
     */
    shallowcap: (text: string) => string,
}

const reggie: main = {
    version: '1.0.0',
    shallowcap: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
}

const { version } = reggie

export { version }

export default reggie
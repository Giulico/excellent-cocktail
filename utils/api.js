import fetch from 'node-fetch'

// Const
import { ALPHABET, API_SEARCH_FIRST_LETTER } from '../const'

/**
 * Gets an array of letters and returns a promise with all APIs fetches
 * @param {string[]} letters
 */
export async function fetchCocktailsByLetters(letters) {
  const APIs = letters.map((letter) =>
    fetch(`${API_SEARCH_FIRST_LETTER}${letter}`).then((res) => res.json())
  )
  return await Promise.all(APIs)
}

/**
 * Gets a source object and returns an array of its properties
 * @param {Object} cocktail
 * @param {string} prop
 * @param {number} n
 */
export function arrayfyProp(source, prop, n) {
  return Array.from(Array(n), (v, i) => source[`${prop}${i}`]).filter(Boolean)
}

/**
 * Gets the object returned from the API and returns a cleaned, smaller Object with the same data
 * @param {Object} cocktail
 */
export function mapCocktails(cocktail) {
  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    instructions: cocktail.strInstructions,
    isAlcoholic: cocktail.strAlcoholic === 'Alcoholic',
    thumb: cocktail.strDrinkThumb,
    ingredients: arrayfyProp(cocktail, 'strIngredient', 15),
    measurements: arrayfyProp(cocktail, 'strMeasure', 15),
    glass: cocktail.strGlass,
  }
}

/**
 * Non pure function that returns well-formatted cocktails from APIs
 */
export async function getCocktails() {
  // Fetch
  const cocktailsFromApi = await fetchCocktailsByLetters(
    ALPHABET /*.slice(0, 3)*/
  )
  // Clean up
  const cocktails = cocktailsFromApi.reduce((prev, curr) => {
    // Skip letters without any cocktails
    if (!Array.isArray(curr.drinks)) {
      return prev
    }
    const drinks = curr.drinks.map(mapCocktails)
    return [...prev, ...drinks]
  }, [])

  return cocktails
}

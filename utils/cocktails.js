/**
 * Gets an array of cocktails and returns an array of all unique ingredients used by those cocktails
 * @param {Object[]} cocktails Cleaned array of cocktails
 */
export function uniqueIngredientsFromCocktails(cocktails) {
  return cocktails.reduce((prev, curr) => {
    return [
      ...prev,
      ...curr.ingredients.filter((ingredient) => !prev.includes(ingredient)),
    ]
  }, [])
}

/**
 * Gets all ingredients and return a set of random ingredients
 * @param {string[]} ingredients Flat array of ingredients
 * @param {number} n Number of random ingredients returned
 */
export function randomIngredients(ingredients, n) {
  const shuffledIngredients = ingredients.sort(() => 0.5 - Math.random())
  return shuffledIngredients.slice(0, n)
}

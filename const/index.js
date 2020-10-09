// API endpoint
export const API_SEARCH_FIRST_LETTER =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='

// Actions
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const RESET_INGREDIENT = 'RESET_INGREDIENT'
export const ADD_COCKTAIL = 'ADD_COCKTAIL'
export const REMOVE_COCKTAIL = 'REMOVE_COCKTAIL'
export const RESET_ORDER = 'RESET_ORDER'

// MISC
export const ALPHABET = Array.from(Array(26), (v, n) => (n + 10).toString(36))

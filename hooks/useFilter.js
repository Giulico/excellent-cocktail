const useFilter = function ({ items, criteria }) {
  const filteredItems = items.filter(criteria)
  return {
    filteredItems,
  }
}

export default useFilter

export function useLocalStorage(key: string, initialValue: string | null) {
  const storedValue = localStorage.getItem(key)
  const value = storedValue !== null ? storedValue : initialValue

  const setValue = (newValue: string) => {
    localStorage.setItem(key, newValue)
  }

  const removeValue = () => {
    localStorage.removeItem(key)
  }

  return { value, setValue, removeValue }
}
export const getFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.getItem(key)
  }
}

export const setToStorage = (key: any, value: any) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value)
  }
}

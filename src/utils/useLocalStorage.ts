import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            // Get from local storage by key
            const item =
                typeof window !== "undefined"
                    ? window.localStorage.getItem(key)
                    : undefined
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            // If error also return initialValue
            console.warn(error)
            return initialValue
        }
    })
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value
            // Save state
            setStoredValue(valueToStore)
            // Save to local storage
            typeof window !== "undefined"
                ? window.localStorage.setItem(key, JSON.stringify(valueToStore))
                : undefined
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.warn(error)
        }
    }
    return [storedValue, setValue] as const
}

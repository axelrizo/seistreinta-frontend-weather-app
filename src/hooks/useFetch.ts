import { useState } from 'react'

export const useFetch = <T, U>({ fetchFunction }: { fetchFunction: (payload: U) => Promise<T> }) => {
  const [data, setData] = useState<null | T>(null)
  const [loading, setLoading] = useState<null | boolean>(null)
  const [error, setError] = useState<null | Error>(null)

  const fetchData = async (payload: U) => {
    setError(null)
    setLoading(true)
    try {
      const response = await fetchFunction(payload)
      setData(response)
    } catch (error) {
      if (error instanceof Error) setError(error)
      else setError(new Error('An unexpected error ocurred.'))
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchData }
}

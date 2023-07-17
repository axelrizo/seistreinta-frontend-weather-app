import { NotificationContext } from '@/context/NotificationContext'
import { useContext } from 'react'

export const useFetchGetNotification = <T, U>({
  fetchFunction,
  failText,
}: {
  fetchFunction: (payload: U) => Promise<T>
  failText: string
}) => {
  const { createNotification } = useContext(NotificationContext)

  const fetchData = async (payload: U) => {
    try {
      return await fetchFunction(payload)
    } catch (error) {
      createNotification({ duration: 4, text: failText, type: 'error' })
    }
  }

  return { fetchData }
}

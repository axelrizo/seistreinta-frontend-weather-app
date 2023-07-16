import { NotificationContext } from '@/context/NotificationContext'
import { useContext } from 'react'

export const useFetchGetNotification = <T>({
  fetchFunction,
  failText,
}: {
  fetchFunction: (payload: any) => Promise<T>
  failText: string
}) => {
  const { createNotification } = useContext(NotificationContext)

  const fetchData = async (payload: any) => {
    try {
      return await fetchFunction(payload)
    } catch (error) {
      createNotification({ duration: 4, text: failText, type: 'error' })
    }
  }

  return { fetchData }
}

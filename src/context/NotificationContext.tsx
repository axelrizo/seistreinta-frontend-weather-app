import { Notification, NotificationCreatePayload, NotificationRemovePayload } from '@/interfaces/Notification'
import React, { FC, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  notifications: Notification[]
  createNotification: ({ text, type, duration }: NotificationCreatePayload) => void
  removeNotification: ({ id }: NotificationRemovePayload) => void
}

export const NotificationContext = React.createContext<Context>({} as Context)

export const NotificationProvider: FC<Props> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [currentNotificationId, setCurrentNotificationId] = useState(0)

  const createNotification = ({ text, type, duration }: NotificationCreatePayload) => {
    setCurrentNotificationId((value) => value + 1)
    const newNotification = { text, type, duration, id: currentNotificationId }
    setNotifications((value) => [...value, newNotification])
  }

  const removeNotification = ({ id }: NotificationRemovePayload) => {
    setNotifications((value) => value.filter((notification) => notification.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, createNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

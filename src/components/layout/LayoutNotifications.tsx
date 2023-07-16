import { NotificationContext } from '@/context/NotificationContext'
import React, { useContext } from 'react'
import styles from './LayoutNotifications.module.css'
import { LayoutNotificationsNotification } from './LayoutNotificationsNotification'

export const LayoutNotifications = () => {
  const { notifications } = useContext(NotificationContext)

  return (
    <div className={`${styles['notifications']}`}>
      {notifications &&
        notifications.map((notification) => {
          return <LayoutNotificationsNotification key={notification.id} notification={notification} />
        })}
    </div>
  )
}

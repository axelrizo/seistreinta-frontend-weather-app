import { NotificationContext } from '@/context/NotificationContext'
import { Notification } from '@/interfaces/Notification'
import React, { FC, useContext, useEffect } from 'react'
import styles from './LayoutNotificationsNotification.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'

interface Props {
  notification: Notification
}

export const LayoutNotificationsNotification: FC<Props> = ({ notification }) => {
  const { removeNotification } = useContext(NotificationContext)

  const handleCloseButton = () => {
    removeNotification({ id: notification.id })
  }

  useEffect(() => {
    setTimeout(() => {
      removeNotification({ id: notification.id })
    }, notification.duration * 1000)
  }, [])

  const notificationClassStatus =
    notification.type === 'success' ? styles['notification--success'] : styles['notification--error']

  return (
    <div className={`${styles['notification']} ${notificationClassStatus}`} onClick={() => handleCloseButton()}>
      {notification.text}
      <div className={`${styles['notification__close-button']} `}>
        <AiFillCloseCircle size={20} />
      </div>
    </div>
  )
}

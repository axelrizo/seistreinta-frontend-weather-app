export interface Notification {
  id: number
  text: string
  type: 'error' | 'success'
  duration: number
}

export type NotificationCreatePayload = Omit<Notification, 'id'>
export type NotificationRemovePayload = Pick<Notification, 'id'>

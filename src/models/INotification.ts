export enum NotificationType {
  success = 'success',
  failed = 'failed',
  info = 'info',
}

export interface INotification {
  id: string;
  type: NotificationType;
  message: string;
}

import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

// TODO: Implement the PushNotification class
export class PushNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  public send(user: User, message: string): void {
    this.logger.log(`Sending PUSH notification to ${user.getDeviceToken()}`);
    console.log(`PUSH notification sent to ${user.getDeviceToken()}: ${message}`);
  }
}
import { INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";
import { Logger } from "./Logger";

export class NotificationService {
  constructor(private channels: INotificationChannel[]) {}

  public send(user: User, message: string): void {
    this.channels.forEach(channel => {
      channel.send(user, message);
    });
  }
}
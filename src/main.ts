import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";
import { INotificationChannel } from "./core/interfaces";

const user = new User(
  "example@email.com",
  "+380123456789",
  "device-token-abc"
);

const logger = new Logger();

const channels: INotificationChannel[] = [
  new EmailNotification(logger),
  new SMSNotification(logger),
  new PushNotification(logger),
];

const notificationService = new NotificationService(channels);

notificationService.send(user, "Ваш платіж оброблено успішно!");
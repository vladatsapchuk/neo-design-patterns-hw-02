import { NotificationService } from "../services/NotificationService";

export class User {
  constructor(
    public email: string,
    public phone: string,
    public deviceToken: string
  ) {}

  public getEmail(): string {
    return this.email;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getDeviceToken(): string {
    return this.deviceToken;
  }
}
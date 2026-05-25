import { ILogger } from "../core/interfaces";

export class Logger implements ILogger {
  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
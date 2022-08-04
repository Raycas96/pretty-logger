import { logger } from './utils';

class Logger {
  /** Private */

  constructor(isProdEnv: boolean) {
    this._isProdEnv = isProdEnv;
  }
  /** Private */

  private _isProdEnv: boolean = false;

  /** Public */
  public info = (...messages: any): void => {
    if (this._isProdEnv) {
      return;
    }
    logger.info(...messages);
  };

  public warn = (...messages: any): void => {
    if (this._isProdEnv) {
      return;
    }
    logger.warn(...messages);
  };

  public error = (...messages: any): void => {
    if (this._isProdEnv) {
      return;
    }
    logger.error(...messages);
  };
}

export default Logger;

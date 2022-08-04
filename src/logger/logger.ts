import { BracketMessage } from './enum';

export default class Logger {
  constructor() {}
  /** Private */

  public _loggerForNode(
    color: string,
    emoji: number,
    bracketMessage: BracketMessage,
    ...infos: any
  ): void {
    console.log(
      color,
      `[${String.fromCodePoint(emoji)} ${bracketMessage}]:`,
      ...infos
    );
  }

  public _loggerForBrowser(
    style: string,
    emoji: number,
    bracketMessage: BracketMessage,
    ...infos: any
  ): void {
    console.log(
      `%c[${String.fromCodePoint(emoji)} ${bracketMessage}]:`,
      style,
      ...infos
    );
  }

  /** Public */
  public static info(...infos: any): void {
    const logger = new Logger();
    if (typeof window === 'undefined') {
      logger._loggerForNode(
        '\x1b[34m%s\x1b[0m',
        0x2139,
        BracketMessage.INFO,
        ...infos
      );
    } else {
      logger._loggerForBrowser(
        'color: black;background-color: blue',
        0x2139,
        BracketMessage.INFO,
        ...infos
      );
    }
  }

  public static error(...errors: any): void {
    const logger = new Logger();
    if (typeof window === 'undefined') {
      logger._loggerForNode(
        '\x1b[31m%s\x1b[0m',
        0x2620,
        BracketMessage.ERROR,
        ...errors
      );
    } else {
      logger._loggerForBrowser(
        'color: black;background-color: red',
        0x2620,
        BracketMessage.ERROR,
        ...errors
      );
    }
  }

  public static warn(...errors: any): void {
    const logger = new Logger();
    if (typeof window === 'undefined') {
      logger._loggerForNode(
        '\x1b[33m%s\x1b[0m',
        0x26a0,
        BracketMessage.WARN,
        ...errors
      );
    } else {
      logger._loggerForBrowser(
        'color: black;background-color: yellow',
        0x26a0,
        BracketMessage.WARN,
        ...errors
      );
    }
  }
}

import { BracketMessage } from './enum';

const loggerForNode = (
  color: string,
  emoji: number,
  bracketMessage: BracketMessage,
  ...infos: any
): void => {
  console.log(
    color,
    `[${String.fromCodePoint(emoji)}${bracketMessage}]:`,
    ...infos.map(formatter)
  );
};

const loggerForBrowser = (
  style: string,
  emoji: number,
  bracketMessage: BracketMessage,
  ...infos: any
): void => {
  console.log(
    `%c[${String.fromCodePoint(emoji)}${bracketMessage}]:`,
    style,
    ...infos.map(formatter)
  );
};

const info = (...infos: any): void => {
  if (typeof window === 'undefined') {
    loggerForNode('\x1b[34m%s\x1b[0m', 0x2139, BracketMessage.INFO, ...infos);
  } else {
    loggerForBrowser(
      'color: white;background-color: blue',
      0x2139,
      BracketMessage.INFO,
      ...infos
    );
  }
};

const error = (...errors: any): void => {
  if (typeof window === 'undefined') {
    loggerForNode('\x1b[31m%s\x1b[0m', 0x2620, BracketMessage.ERROR, ...errors);
  } else {
    loggerForBrowser(
      'color: black;background-color: red',
      0x2620,
      BracketMessage.ERROR,
      ...errors
    );
  }
};

const warn = (...errors: any): void => {
  if (typeof window === 'undefined') {
    loggerForNode('\x1b[33m%s\x1b[0m', 0x26a0, BracketMessage.WARN, ...errors);
  } else {
    loggerForBrowser(
      'color: black;background-color: yellow',
      0x26a0,
      BracketMessage.WARN,
      ...errors
    );
  }
};

const formatter = (data: any): any => {
  if (typeof data === 'string') {
    return `[${data}]`;
  } else {
    return data;
  }
};

export const logger = {
  error,
  warn,
  info
};

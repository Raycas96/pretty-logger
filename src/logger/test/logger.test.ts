import Logger from '../logger';

test('Logger.warn', () => {
  const logSpy = jest.spyOn(Logger, 'warn');
  Logger.warn('hello');
  expect(logSpy).toHaveBeenCalledWith('hello');
  Logger.warn('hello', 'world');
  expect(logSpy).toHaveBeenCalledWith('hello', 'world');
});

test('Logger.error', () => {
  const logSpy = jest.spyOn(Logger, 'error');
  Logger.error('hello');
  expect(logSpy).toHaveBeenCalledWith('hello');
  Logger.error('hello', 'world');
  expect(logSpy).toHaveBeenCalledWith('hello', 'world');
});

test('Logger.info', () => {
  const logSpy = jest.spyOn(Logger, 'info');
  Logger.info('hello');
  expect(logSpy).toHaveBeenCalledWith('hello');
  Logger.info('hello', 'world');
  expect(logSpy).toHaveBeenCalledWith('hello', 'world');
});

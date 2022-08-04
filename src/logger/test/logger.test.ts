import { logger } from './../utils';

test('logger.warn', () => {
  const logSpy = jest.spyOn(logger, 'warn');
  logger.warn('hello');
  expect(logSpy).toHaveBeenCalledWith('hello');
  logger.warn('hello', 'world');
  expect(logSpy).toHaveBeenCalledWith('hello', 'world');
});

test('logger.error', () => {
  const logSpy = jest.spyOn(logger, 'error');
  logger.error('hello');
  expect(logSpy).toHaveBeenCalledWith('hello');
  logger.error('hello', 'world');
  expect(logSpy).toHaveBeenCalledWith('hello', 'world');
});

test('logger.info', () => {
  const logSpy = jest.spyOn(logger, 'info');
  logger.info('hello');
  expect(logSpy).toHaveBeenCalledWith('hello');
  logger.info('hello', 'world');
  expect(logSpy).toHaveBeenCalledWith('hello', 'world');
});

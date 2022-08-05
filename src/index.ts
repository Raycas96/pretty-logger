import PrettyLogger from './logger/logger';
import { logger } from './logger/utils';

export { logger } from './logger/utils';
export const Logger = PrettyLogger;


logger.info('Hello', { world: 'test' }, 'lorem');
logger.error('Hello', { world: 'test' }, 'lorem');
logger.warn('Hello', { world: 'test' }, 'lorem'); //[⚠WARN]: [Hello]
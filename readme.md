# Pretty-Logger 🚀

[![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) ![Version](https://img.shields.io/badge/version-v.1.1.0-brightgreen) [![NPM](https://img.shields.io/badge/npm-v.2.3.3-red?logo=npm)](https://www.npmjs.com/package/@raycas/pretty-logger)

Pretty-logger is a light and simple alternative to console.log. It allows you to console Warning, Error ed Info with a unique styles.

## Install

You can install it through the npm packet manager typing

```cmd
npm i @raycas/pretty-logger --save-dev
```

## Usage

It is very simple to use and you can use it with vanilla JavaScript or with Framework like Angular or a library like React.

## new Logger(isProduction: boolean)

It allows you to instantiate a new istance of the Logger class and define if it is production mode or not.
If isProduction is setted to true no log will show.

```javascript
import { Logger } from '@raycas/pretty-logger';

const logger = new Logger(false);
logger.info('Hello', { world: 'test' }, 'lorem'); //[ℹINFO]: [Hello] { world: 'test' } [lorem]
logger.error('Hello', { world: 'test' }, 'lorem'); //[☠ERROR]: [Hello] { world: 'test' } [lorem]
logger.warn('Hello', { world: 'test' }, 'lorem'); //[⚠WARN]: [Hello] { world: 'test' } [lorem]
```

## logger(...items: any) ⚡

It Allows you to console the items without istantiate the Logger class

```javascript
import { logger } from '@raycas/pretty-logger';

logger.info('Hello', { world: 'test' }, 'lorem'); //[ℹINFO]: [Hello] { world: 'test' } [lorem]
logger.error('Hello', { world: 'test' }, 'lorem'); //[☠ERROR]: [Hello] { world: 'test' } [lorem]
logger.warn('Hello', { world: 'test' }, 'lorem'); //[⚠WARN]: [Hello] { world: 'test' } [lorem]
```

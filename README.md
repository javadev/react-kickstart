# react-kickstart
**just another react + webpack boilerplate**

[![Build Status](https://travis-ci.org/javadev/react-kickstart.svg)](https://travis-ci.org/javadev/react-kickstart)
[![codecov.io](https://codecov.io/github/javadev/react-kickstart/coverage.svg?branch=master)](https://codecov.io/github/javadev/react-kickstart?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/5784316276ef4000486f9270/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5784316276ef4000486f9270)


[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

See a [working demo](http://vesparny.github.io/react-kickstart/)

## Features
* webpack + vanilla hot-module-replacement
* Stateless functional components
* styling with [aphrodite](https://github.com/Khan/aphrodite) and [tachyons](http://tachyons.io/)
* basic routing setup with react-router (you most likely need routing in your app)
* [babeljs](https://babeljs.io/)
* unit tests ([ava](https://github.com/sindresorhus/ava) + [sinon](http://sinonjs.org/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage with [nyc](https://github.com/bcoe/nyc)
* development and production build

## Usage

**Clone this repository**
```
git clone https://github.com/vesparny/react-kickstart.git
```

**Install**
```
npm install
```

**Start the application in dev mode with hot-module-replacement**
```
npm run dev
```

**Run tests**
```
npm test
```

**Build for production**
```
npm run build
```

**Run production version**
```
npm run start
```

**Lint with standard**
```
npm run lint
```

**Generate code coverage report**
```
npm run test:cover
```

## Contributing

PR and issues reporting are always welcome :)

## License

See LICENSE file

## Changelog

See CHANGELOG.md file

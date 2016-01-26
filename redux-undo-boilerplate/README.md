# redux-undo-boilerplate

![Version 0.4.2](https://img.shields.io/badge/version-0.4.2-blue.svg?style=flat-square) [![Build Status](https://img.shields.io/travis/omnidan/redux-undo-boilerplate/master.svg?style=flat-square)](https://travis-ci.org/omnidan/redux-undo-boilerplate) [![Dependency Status](https://img.shields.io/david/omnidan/redux-undo-boilerplate.svg?style=flat-square)](https://david-dm.org/omnidan/redux-undo-boilerplate) [![devDependency Status](https://david-dm.org/omnidan/redux-undo-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/omnidan/redux-undo-boilerplate#info=devDependencies) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![https://gratipay.com/omnidan/](https://img.shields.io/gratipay/omnidan.svg?style=flat-square)](https://gratipay.com/omnidan/)

_a magical boilerplate with [hot reloading](#what-happens-if-i-change-some-code) and [awesome error handling™](#what-happens-if-i-make-a-typo--syntax-error) that uses [webpack](https://github.com/webpack/webpack), [redux](https://github.com/rackt/redux), [react](https://github.com/facebook/react) and [redux-undo](https://github.com/omnidan/redux-undo)_


## Installation

You need to have `npm` installed (it comes with [node.js](https://nodejs.org/)).

```sh
npm install
```


## Running

During development, run:

```sh
npm run dev
```

Which enables some development tools.

In production, run:

```sh
npm start
```

These commands (unless configured otherwise) start a web server at: [http://localhost:3000](http://localhost:3000)


## Demo

[![https://i.imgur.com/M2KR4uo.gif](https://i.imgur.com/M2KR4uo.gif)](https://i.imgur.com/M2KR4uo.gif)

### What happens if I change some code?

Save the file in your editor and immediately see the changes reflected in your
browser - coding has never been more efficient. What a beautiful world we live
in nowadays.

[![http://i.imgur.com/VCxUA2b.gif](http://i.imgur.com/VCxUA2b.gif)](http://i.imgur.com/VCxUA2b.gif)

### What happens if I make a typo / syntax error?

Many of us know this: You accidentally type in the wrong window once, add a
random character to your code and when you run it again you're like "WTF this
just worked?!" - let `webpack-hot-middleware` help you out with this:

[![http://i.imgur.com/DTnGNFE.gif](http://i.imgur.com/DTnGNFE.gif)](http://i.imgur.com/DTnGNFE.gif)

### What happens if I mutate the state directly?

Mutating the state directly causes lots of bugs with Redux. There are no
immutables in JavaScript, so we can't make sure this doesn't happen unless we
use something like [Immutable.js](https://facebook.github.io/immutable-js/).

If you run this boilerplate in dev mode (`npm run dev`), it will tell you when
you [mutate something directly](https://github.com/omnidan/redux-undo-boilerplate/blob/master/src/reducers/counter.js#L9):

[![https://i.imgur.com/y02EDxc.png](https://i.imgur.com/y02EDxc.png)](https://i.imgur.com/y02EDxc.png)


## Testing

```sh
npm test
```


## Thanks

Special thanks to these awesome projects/people making this possible :heart:

 * [React](https://facebook.github.io/react/)
 * [Redux](https://rackt.github.io/redux/)
 * [Babel](https://babeljs.io/) - for ES6 support
 * [redux-boilerplate](https://github.com/chentsulin/redux-boilerplate) by [chentsulin](https://github.com/chentsulin) - this boilerplate is based off his project
 * [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) by [gaearon](https://github.com/gaearon) - as a base for the hot reloading and error handling
 * [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors) by [gaearon](https://github.com/gaearon) - error handling
 * [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) by [gaearon](https://github.com/gaearon) - hot reloading
 * [redux-devtools](https://github.com/gaearon/redux-devtools) by [gaearon](https://github.com/gaearon)
 * [redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant) by [leoasis](https://github.com/leoasis) - detect state mutations


## License

redux-boilerplate: MIT © [C.T. Lin](https://github.com/chentsulin)

redux-undo-boilerplate: MIT © [Daniel Bugl](https://github.com/omnidan)

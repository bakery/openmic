# Documentation

- [General](general)
  - [Prerequisites](general/prerequisites.md)
  - [Features](general/features.md)
  - [**Commands**](general/commands.md)
  - [Files](general/files.md)
  - [Server Configurations](general/server-configs.md)
  - [FAQ](general/faq.md)
- [Testing](testing)
  - [Unit Testing](testing/unit-testing.md)
  - [Component Testing](testing/component-testing.md)
  - [Remote Testing](testing/remote-testing.md)
- [CSS](css)
  - [PostCSS](css/postcss.md)
  - [CSS Modules](css/css-modules.md)
  - [sanitize.css](css/sanitize.md)
- [JS](js)
  - [Redux](js/redux.md)
  - [ImmutableJS](js/immutablejs.md)
  - [reselect](js/reselect.md)
  - [redux-saga](js/redux-saga.md)
  - [routing](js/routing.md)

## Overview

### Development

Run `$ npm start` to see your app at `localhost:3000`!

### Building & Deploying

1. Run `$ npm run build`, which will compile all the necessary files to the
`build` folder.

2. Upload the contents of the `build` folder to your web server's root folder.

### Structure

The [`app/`](app) directory contains your entire application code, including CSS,
JavaScript, HTML and tests.

The rest of the folders and files only exist to make your life easier, and
should not need to be touched.

*(If they do have to be changed, please [submit an issue](https://github.com/mxstbr/react-boilerplate/issues)!)*

### CSS

Each component `import`s its styling dependencies from a co-located `styles.css`
module.

A production build transpiles these modules into page-specific CSS files (based
on which components are actually used), while any shared styles are automatically
extracted into a "common" stylesheet.

This means the leanest, fastest payload for your users.

See the [CSS documentation](./css/README.md) for more information about PostCSS
and CSS modules.

### JS

We bundle all your clientside scripts and chunk them into several files using
code splitting where possible. We then automatically optimize your code when
building for production so you don't have to worry about that.

See the [JS documentation](./js/README.md) for more information about the
JavaScript side of things.

### Testing

For a thorough explanation of the testing procedure, see the
[testing documentation](./testing/README.md)!

#### Performance testing

With the production server running (i.e. while `$ npm run serve` is running in
another tab), enter `$ npm run pagespeed` to run Google PageSpeed Insights and
get a performance check right in your terminal!

#### Browser testing

`$ npm run serve` makes your locally-running app globally available on the web
via a temporary URL: great for testing on different devices, client demos, etc!

#### Unit testing

Unit tests live in `test/` directories right next to the components being tested
and are run with `$ npm run test`.

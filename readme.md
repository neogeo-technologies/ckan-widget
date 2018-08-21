[![Build Status](https://travis-ci.org/keitaroinc/ckan-widget.svg?branch=master)](https://travis-ci.org/keitaroinc/ckan-widget)
[![Coverage Status](https://coveralls.io/repos/github/keitaroinc/ckan-widget/badge.svg?branch=master)](https://coveralls.io/github/keitaroinc/ckan-widget?branch=master)

# Ckan Widget

JS integration library for CKAN data catalog

## Instalation

``
cd ckan-widget
npm install && npm start
``

Then open http://localhost:3000/ to see the widget app.

## Bundle app

To bundle ckan widget for production run
```
cd ckan-widget && npm run build
```

Minified bundle should be created inside build directory.

## Test run
```
cd ckan-widget && npm test
```
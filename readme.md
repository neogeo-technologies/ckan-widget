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

##  Integrate the widget

First create an optimized production build
```
cd ckan-widget && npm run build
```

There is a simle HTML file(build/index.html) which integrates the widget. After running npm build you should be able to open the index.html from build folder, in browser with `doubleclick` from file location, without the need of npm or any server.


If you want to ingerate the Widget in your custom HTML page then copy the `build/static ` folder in the same folder where HTML page is. HTML page example:
```
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>

  <body>
    <h1>CKAN Widget</h1>
    <div id="root"></div>
  </body>

  <link href="static/css/main.3abdae2f.css" rel="stylesheet" />
  <script src="static/js/main.4a14f83a.js" type="text/javascript"></script>
</html>
```
There must be `<div id="root"></div>` because the Widget looking for `div` element with id `root`.

**Note:** Passing config variable to the Widget is still work in progress.

## Test run
```
cd ckan-widget && npm test
```
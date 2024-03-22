[![Build Status](https://travis-ci.org/neogeo-technologies/ckan-widget.svg?branch=master)](https://travis-ci.org/neogeo-technologies/ckan-widget)
[![Coverage Status](https://coveralls.io/repos/github/neogeo-technologies/ckan-widget/badge.svg?branch=master)](https://coveralls.io/github/neogeo-technologies/ckan-widget?branch=master)

# Ckan Widget

JS integration library for CKAN data catalog


## Quickstarter

You have a fully functional widget in the "build" folder. It is made of an index.html file and some css and js files. Look inside the index.html to see the parameters you can set, and the filters you can play with. Make the "ckan_api" parameter point towards the CKAN instance you want to integrate. Copy this part into your own web page if you wish so. See the app.css file to change the styles and colors of the widget, and make it fit your own environment.

See below for full developpers instructions.

## Prerequisites

__Node <= 16__


## Installation

```
cd ckan-widget

npm install && npm start
```

Then open http://localhost:3000/ to see the widget app.

## Bundle app

To bundle ckan widget for production run
```
cd ckan-widget && npm run build
```

Minified bundle should be created inside build directory.

## Project Deleivery

Requierments: proceed with instalation

* Update the version number in ckan-widget/package.json
* Delete the build folder : `rm -Rf build`
* Build : `cd ckan-widget/ ; npm run build`
* Update the build id in this document and that the HTML snippets match the index.html generate by the build 
* Commit
* Tag
* Push on Github.com

##  Integrate the widget


There is a HTML file (build/index.html) which integrates the widget. You should be able to open the index.html from build folder
in browser with `doubleclick` from file location, without the need of npm or any server.

Full code of build/index.html file (the build version is minified, you should be able to make it readable usind a indenter program such as https://www.freeformatter.com/html-formatter.html) :

```HTML
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="./app.css" rel="stylesheet">
    <link href="./static/css/main.css" rel="stylesheet">
    <title>Catalogue CKAN</title>
    <link href="./static/css/main.4d1cfba5.chunk.css" rel="stylesheet">
  </head>
  <body>
    <div id="ckan-widget"></div>
    <script>!function(a){function e(e){for(var t,r,n=e[0],o=e[1],u=e[2],i=0,l=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(s&&s(e);l.length;)l.shift()();return p.push.apply(p,u||[]),f()}function f(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(p.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},c={1:0},p=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var t=this["webpackJsonpckan-widget"]=this["webpackJsonpckan-widget"]||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;f()}([])</script><script src="./static/js/2.85a3e85f.chunk.js"></script><script src="./static/js/main.404aabed.chunk.js"></script>
  </body>
  <script src="./static/js/main.js" type="text/javascript"></script>
  <script type="text/javascript">var config={};ckanWidget.init(config)</script>
</html>
```

### Integrate in HTML Page/Web App

To integrate the Widget in HTML page/Web App, take the JS and CSS files located at `build/static/js` and `build/static/css` and put wherever is suitable for the App/Page.
Then import the files in the Page. The format of the minified file names is main.id.chunk.js, x.y.chunk.js and main.id.chunk.css.
Also, you can rename the files if necessary.

The script line `<script>!function(a)...</script>` is *mandatory*, it load the CKAN Widget in the variable `ckanWidget`.
If you don't put it, you will have an error in the JavaScript console of the browser:
```
Uncaught ReferenceError: ckanWidget is not defined
```

Using the `public/app.css` you can change the style of the Widget. HTML page example:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="./app.css" rel="stylesheet">
    <link href="./static/css/main.4d1cfba5.chunk.css" rel="stylesheet">
    <title>Page Title</title>
  </head>

  <body>
    <div id="ckan-widget"></div>
  </body>

  <script>!function(a){function e(e){for(var t,r,n=e[0],o=e[1],u=e[2],i=0,l=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(s&&s(e);l.length;)l.shift()();return p.push.apply(p,u||[]),f()}function f(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(p.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},c={1:0},p=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var t=this["webpackJsonpckan-widget"]=this["webpackJsonpckan-widget"]||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;f()}([])</script>
  <script src="./static/js/2.85a3e85f.chunk.js"></script>
  <script type="text/javascript" src="./static/js/main.404aabed.chunk.js"></script>
  <script type="text/javascript">
    var config = {
      ckan_api: 'https://ckan-api.com',
      ckan_organizations: ['org1', 'org2'],
      ckan_groups: ['group1'],
      ckan_tags: ['tag1'],
      ckan_facets: {
        res_format: 'HTML',
        datatype: 'type'
      },
      data_sort: 'title_string asc',
      result_page_size: 25,
      thumbnails_display: true
    }

    // Will run the Widget with custom configuration
    ckanWidget.init(config)
  </script>
</html>
```

There must be `<div id="ckan-widget"></div>` because the Widget looking for `div` element with id `ckan-widget`.
This example shows how you can pass configurations parameters.

### Change the default style

The `public/app.css` file contains the default style of the Widget. You can change/override the predefined style by changing this file.
In order to change the color of the Dataset's title put the following style in the `public/app.css` along with the rest css:

```css
h4.title {
  color: rgb(194, 24, 185) !important
}
```

### Widget configuration
The Widget loads the configuration that is passed to the `init` function at start up. If configuration is not passed to the `init` function then, it starts with the default one. Here's an example of configuration object:
```
var config = {
      ckan_api: 'https://ckan-api.com',
      ckan_organizations: ['org1', 'org2'],
      ckan_groups: ['group1'],
      ckan_tags: ['tag1'],
      ckan_facets: {
        res_format: 'HTML',
        datatype: 'type'
      },
      facet_display: ['organization'],
      data_sort: 'title_string asc',
      result_page_size: 25,
      thumbnails_display: true,
      display_header: true,
      display_sidebar: true
    }
```

If you do not want to specify some configuration properties, just omit them. This is still valid configuration object:

```
var config = {
      result_page_size: 25,
      thumbnails_display: false
    }
```

Configuration properties:

* **ckan-api**: Ckan API URL. Default to the `trouver.datasud.fr` one.
* **ckan-organizations**: CKAN Organizations names to be retrieved. Default to All. Else, comma separated list of Organizations IDs.
* **ckan-groups**: CKAN Groups names to be retrieved. Default to All. Else, comma separated list of Groups IDs.
* **ckan-facets**: key-values pair to be used to filter on the facets.
* **ckan-tags**: CKAN Tags names to be retrieved. Default to All. Else, comma separated list of Tags IDs.
* **facet-display**: list of the facets to be displayed in the widget. Default to all. Else, comma separated list of facets names.
* **data-sort**: sorting mode to be used. Same than the CKAN ones (popularity, relevance, last_modified, alpha…). Default to `score desc, metadata_modified desc`.
* **result-page-size**: number of results per page(10, 25, 50, 100). Default to `10`. Max to `100`.
* **thumbnails-display**: boolean. Whether to display dataset's thumbnail or not. Default to `true`.
* **header-display**: boolean. Whether to display widget header and search bar
* **sidebar-display**: boolean. Whether to display the sidebar


### Set API Key

It is a little hard and tricky how to set the API Key securely. Fortunately [create-react-app](https://github.com/facebook/create-react-app) allows us to define environment variables while we are building the Widget by creating the `.env` file in the root of the project at the same level where `package.json` is. Afterward when we will integrate the Widget **there is no need** to define `.env` file or set the enviroment variable manually, it is only needed for building the Widget.

To define environment variable, create a file called .env in the root of the project:
```
REACT_APP_API_KEY="API-KEY"
```

Then build the Widget:
```
npm run build
```

The value of the API key is accessible in the Widget as `process.env.REACT_APP_API_KEY`.

**Note:** The environment variables define in `.env` file must begin with REACT_APP_.

## Test run
```
cd ckan-widget && npm test
```

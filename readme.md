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

There is a simple HTML file(build/index.html) which integrates the widget. After running npm build you should be able to open the index.html from build folder, in browser with `doubleclick` from file location, without the need of npm or any server. Just add these lines of code in order to run the Widget.

```
<script type="text/javascript">
  ckanWidget.init()
</script>
```

Full code of build/index.html file:

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="./manifest.json">
    <link rel="shortcut icon" href="./favicon.ico">

    <title>React App</title>

    <link href="./static/css/main.e0c20ecf.css" rel="stylesheet">
  </head>
  <body>

    <noscript>You need to enable JavaScript to run this app.</noscript>

    <div id="ckan-widget"></div>
    <script type="text/javascript" src="./static/js/main.52113898.js"></script>
    <script type="text/javascript">
      // Will run the widget with default cnfiguration
      ckanWidget.init()
    </script>
  </body>
</html>
```


If you want to ingerate the Widget in your custom HTML page then copy the `build/static` folder in the same folder where HTML page is. HTML page example:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="./static/css/main.e0c20ecf.css" rel="stylesheet">
    <title>Page Title</title>
  </head>

  <body>
    <div id="ckan-widget"></div>
  </body>

  <script src="./static/js/main.52113898.js" type="text/javascript"></script>
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

### Widget configuration
The Widget loads the configuration that is pass to the `init` function at start up. If configuration is not passed to the `init` function then, it starts with the default. Here's an example of configuration object:
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
      thumbnails_display: true
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
* **ckan-organizations**: CKAN Organizations IDs to be retrieved. Default to All. Else, comma separated list of Organizations IDs.
* **ckan-groups**: CKAN Groups IDs to be retrieved. Default to All. Else, comma separated list of Groups IDs.
* **ckan-facets**: key-values pair to be used to filter on the facets.
* **ckan-tags**: CKAN Tags IDs to be retrieved. Default to All. Else, comma separated list of Tags IDs.
* **facet-display**: list of the facets to be displayed in the widget. Default to all. Else, comma separated list of facets names.
* **data-sort**: sorting mode to be used. Same than the CKAN ones (popularity, relevance, last_modified, alpha…). Default to `score desc, metadata_modified desc`.
* **result-page-size**: number of results per page(10, 25, 50, 100). Default to `10`. Max to `100`.
* **thumbnails-display**: boolean. Whether to display dataset's thumbnail or not. Default to `true`.

## Test run
```
cd ckan-widget && npm test
```
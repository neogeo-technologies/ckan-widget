[![Build Status](https://travis-ci.org/neogeo-technologies/ckan-widget.svg?branch=master)](https://travis-ci.org/neogeo-technologies/ckan-widget)
[![Coverage Status](https://coveralls.io/repos/github/neogeo-technologies/ckan-widget/badge.svg?branch=master)](https://coveralls.io/github/neogeo-technologies/ckan-widget?branch=master)

# Ckan Widget

JS integration library for CKAN data catalog


## Quickstarter

You have a fully functional widget in the "build" folder. It is made of an index.html file and some css and js files. Look inside the index.html to see the parameters you can set, and the filters you can play with. Make the "ckan_api" parameter point towards the CKAN instance you want to integrate. Copy this part into your own web page if you wish so. See the app.css file to change the styles and colors of the widget, and make it fit your own environment. 

See below for full developpers instructions. 

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
    <link href="./app.css" rel="stylesheet">
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
      // Will run the widget with default configuration
      ckanWidget.init()
    </script>
  </body>
</html>
```

### Integrate in HTML Page/Web App

To integrate the Widget in HTML page/Web App, take the JS and CSS files located at `build/static/js`, `build/static/css` and `public/app.css` and put wherever is suitable for the App/Page. Then import the files in the Page. The format of the minified file names is `main.id.js` and `main.id.css`. Also, you can rename the files if necessary. Using the `public/app.css` you can change the style of the Widget. HTML page example:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="./app.css" rel="stylesheet">
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

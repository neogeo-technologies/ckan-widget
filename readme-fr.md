[![Build Status](https://travis-ci.org/neogeo-technologies/ckan-widget.svg?branch=master)](https://travis-ci.org/neogeo-technologies/ckan-widget)
[![Coverage Status](https://coveralls.io/repos/github/neogeo-technologies/ckan-widget/badge.svg?branch=master)](https://coveralls.io/github/neogeo-technologies/ckan-widget?branch=master)

# Widget Ckan

Bibliothèque d’intégration JS pour le catalogue de données CKAN

## Démarrage

Vous avez un widget entièrement fonctionnel dans le dossier "build". Il est composé d’un fichier index.html et de quelques fichiers css et js. Regardez dans le fichier index.html pour voir les paramètres que vous pouvez définir et les filtres avec lesquels vous pouvez jouer. Faites pointer le paramètre "ckan_api" vers l’instance CKAN que vous voulez intégrer. Copiez cette partie dans votre page web si vous le souhaitez. Voir le fichier app.css pour changer les styles et les couleurs du widget, et le rendre adapté à votre propre environnement.

Voir ci-dessous pour les instructions complètes des développeurs.

## Installation

```
cd ckan-widget

npm install && npm start
```

Ouvrez ensuite http://localhost:3000/ pour voir l’application widget.

## Application Bundle

Pour regrouper le widget ckan pour la production, exécutez la commande
```
cd ckan-widget && npm run build
```

Le paquet compressé doit être créé dans le répertoire racine du projet.

## Livraison du projet

Pré-requis : avoir procédé à l'installation

* mettre à jour le numero de version dans le ckan-widget/package.json
* Supprimer le dossier build : `rm -Rf build`
* Génerer le build : `cd ckan-widget/ ; npm run build`
* Mettre à jour les id de build dans ce document et controler de les fichiers HTML correspondant au résultat du build.
* Commiter
* Faire un tag avec la version
* Pousser sur Github.com

## Intégrer le widget


Il y a un fichier HTML (build/index.html) qui intègre le widget. Vous devriez être en mesure d’ouvrir le fichier index.html à partir du dossier build, dans le navigateur avec `doubleclick` depuis l’emplacement du fichier, sans avoir besoin de npm ou de n’importe quel serveur.

Code complet du fichier build/index.html (la version issue du `npm run build` est minifiée, vous pouvez la rendre lisible en collant le fichier dans un indenteur de code comme https://www.freeformatter.com/html-formatter.html) :

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

### Intégration dans une page HTML/une application Web

Pour intégrer le Widget dans la page HTML/Web App, prenez les fichiers JS et CSS situés dans `build/static/js` et `build/static/css` et placez-les où cela convient pour l’application ou la page.
Importez ensuite les fichiers dans la page. Le format des noms de fichiers compressés est main.id.chunk.js, x.y.chunk.js et main.id.chunk.css.
Vous pouvez également renommer les fichiers si nécessaire.

En utilisant le fichier `public/app.css`, vous pouvez changer le style du Widget.

La ligne de script `<script>!function(a)...</script>` est *obligatoire*, elle permet de charger la variable `ckanWidget`.
Si vous l'ometez, vous aurez une erreur dans la console JavaScript du navigateur:
```
Uncaught ReferenceError: ckanWidget is not defined
```

Exemple de page HTML :

```HTML
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

Il doit y avoir `<div id="ckan-widget"></div>` car le Widget recherche l'élément `div` avec l'id `ckan-widget`.
Cet exemple montre comment vous pouvez passer des paramètres de configuration.


### Changer le style par défaut

Le fichier `public/app.css` contient le style par défaut du Widget. Vous pouvez modifier/remplacer le style prédéfini en changeant ce fichier.
Pour changer la couleur du titre du jeu de données, mettez le style suivant dans le fichier `public/app.css` avec le reste des css :

```css
h4.title {
  color: rgb(194, 24, 185) !important
}
```

### Configuration du widget

Le Widget charge la configuration renseignée dans la fonction `init` au démarrage. Si la configuration n’est pas indiquée dans la fonction `init`, alors elle commence par celle par défaut. Voici un exemple d’objet de configuration :
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

Si vous ne voulez pas spécifier certaines propriétés de configuration, omettez-les. Il s’agit toujours d’un objet de configuration valide :

```
var config = {
      result_page_size: 25,
      thumbnails_display: false
    }
```

Propriétés de configuration :

* **ckan-api** : URL de l’API de Ckan. Par défaut, `trouver.datasud.fr`.
* **ckan-organizations** : noms des organisations CKAN à récupérer. Par défaut All. Sinon, liste des ID des organisations séparés par des virgules.
* **ckan-groups** : noms de groupes CKAN à récupérer. Par défaut All. Sinon, liste des ID de groupes séparés par des virgules.
* **ckan-facets** : paire de valeurs clés à utiliser pour filtrer les champs.
* **ckan-tags** : noms des tags CKAN à récupérer. Par défaut All. Sinon, liste d’identifiants séparés par des virgules.
* **facet-display** : liste des champs à afficher dans le widget. Par défaut all. Sinon, liste de noms de champs séparés par des virgules.
* **data-sort** : mode de tri à utiliser. Identique à ceux de CKAN (popularité, pertinence, last_modified, alpha…). La valeur par défaut est `score desc, metadata_modified desc`.
* **result-page-size** : nombre de résultats par page (10, 25, 50, 100). Valeur par défaut : `10`. Maximum : `100`.
* **thumbnails-display** : booléen. Affichage de la vignette de l’ensemble de données. Par défaut `true`.
* **header-display** : booléen. Affichage de l’en-tête du widget et de la barre de recherche.
* **sidebar-display** : booléen. Affichage de la barre latérale.

### Définir la clé API

Il est un peu difficile de définir la clé API en toute sécurité. Heureusement, [create-react-app] (https://github.com/facebook/create-react-app) nous permet de définir des variables d’environnement pendant que nous construisons le Widget en créant le fichier `.env` dans la racine du projet au même niveau que le fichier `package.json`. Ensuite, quand nous intégrerons le Widget, **il ne sera pas nécessaire** de définir le fichier `.env` ou de définir la variable environnement manuellement, il n'est nécessaire que pour construire le Widget.

Pour définir la variable d’environnement, créez un fichier nommé `.env` à la racine du projet :
```
REACT_APP_API_KEY="API-KEY"
```

Construisez ensuite le Widget :
```
npm run build
```

La valeur de la clé API `process.env.REACT_APP_API_KEY` est accessible dans le Widget.

**Note :** Les variables d’environnement définies dans le fichier `.env` doivent commencer par REACT_APP_.

## Exécution du test

```
cd ckan-widget && npm test
```

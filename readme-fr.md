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

## Intégrer le widget

Créez d’abord une production optimisée
```
cd ckan-widget && npm run build
```

Il y a un simple fichier HTML (build/index.html) qui intègre le widget. Après l’exécution de npm build, vous devriez être en mesure d’ouvrir le fichier index.html à partir du dossier build, dans le navigateur avec `doubleclick` depuis l’emplacement du fichier, sans avoir besoin de npm ou de n’importe quel serveur. Il suffit d’ajouter ces lignes de code afin d’exécuter le Widget.

```
<script type="text/javascript">
  ckanWidget.init()
</script>
```

Code complet du fichier build/index.html :

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

### Intégration dans une page HTML/une application Web

Pour intégrer le Widget dans la page HTML/Web App, prenez les fichiers JS et CSS situés dans `build/static/js`, `build/static/css` et `public/app.css` et placez-les où cela convient pour l’application ou la page. Importez ensuite les fichiers dans la page. Le format des noms de fichiers compressés est main.id.js et main.id.css. Vous pouvez également renommer les fichiers si nécessaire. En utilisant le fichier `public/app.css`, vous pouvez changer le style du Widget. Exemple de page HTML :
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

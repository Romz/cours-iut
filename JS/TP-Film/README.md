# TP - API TMDB

## Introduction
L’idée est de partir d’une API existante mettant à disposition des informations sur des films / séries
TV.

L’API de ce site se trouve ici > https://www.themoviedb.org/discover/movie

L’API s’intègre avec la quasi-totalité des langages.
L’objectif étant de réaliser une interface graphique s’appuyant sur cette API

## Fonctionnalités

L'application devra au minimum proposer:
- Une page de listing de films (les plus populaire, les plus récents etc.)
- Une page "détails" d'une fiche de film
- Un moteur de recherche

Les pages de listing devront proposer des liens vers les pages de détails

## Bonus
- Proposer divers filtres pour le moteurs de recherche (Par acteurs, par genres etc)
- Ajouter une gestion de mise en favoris des films
- Ajouter une pagination dans la recherche
- Faire la navigation des pages en AJAX


## Conseils
- Vous pouvez utiliser des librairies graphique type Bootstrap ou autre.
- N'hésitez pas à me demander de l'aide si vous êtes bloqué

## Utilisation de l'API

Pour utiliser l'api, vous devez utiliser l'url http://api.themoviedb.org/3/
Il faut ajouter les actions à effectuer à l'url, et les paramètres en GET.

Pour chaque requête, il faut ajouter la clé api en paramètre (?api_key=58f8fe741b03b0ae4c9a2ed080e94041)

Vous pouvez trouver la documentation ici:
https://www.themoviedb.org/documentation/api/discover

## Exemples d'utilisation de l'api

Voici quelques exemples d'utilisation de l'api:

### Les films populaires

http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58f8fe741b03b0ae4c9a2ed080e94041

### Faire une recherche

https://api.themoviedb.org/3/search/movie?query=LA_RECHERCHE&api_key=58f8fe741b03b0ae4c9a2ed080e94041

### Récupérer les informations d'un film

https://api.themoviedb.org/3/movie/ID_FILM?api_key=58f8fe741b03b0ae4c9a2ed080e94041

## Les images

L'api ne retourne que les nom des images. Pour récupérer une url utilisable, la faut préfixer le nom du fichier avec l'url de base des images.
Voici le format des urls:

http://image.tmdb.org/t/p/TAILLE_IMAGE/NOM_FICHIER

Voici une liste de tailles d'images:
w185, w300, w500, w1000

Par exemple: 
http://image.tmdb.org/t/p/w1000/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg

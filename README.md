# Initiation au développement Web - Pratique

## Anatomie d'une requête HTTP


### Utilisation directe du navigateur

_(En guidé, partir de session private browsing)_
_Note : sous FF, Ctrl+F5 pour rechargement sans cache

1. Dans le navigateur, ouvrir les outils de développement, partie réseau.
Ouvrir la page http://example.com.

 Identifier
 * la méthode HTTP
 * la ressource
 * les entêtes de la requête
 * le corps

 Identifier
 * le code statut, le message de statut
 * les entêtes de la réponse
 * le corps de la réponse
 * Le(s) temps réseau

2. Recharger la page (F5). Identifier les changements

 * code/message d'état

 _Mise en garde :Tous les navigateurs n'ont pas le meme comportement pur les rechargements _

3. Avec firefox, montrer la différence quand on change l'url en https://example.com

 _juste une monstration, pas insister ; pas possible directement avec chrome)_

4. En utilisant https://developer.github.com/v3/ sur le serveur https://api.github.com/
 * Lister les 'repositories' de l'utilisateur octocat
 * Lister les branches du 'repository' Spoon-Knife


## HTML & CSS

Plusieurs étapes, même page web.

1. (HTML) On crée une page qui modélise la gestion des pensionnaires d'une boutique animalière.
  Un modèle donné, on a deux sections, une section où on créera les entrées, laissée vide dans un premier temps
  et une ou on affiche la liste des animaux avec les informations s'y rapportant.
  Dans un premier temps, la liste est statique et fait partie de la page.
  _On ne se préoccupe pas de la mise en forme._

2. (CSS) Prise en compte du style sur la page.
  Un modèle est donné. La reproduction exacte n'est pas nécessaire.
  Élements importants :

  * D'abord le positionnement (dimensions, marges, padding, display)

    _Noter que des modifications de la structures peuvent être nécessaires !_
  * Ensuite les attributs de texte et couleurs

3. (JS+DOM) Ajout d'interaction (simple)
  La liste des pensionnaires n'est plus statisue mais est gérée dans un modèle (en mémoire).
  Ajout des éléments de type formulaire pour saisir des nouveaux animaux.
  Affichage de la liste des animaux en fonction du modèle.

4. (JS+DOM) Plus d'interaction : supprimer une entrée
  Chaque entrée de la liste affichée affiche un bouton qui déclenche sa suppression.

5. (JS+DOM) Initialisation "page vide"
  Le document HTML ne contient qu'une structure squelette. Les éléments sont ajoutés par le
  JS à l'initialisation.

  _On commence à ressentir le besoin des systèmes de templates_
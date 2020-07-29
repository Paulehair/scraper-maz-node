# scraper-maz-node

Outil permettant de scraper les ids des pages édito

## Prérequis
node v10.18.1

## Installation
<code>yarn install</code>

## Lancer la récupération des ids

##### Sur les pages collection et plp 
<code>yarn start</code>

##### Sur les pages plp avec des gridplaceholder
L'édito gère l'affichage du contenu mobile grâce à la taille de la fenêtre du navigateur, les ids des composant mobile ne peuvent donc pas être scrappées via une requete http.
L'outil ne fournira donc que les ids desktop des gridplaceholder

<code>yarn start --grid</code>

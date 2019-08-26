# SenscritiqueLovemeter
Le but de cette extension est de **prédir avec le plus de certitude** si une oeuvre se vera attribuer une bonne note par l'utilisateur actif.

Pour celà, chaque page chargée dans le navigateur sera **analysée** et ses **données récupérées** dans une base de données.

Ainsi, des algorithme opérants sur cette base pourront se baser sur le maximum de données pour prédir une note sur 100.

# Etapes du développement de la version 2

# I. Récupération des données

Dans un premier temps, l'extention Chrome devra être capable de **récupérer des données** sur la page et de prouver qu'elles sont bien cohérentes.

Ces données, les plus facilement retrouvables, serviront de tests avant la version finales :
- La note générale
- La note moyenne des éclaireur
- Le nombre de notes

Par la suite, il faudra récuperer les données suivantes :
- Réalisateurs (Films, Séries)
- Genres (Films, Séries, Jeux-vidéos, Livres, Musique)
- Durée (Films)
- Date de sortie (Films, Séries, Jeux-vidéos, Livres, BD, Musique)
- Nombre de saisons (Séries)
- Diffuseur (Séries)
- Durée moyenne (Séries)
- Développeurs (Jeux-vidéos)
- Editeurs (Jeux-vidéos, Livres)
- Plateformes (Jeux-vidéos)
- Auteur (Livres, BD)
- Artiste (Musique)
- Label (Musique)

Plus difficile, les données suivantes sont présentes sur une autre partie du site :
- "Top" à laquelle l'euvre est liée et son classement
- Acteurs (Films, Séries)
- Scénaristes (Films, Séries)
- Producteurs (Films, Séries)
- Distributeurs (Films)
- Pays d'origine (Films, Séries)
- Budget (Films)
- Multijoueur (Jeux-vidéos)
- PEGI (Jeux-vidéos)
- Violence (Jeux-vidéos)
- Illustrateurs (Livres)
- Traducteurs (Livres)
- Langue d'origine (Livres, BD)
- Dessinateurs (BD)

# II. Création de la BDD

Une base de données devra être créée en conséquence et pourra contenir les **différents types d'oeuvres** tout en facilitant la taches des **algorithmes prédictifs**.

# III. Création des algorithmes prédictifs

Pour le moment, je pense faire un simple croisement des informations récurentes pour chaque champs cité ci-dessus.

Pour **S** = Nombre de similitudes entre deux oeuvres, alors **Total** = S exposant S.

On divise ensuite Total par le nombre d'oeuvres testées, ce qui nous donne une note crédible.

En résumé, plus d'informations sont en commun avec l'oeuvre testée, plus la note attribuée à celle-ci sera importante lors de l'estimation du résultat.


Exemple: Un utilisateur veut voir un film d'action de 2010.


L'algorithme va sonder la base de données à la recherche de films vus par cet utilisateur et qui ont au moins un point commun avec le film testé.

BINGO, deux films.

Le premier (F1) est un film d'action ayant obtenu 7 de l'utilisateur.

Le deuxième (F2) est un film d'action ayant obtenu 9 de l'utilisateur.

Diviseur (D).


Nous avons donc:

F1 = 7 * 1^1 = 7 * 1 = 7

F2 = 9 * 2^2 = 9 * 4 = 36

D = 1^1 + 2^2 = 1 + 4 = 5


**Note estimée = (F1 + F2) / D = (7 + 36) / 5 = 43 / 5 = 8.6**


Bien évidement en se basant sur deux notes l'algorithme ne sera pas précis, mais certains utilisateurs ont noté plus de 1000 oeuvres.

Un pourcentage de précision fictif sera remonté à l'utilisateur, il se basera simplement sur le nombre d'oeuvres ayant un point en commun avec l'oeuvre testée.

50 oeuvres testées = 50% de précision

50 oeuvres testées = 80% de précision

Un maximum de 90% sera appliqué, pour ne pas tromper l'utilisateur dans la démarche de l'extension)

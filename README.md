# projet_collectif_extension_navigateur\_\_zoulfat_carlos_mathilde

repo git extension navigateur de Zoulfat - Carlos - Mathilde promo Emma Watson

<!--
1 - Save images that are with a quality superior to x*y px quality;
2 - Highlight all words that match a certain keyword and give a translation for all of them, having into account each case, translating one word before one word after;
3 - Give a certain inclination to all the text (45°, 90°, 135°, 170°, 215°);

4 - Funny 1984 censorship, replace all the words style that arent under a certain rule book to be followed;
-----------------------------------------------------------------------------------------------------------

 Grandes tâches à réaliser:

--> manifest.json
--> trouver un petit logo

--> Depuis l'extension, analyser le DOM
 1 - créer une liste de variables de mots trigger 
 2 - découper les éléments du DOM qui comportent du texte (titre et article)
 3 - analyse des mots => découper le texte en mots => fonction (JUSTE MOTS TRIGGER)
 4 - comparer les mots grâce à la variable des mots trigger

--> Changer le texte du DOM par d'autres mots
 5 - créer une variable des mots de remplacements (ex: BUTTERFLY + LA CLASSE)
 6 - comment les ajouter au DOM et comment ajouter le style CSS?

 --> Visuel
 7 - Structure de l'extension

-----------------------------------------------------------------------------------------------------------

30/04/2024
--> peer-programming pour créer le manifest et fichier script
--> répartir les tâches 
--> travailler chacun de son côté sur les fonctionnalités

MATHILDE = fonctions analyse texte (découpage mots) cutStr + regarder compare string (step 1 2 3 4)
ZOULFAT = mots de remplacement + extension apparence 
CARLOS = fonction analyse et change le mot trigger par le mot de remplacement -- comment select et change les mots du DOM

-----------------------------------------------------------------------------------------------------------

Problématiques:
-- un CSS pour le site et un CSS pour l'extension (mettre en deux fichiers si long sinon un seul fichier)
-- selectionner les bons éléments du DOM
-- comment et quand appeler les fonctionnalités?

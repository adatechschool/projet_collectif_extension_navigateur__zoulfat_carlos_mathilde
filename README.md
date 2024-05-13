# projet_collectif_extension_navigateur_zoulfat_carlos_mathilde

OBJECTIF --
- Créer une extension Chrome qui remplace des mots par des équivalents plus "child friendly" en tenant compte du genre, du nombre et de la nature grammaticale du mot.


ÉTAPES --
1 - Définition des règles de remplacement:
Créer une liste de mots à remplacer et de leurs équivalents correspondants.
Classer les mots par genre, nombre et nature grammaticale (adjectif, nom, verbe).

2 - Écriture des expressions régulières:
Utiliser des expressions régulières pour capturer les mots à remplacer en tenant compte des variations de genre, nombre et nature grammaticale.
Par exemple, pour remplacer "meurtre" par "bobo très grave", on peut utiliser l'expression régulière /(meurtres?meurtrière?s?)\b/g.

3 - Implémentation dans l'extension Chrome:
Dans le fichier content.js, injecter le code JavaScript qui effectue le remplacement des mots.
Utiliser la fonction replace() de l'objet RegExp pour remplacer chaque occurrence d'un mot par son équivalent child friendly.
Gérer les cas particuliers où le mot est utilisé dans une expression plus complexe (par exemple, "la fille pauvre").

4 - Gestion du contenu dynamique:
- Si le contenu de la page est dynamique (par exemple, des commentaires d'utilisateurs), utiliser une mutation observer pour détecter les changements de contenu et appliquer les remplacements en conséquence.


DIFFÉRENTS FICHIERS --
BACKGROUND.JS (propre aux extensions Chrome)
1 - Gérer les événements de clic sur les icônes d'extension et les boutons contextuels
2 - Injecter des scripts et du CSS dans les pages Web
3 - Communiquer avec les scripts de contenu et les fenêtres contextuelles
4 - Stocker et récupérer des données dans le stockage local
5 - Gérer les notifications et les requêtes réseau
7 - Exécuter des tâches asynchrones sans bloquer l'interface utilisateur

MANIFEST.JSON 
1 - Ce fichier est le manifeste de l'extension Chrome
2 - Il définit les métadonnées de monextension, telles que le nom, la description, les permissions et les points d'entrée (fichiers JavaScript)

SCRIPT.JS
1 - Ce fichier est généralement exécuté du contenu sur la de la page web, ce qui signifie qu'il peut interagir avec le contenu de la page
2 - Il peut potentiellement utiliser des modules ES pour organiser et gérer le code

CONTENT.JS
1 - Ce fichier sert à exécuter du contenu sur la de la page web et peut interagir avec le contenu de la page
2 - Comme SCRIPT.JS, il peut potentiellement utiliser des modules ES pour structurer le code

BACKGROUND.JS: Ce fichier JavaScript s'exécute en arrière-plan et n'a pas d'accès direct au contenu de la page Web. Il est généralement utilisé pour des tâches en arrière-plan, comme la communication avec des serveurs ou la gestion des événements de l'extension. Il n'utilise généralement pas de modules ES.


(1) regex regular expression 
=> Une expression régulière (ou expression rationnelle) est un élément existant dans la plupart des langages de programmation. En JavaScript, les expressions régulières sont implémentées au travers de l'objet natif RegExp.

Il s'agit d'une chaîne de caractères permettant la recherche et le remplacement de motifs. C'est une expression quasi mathématique composée d'une combinaison de codes représentants des schémas possibles de chaînes. Elle permet d'automatiser des traitements complexes sur les chaînes de caractères à des fins de recherche, d'extraction, de comparaison, de transcodage… La syntaxe d'une expression rationnelle est injustement réputée difficile. Sa notation suit des règles simples et strictes mais permet de formuler dans une expression compacte un motif complexe. 

let regex = new RexExp(modèle, options); 
-> /modèle : "\\b" + mot + "\\b" => \\cancel special char so => \b test une position
-> option : g => global => will return all the matches (not only first occurence)
-> option : i => insensitive-case => will apply it upper and lowercase


(2) objet dico {key = valeur}

Accès à la valeur associée à la clé "abandon"
->console.log(dico["abandon"]); // print "oubli de câlin"

Ou used notation point si key est une chaîne de caractères valide.
-> console.log(dico.abandon); // print "oubli de câlin"

-> "abandon" = key et "oubli de câlin" est valeur
-----------------------------------------------------------------------------------------------------------

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

 - fonction découper les mots
 - fonction remplace ce mot par ce mot
 - 

--> Changer le texte du DOM par d'autres mots
 5 - créer une variable des mots de remplacements (ex: BUTTERFLY + LA CLASSE)
 6 - comment les ajouter au DOM et comment ajouter le style CSS?

 --> Visuel
 7 - Structure de l'extension
-----------------------------------------------------------------------------------------------------------

Problématiques:
-- un CSS pour le site et un CSS pour l'extension (mettre en deux fichiers si long sinon un seul fichier)
-- selectionner les bons éléments du DOM
-- comment et quand appeler les fonctionnalités?

-----------------------------------------------------------------------------------------------------------

HTML:

h1,h2,h3,h4,h5,p,a,span,caption => tous les elements html contenant du texte => utile for fonction analyze text, cut it into
words, swap the triggering one with the correct one

-----------------------------------------------------------------------------------------------------------

30/04/2024
--> peer-programming pour créer le manifest et fichier script
--> répartir les tâches 
--> travailler chacun de son côté sur les fonctionnalités

MATHILDE = fonctions analyse texte (découpage mots) cutStr + regarder compare string (step 1 2 3 4)
ZOULFAT = mots de remplacement + extension apparence 
CARLOS = fonction analyse et change le mot trigger par le mot de remplacement -- comment select et change les mots du DOM

-----------------------------------------------------------------------------------------------------------

02/05/2024
--> 

MATHILDE = 
ZOULFAT = 
CARLOS = 

-----------------------------------------------------------------------------------------------------------

06/05/24
--> rajouter gradiant mots changés en surbrillance

ZOULFAT = améliorer l'extension, rajouter un dico pour les utilisateurs
MATHILDE = test content et lancer l'extension regex + un peu de CSS quand j'ai over de trier ce code
CARLOS = bien prendre en compte tout le texte sur les sites et comprendre l'archi + un peu de CSS

-----------------------------------------------------------------------------------------------------------

07/05/24
--> rajouter gradiant mots changés en surbrillance

ZOULFAT = mettre l'icone en clic droit
MATHILDE = test avec html mon code + gradient surbrillance
CARLOS = je ne sais pas (avec un petit ton méprisant) + gérer les titres de photo wiki + liens externes
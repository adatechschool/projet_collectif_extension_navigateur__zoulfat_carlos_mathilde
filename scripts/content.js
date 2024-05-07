"use strict"; /* protéger le code des bugs JS vanilla, erreurs de types par exemple*/

/* Key = Valeur JSON */
const dico = {
    "abandon": "oubli de câlin",
    "abandons": "oublis de câlins",
    "abus": "câlins trop forts",
    "abusés": "câlinés trop forts",
    "agression": "chatouilles méchantes",
    "agressions": "chatouilles méchantes",
    "alcool": "jus de fruits pétillant",
    "alcools": "jus de fruits pétillants",
    "anxiété": "petit coup de vent",
    "anxiétés": "petits coups de vent",
    "brutalité": "chatouilles pas gentilles",
    "brutalités": "chatouilles pas gentilles",
    "cancer": "bobo invisible",
    "cancers": "bobos invisibles",
    "catastrophe": "gros chamboulement",
    "catastrophes": "gros chamboulements",
    "crime": "bêtise trop grande",
    "crimes": "bêtises trop grandes",
    "décès": "grand sommeil",
    "défaite": "pas de réussite",
    "défaites": "pas de réussites",
    "dépression": "gros nuage noir",
    "dépressions": "gros nuages noirs",
    "détresse": "gros chagrin",
    "détresses": "gros chagrins",
    "désastre": "petite erreur de calcul",
    "désastres": "petites erreurs de calcul",
    "désastre écologique": "petite erreur pour la planète ",
    "désastres écologiques": "petites erreurs pour la planète ",
    "détresse": "gros chagrin",
    "détresses": "gros chagrins",
    "dette": "petit nuage de sous",
    "dettes": "petits nuages de sous",
    "discrimination": "câlins pour tous",
    "discriminations": "câlins pour tous",
    "divorce": "deux maisons",
    "divorces": "deux maisons",
    "drogue": "bonbons magiques",
    "drogues": "bonbons magiques",
    "échec": "pas de souci",
    "échecs": "pas de soucis",
    "enlèvement": "oubli de bisou",
    "enlèvements": "oublis de bisous",
    "émeute": "fête trop bruyante",
    "émeutes": "fêtes trop bruyantes",
    "épuisement": "besoin d'une petite sieste",
    "épuisements": "besoins de petites siestes",
    "escroquerie": "blague pas drôle",
    "escroqueries": "blagues pas drôles",
    "famine": "grosse faim",
    "famines": "grosses faims",
    "fausse couche": "montée au ciel du bébé",
    "fausses couches": "montées au ciel du bébé",
    "guerre": "bataille de chatouilles",
    "guerres": "batailles de chatouilles",
    "haine": "méchanceté accrue",
    "haines": "méchancetées accrues",
    "haineuse": "grosse méchante",
    "haineux": "gros méchants",
    "harcèlement": "chatouilles gênantes",
    "harcèlements": "chatouilles gênantes",
    "malade": "la personne qui a bobo",
    "malades": "les personnes qui ont bobo",
    "maladie": "bobo",
    "maladies": "les bobos",
    "mort": "gros dodo",
    "morts": "ceux qui font un gros dodo",
    "néonazi": "le vilain méchant",
    "néonazie": "la vilaine méchante",
    "néonazis": "les vilains méchants",
    "néonazies": "les vilaines méchantes",
    "néonazisme": "le parti des vilains méchants",
    "prostituée": "femme de joie",
    "prostituées": "femmes de joies",
    "suicide": "dernier train pour l'au-delà",
    "tabac": "fumée mauvaise pour les poumons",
    "terrorisme": "vilain méchant",
    "trafic": "échange de jouets",
    "trafics": "échanges de jouets",
    "trafic de drogue": "échange de bonbons magiques",
    "trafics de drogue": "échanges de bonbons magiques",
    "violence": "bataille de peluches",
    "violences": "batailles de peluches",
    "violence sexuelle": "bisou non autorisé",
    "violences sexuelles": "bisous non autorisés",
    "viol": "bisou non consenti",
    "viols": "bisous non consenti",
  };

function switchNames() {
/* select elements to check */
let selectedElements = document.querySelectorAll(
  "h1, h2, h3, h4, h5, p, span, caption, b, em, label, aria-label, yt-formatted-string, div"
)};

// Fonction pour modifier le contenu texte de chaque élément
function modifyTextContent(node) { /* SECOND: */
  // Séparation du contenu texte en mots
  const words = node.textContent.split(" "); /* transform text en mot */
  // Map chaque mot pour vérifier s'il correspond à un mot du dictionnaire
  const modifiedWords = words.map((word) => { /* save dans const mes mots */
    const lowerCaseWord = word.toLowerCase(); /* save dans const mes mots all lower */
    if (dico.hasOwnProperty(lowerCaseWord)) { /*includes mais version objet dico */
      return `<span class="word_style" style="background: #ffe7e8; border: 2px solid #e66465">${dico[lowerCaseWord]}</span>`; /* word_Style le mot à changer */
    }
    return word;
  });
  /* Cette fonction prend en entrée un nœud DOM text et remplace chaque mot contenu dans ce nœud par sa version modifiée si nécessaire. Elle utilise le dictionnaire dico pour effectuer les remplacement */

  // Joindre les mots en une chaîne
  const newTextContent = modifiedWords.join(" "); /* valeur repatch ce qu'on a .split */
  // Si des modifications ont été apportées, mettre à jour le nœud avec un nouvel élément span
  if (node.textContent !== newTextContent) { /* child (text original) != modifiedWords */
    const newSpan = document.createElement("span"); /* donc là je créé un autre span autre que celui de class="word_style" <span> <span> class=word_style </span> </span> */
    newSpan.innerHTML = newTextContent;
    node.parentNode.replaceChild(newSpan, node);
  }
}

/* Fonction pour remplacer les mots sur le site web */
function swapWordsOnWebsite() {
  // Utilisation de Object.keys() pour obtenir les clés de l'objet dico
    Object.keys(dico).forEach(mot => {
      const regex = new RegExp("\\b" + mot + "\\b", "gmi");
      texte = texte.replace(regex, dico[mot]);
    });
    return texte;
  }

  /* sélection el textuels */
  let selectedElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, p, span, caption, b, em, label, aria-label, yt-formatted-string" /* tous les el textuels */
  );

  selectedElements.forEach((el) => { /* FIRST: select les el du siteweb */ /* pas un array, mais node list, site construit comme ca*/
    // Traiter chaque nœud texte à l'intérieur de l'élément
    Array.from(el.childNodes).forEach((child) => { /* transform node list en array */
      // Cette condition filtre pour que seuls les nœuds texte soient manipulés.
      if (child.nodeType === Node.TEXT_NODE) { /* si child est text alors je call function modify sur cet enfant, peu importe si dans dico ou pas, va check apres */
        modifyTextContent(child);
      }
    });
  });

  switchNames();

window.addEventListener("scroll", function () {
  switchNames();
});


window.addEventListener("mouseup", function () {
  let highlightedEl = window.getSelection()
  console.log("bhverlblir" + highlightedEl);
}
)


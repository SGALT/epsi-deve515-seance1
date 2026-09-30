# CP4 · Mini-catalogue vanilla (55 min · fermeture T+3:45)

## Le contexte

Vous allez construire, **sans framework**, exactement ce que vous construirez **avec** le framework en séance 2. Le but n'est pas la beauté du code : c'est de ressentir le problème que React, Vue ou Angular résolvent. Les assistants IA sont autorisés sur cet atelier, à la condition habituelle : tout expliquer à l'oral.

## Démarrage

```bash
cd 04-catalogue
npm install
npm run dev
```

Ouvrez l'URL affichée. Le HTML et le CSS sont fournis, `main.js` contient une carte produit et le chargement. Tout le reste est à vous.

## Phase 1 · Ça marche (25 min) — 10 points

1. Afficher la liste des produits.
2. Le champ de recherche filtre la liste par titre, sans tenir compte de la casse.
3. « Ajouter » incrémente le compteur du header et passe le bouton en état « Ajouté ».
4. Le bouton « Panier » affiche / masque le panneau latéral qui liste les produits ajoutés avec le total.

Vous codez comme vous voulez. Vraiment.

## Phase 2 · Le twist (10 min)

À T+3:15, le formateur annonce trois nouvelles exigences client. Vous les intégrez dans votre code de la phase 1, tel quel. Observez ce que ça vous coûte : c'est le sujet de la phase 3.

## Phase 3 · La refacto (20 min) — 10 points

Réécrivez `main.js` autour de trois briques, et de rien d'autre :

```js
let state = { products: [], query: "", cart: [], cartOpen: false };

function render(state) {
  // reconstruit TOUTE l'interface à partir de state, à chaque fois
}

function setState(patch) {
  state = { ...state, ...patch };
  render(state);
}
```

Règle : **aucune lecture du DOM pour connaître l'état de l'appli**. Si vous avez besoin de savoir si un produit est dans le panier, vous regardez `state.cart`, jamais une classe CSS. Les événements ne font qu'appeler `setState`.

## Bonus (+5)

Un tri (prix croissant / décroissant) ou un filtre par catégorie, toujours via `state`.

## Validation du checkpoint

Démo des phases 1 et 3 devant le formateur, puis une question. Exemples : « Que se passe-t-il si je tape dans la recherche pendant que le panier est ouvert ? », « Pourquoi `setState` crée un nouvel objet au lieu de modifier `state` ? », « Qu'est-ce qui coûte cher dans votre `render` ? ».

Cette dernière question est la porte d'entrée de la séance 2.

# CP1 · Kata de refactoring (45 min · fermeture T+1:05)

## Le contexte

`legacy.js` est le code du catalogue tel qu'il a été écrit il y a douze ans. Il est couvert par une suite de tests de comportement (`legacy.test.js`). Vous devez le moderniser **sans jamais casser ces tests**, jusqu'à ce que les tests de modernité (`modernite.test.js`) passent aussi.

## Démarrage

```bash
npm run watch:1
```

Laissez cette fenêtre ouverte : elle relance les tests à chaque sauvegarde. Au départ, vous devez voir **un test de comportement rouge** et **tous les tests de modernité rouges**. Comptez-les.

## La règle du kata

1. **Une transformation à la fois**, tests verts entre chaque étape, **un commit par transformation** (`git commit -am "arrow functions"`). L'historique git est demandé à la validation.
2. Ne touchez à **aucun** fichier `*.test.js`.
3. Le test 🐛 qui est rouge au départ révèle un bug du code historique. Trouvez-le, comprenez-le, corrigez-le avec la bonne syntaxe moderne.
4. Le jeu de données (`data/products.json`) contient des cas limites. Regardez-le.

## Les notions attendues

À la fin, votre code utilise :

- `const` / `let` (plus aucun `var`)
- des fonctions fléchées
- des template literals
- la déstructuration (`{ name, price }`)
- le spread (`...`)
- `map` / `filter` / `reduce` / `flatMap` à la place des boucles `for`
- `??` et `?.`

## Validation du checkpoint

Montrez au formateur : `npm run test:1` tout vert, `git log --oneline`, puis répondez à sa question. Exemples de ce qu'il peut demander : « Pourquoi `||` était un bug ici ? », « Quelle différence entre `?.` et `&&` ? », « Que se passe-t-il si je passe `null` à `ratingOf` ? ».

## Bonus (+5)

Écrivez `groupByCategory` avec `reduce()`. Le test correspondant vous dit exactement ce qu'on attend. Pour aller plus loin : comparez avec `Object.groupBy()` (Node 21+).

## Débrief

Chaque binôme a reçu une notion au départ. Préparez 60 secondes pour l'expliquer aux autres, exemple tiré de **votre** code à l'appui.

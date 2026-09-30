# CP2 · Portée, closures, callbacks (45 min · fermeture T+1:50)

## Le contexte

Une **closure**, c'est une fonction qui garde accès aux variables de l'endroit où elle a été créée, même une fois cet endroit terminé. C'est le mécanisme qui fait tourner les hooks de React, les `watch` de Vue, les gestionnaires d'événements et les callbacks d'API. Si vous ne maîtrisez pas ça, les bugs de « valeur périmée » vous attendent dans le framework.

## Démarrage

```bash
npm run watch:2
```

Tout est rouge. Chaque fonction de `utils.js` est décrite par son JSDoc, puis **précisée par les tests** : le test est la spécification, lisez-le avant de coder.

## Les fonctions à écrire, dans l'ordre

1. `scheduleLogs` – corrigez le bug de deux manières différentes (indice : l'une touche à la déclaration, l'autre crée une portée par tour de boucle). Gardez la seconde en commentaire.
2. `createCounter` – un objet dont l'état est **inaccessible** de l'extérieur. Le test vérifie que l'objet n'a que trois clés.
3. `once`
4. `debounce` – avec `.cancel()`. Attention : ce sont les **derniers** arguments qui comptent, pas les premiers.
5. Bonus : `memoize`

## Interdits

- Aucune variable globale, aucune propriété « cachée » sur l'objet renvoyé.
- Aucune modification des tests.

## Validation du checkpoint

`npm run test:2` tout vert, puis une question du formateur. Exemples : « Où vit la variable `count` après que `createCounter` a terminé ? », « Pourquoi `let` corrige la boucle ? », « Que renvoie `debounce` exactement, et pourquoi on peut lui accrocher `.cancel` ? ».

## Pour aller plus loin (à garder en tête pour la séance 2)

Dans un composant React, ceci a un bug de closure. Sauriez-vous dire lequel ?

```jsx
const [count, setCount] = useState(0);
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(id);
}, []);
```

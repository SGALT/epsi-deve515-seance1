# CP0 · Quiz diagnostic (10 min, seul·e, sans exécuter)

Pour chaque snippet, écrivez sur la feuille **ce qui s'affiche dans la console** (ou l'erreur levée), puis **une phrase** qui explique pourquoi. Pas de points en jeu : ce quiz sert à composer les binômes.

### 1. Portée

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

### 2. Déstructuration

```js
const user = { name: "Ada", address: null };
const { address: { city } = {} } = user;
console.log(city);
```

### 3. Ordre d'exécution

```js
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
console.log(4);
```

### 4. Références

```js
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a.length);
```

### 5. `this` et fonctions fléchées

```js
const obj = {
  n: 1,
  get: () => this?.n,
};
console.log(obj.get());
```

### 6. Bonus – opérateurs

```js
const limit = 0;
console.log(limit || 10, limit ?? 10);
```

---

Quand vous avez fini : rendez la feuille au formateur, il vous attribue un binôme et vous pouvez lancer le CP1.

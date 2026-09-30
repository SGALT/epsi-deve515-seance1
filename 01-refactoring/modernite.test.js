/*
 * Tests de modernité – NE PAS MODIFIER.
 * Ils lisent le code source de legacy.js et vérifient que la syntaxe a été
 * modernisée. Rouges au départ, verts à l'arrivée.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./legacy.js", import.meta.url), "utf8")
  // on ignore les commentaires pour ne compter que le code
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\/\/.*$/gm, "");

/** Vérifie la présence (true) ou l'absence (false) d'un motif dans le code. */
const contains = (regex) => regex.test(source);

test("plus aucun var", () => {
  assert.equal(contains(/\bvar\b/), false, "il reste des `var` : utilise const ou let");
});

test("plus aucune boucle for classique", () => {
  assert.equal(contains(/\bfor\s*\(/), false, "il reste des `for (` : utilise map / filter / reduce");
});

test("plus aucune concaténation de chaînes avec +", () => {
  assert.equal(contains(/["']\s*\+|\+\s*["']/), false, "il reste des `\"...\" +` : utilise les template literals");
});

test("au moins une fonction fléchée", () => {
  assert.equal(contains(/=>/), true, "aucune fonction fléchée `=>` trouvée");
});

test("au moins un template literal", () => {
  assert.equal(contains(/`[^`]*\$\{/), true, "aucun template literal `${...}` trouvé");
});

test("au moins une déstructuration d'objet en paramètre", () => {
  assert.equal(contains(/\(\s*\{[^}]*\}\s*[,)]/), true, "déstructure au moins un paramètre : ({ name, price })");
});

test("le spread est utilisé", () => {
  assert.equal(contains(/\.\.\./), true, "aucun spread `...` trouvé");
});

test("l'opérateur ?? est utilisé", () => {
  assert.equal(contains(/\?\?/), true, "aucun `??` trouvé (indice : le test 🐛 de withDefaults)");
});

test("le chaînage optionnel ?. est utilisé", () => {
  assert.equal(contains(/\?\./), true, "aucun `?.` trouvé (indice : ratingOf)");
});

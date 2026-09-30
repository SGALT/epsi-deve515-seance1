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

test("plus aucun var", () => {
  assert.doesNotMatch(source, /\bvar\b/, "il reste des `var`");
});

test("plus aucune boucle for classique", () => {
  assert.doesNotMatch(source, /\bfor\s*\(/, "il reste des `for (`");
});

test("plus aucune concaténation de chaînes avec +", () => {
  assert.doesNotMatch(source, /["']\s*\+|\+\s*["']/, "il reste des `\"...\" +` : utilise les template literals");
});

test("au moins une fonction fléchée", () => {
  assert.match(source, /=>/);
});

test("au moins un template literal", () => {
  assert.match(source, /`[^`]*\$\{/);
});

test("au moins une déstructuration d'objet en paramètre", () => {
  assert.match(source, /\(\s*\{[^}]*\}\s*[,)]/, "déstructure au moins un paramètre : ({ name, price })");
});

test("le spread est utilisé", () => {
  assert.match(source, /\.\.\./);
});

test("l'opérateur ?? est utilisé", () => {
  assert.match(source, /\?\?/);
});

test("le chaînage optionnel ?. est utilisé", () => {
  assert.match(source, /\?\./);
});

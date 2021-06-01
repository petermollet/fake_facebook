# Pense-bête

## Créer

```CLI
npx create-next-app facebook
```

---

## Run

```CLI
yarn run dev
```

---

## Tailwind

```CLI
npx tailwindcs init -p
```

Ajouter à tailwind.config.js

```js
mode: 'jit',
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
```

JIT est en preview pour l'instant

Ajouter au main css

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

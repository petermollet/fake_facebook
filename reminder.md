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
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
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

## Developper Facebook

Aller sur dev facebook et créer une app puis dans un fichier .env.local:

```local
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost3000
```

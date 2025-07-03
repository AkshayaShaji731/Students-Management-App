# Student-management-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### install Pinia

```
npm install pinia
```

### config in ts

```

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
```

### presist data in pinia using plugin

```
npm i pinia-plugin-persistedstate

config-persistedstate

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```

### install of Router

```
npm i vue-router
```

### To add vuetify icon install and config

```
npm install @mdi/font -D
```

```
    import '@mdi/font/css/materialdesignicons.css'(main.js)


    import { createVuetify } from 'vuetify'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'
    import { aliases, mdi } from 'vuetify/iconsets/mdi' // Or mdi-svg for SVG icons

    export default createVuetify({
      components,
      directives,
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
    })
### install json server

```

npm insatll -g json server

```

### watch the file

```

json-server -w <path of json>

```

### install axios

```

npm install axios

```

```

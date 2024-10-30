# canhazgleamplz


Attempting to get vita working with gleam

## Build steps

I initially created a vite project with `create-vite`, as well as a gleam.toml

#### Node
```sh
npm install
npm run dev #/ build
```


#### Deno

```sh
deno install
deno task dev #/ build
```


### No luck

even though adding incorrect syntax to `*.gleam` files in `src/` does throw errors.
There is no sign of any gleam js code being bundled into `dist/`.


## It works

changed `index.html` to point to `src/main.js`

```
+++ index.html
-    <script type="module" src="src/canhazgleamplz.gleam"></script>
+    <script type="module" src="src/main.js"></script>
```

`src/main.js` just imports the main module.

```
import { main } from "./canhazgleamplz.gleam";
main();
```
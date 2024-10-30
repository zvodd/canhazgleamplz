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

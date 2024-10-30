import { Ok, Error } from "./gleam.mjs";


export function print(message){
    console.log(message)
    const doc = globalThis.window.document
    const pre_el = doc.createElement("pre")
    pre_el.innerText = message
    doc.body.appendChild(pre_el)
}

import { create } from "zustand";
import { State } from "./useData.types";

export const useData = create<State>(set => ({
    js:"//Escribe tu javascript ",
    css:`body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}`,
    html:`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style></style>
  </head>
  <body>
    <h1>Hola mundo</h1>
  </body>
</html>`,
    setValue: (mode, content) => set({ [mode]: content })
}))
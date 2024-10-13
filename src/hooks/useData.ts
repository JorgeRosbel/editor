import { create } from "zustand";
import { State } from "./useData.types";
import { decompressFromEncodedURIComponent } from 'lz-string';

// Mover la función fuera para que no dependa de `set`
const initializeState = (): Omit<State, 'setValue'> => {
  const pathname  = location.pathname.split("/")[1];

  //const hashDecoded = pathname !== "" && atob(pathname);
  const hashDecoded = pathname !== "" && decompressFromEncodedURIComponent(pathname);
  const Split = hashDecoded && hashDecoded.split("|");

  const initialHtml:string = Split  ? Split[0] : "";
  const initialCss:string =  Split  ? Split[1] : "";
  const initialJs:string =  Split  ? Split[2] : "";

  return {
    js: initialJs,
    css: initialCss,
    html: initialHtml,
  };
};

export const useData = create<State>((set) => ({
    ...initializeState(),
    setValue: (mode, content) => set(state => ({ ...state, [mode]: content })),
}));

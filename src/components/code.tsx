import { Lang } from "./code.types";
import { useData } from "../hooks/useData";
import { compressToEncodedURIComponent} from 'lz-string';
import Editor from '@monaco-editor/react';


export const Code:React.FC<Lang> = ({lang}) => {

    const { [lang]: value, setValue } = useData();
 
    function handleEditorChange(value: string | undefined) {
        if (value !== undefined) {
            setValue(lang, value);
        }
        console.log('here is the current model value:', value);
    }

    let lengu = '';

    if(lang === "js"){lengu = "javascript"}
    else if(lang === "css"){lengu = "css"}
    else if(lang === "html"){lengu = "html"}

  
    return(
        <div className="w-full animate-fade min-h-screen p-3">
            {/* <textarea className="w-full outline-none p-3  caret-red-50 resize-none bg-dark-1 min-h-screen max-h-screen" onChange={changeInput} value={value} id={lang} /> */}
            <Editor
            theme="vs-dark"
            height="100vh"
            width="100%" // Altura del editor
            language={lengu} // Lenguaje por defecto
            value={value} // Valor por defecto
            onChange={(val) => handleEditorChange(val)}
    />
        </div>
    )
}

export const Output:React.FC = () => {
    const { html,css,js } = useData();
    const template = `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>${css}</style>
      </head>
      <body>
      ${html}
        <script>${js}</script>
      </body>
    </html>` 

    //const hash = btoa(`${html}|${css}|${js}`)
    const hash = compressToEncodedURIComponent(`${html}|${css}|${js}`)
    history.replaceState(null,'',`/${hash}`);
    
    return(
        <iframe className="bg-white w-1/2" srcDoc={template} sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-presentation"></iframe>
    )
}




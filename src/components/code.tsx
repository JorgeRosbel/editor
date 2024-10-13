import { Lang } from "./code.types";
import { useData } from "../hooks/useData";

export const Code:React.FC<Lang> = ({lang}) => {

    const { [lang]: value, setValue } = useData();
    const changeInput = (e:React.ChangeEvent<HTMLTextAreaElement>) => setValue(lang,e.target.value)


    return(
        <div className="w-full animate-fade">
            <textarea className="w-full outline-none p-3  caret-red-50 resize-none bg-dark-1 min-h-screen max-h-screen" onChange={changeInput} value={value} id={lang} />
        </div>
    )
}

export const Output:React.FC = () => {
    const { html,css,js } = useData();

    const template = `
    <!doctype html>
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
    
    return(
        <iframe className="bg-white w-1/2" sandbox="allow-scripts" srcDoc={template}></iframe>
    )
}




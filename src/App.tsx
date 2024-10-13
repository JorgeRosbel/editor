import 'tailwindcss/tailwind.css';
import { Output} from './components/code';
import { Editor } from './components/editorContent';
import { CodeContent } from './components/codeContent';



const App:React.FC = () => {
  


  return(
    <main id="--maing-page" className="w-full max-h-screen overflow-hidden bg-dark-1">
      <Editor>
        <CodeContent/>
        <Output  />
      </Editor>

    </main>
  )

}

export default App

import 'tailwindcss/tailwind.css';
import { Output} from './components/code';
import { Editor } from './components/editorContent';
import { CodeContent } from './components/codeContent';



const App:React.FC = () => {
  


  return(
    <main id="--maing-page" className="w-full max-h-screen overflow-hidden bg-[#1e1e1e]">
      <Editor>
        <CodeContent/>
        <Output  />
      </Editor>
    </main>
  )

}

export default App

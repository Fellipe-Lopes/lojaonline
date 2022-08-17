import{Aviso} from './components/aviso/aviso';
import {Header} from './components/header/header';
import {Produtos} from './components/navegacao/produtos';
import {Ofertas} from './components/principais_ofertas/ofertas';

function App() {
  return (
    <div>
      <Aviso/>
      <Header/>
      <Produtos/>
      <Ofertas/>
    </div>
  )
}

export default App

import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Formulario } from './components/Formulario/Formulario';
import { Configuracao } from './paginas/Configuracao';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao/> }/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

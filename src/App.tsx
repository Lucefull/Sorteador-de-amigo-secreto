import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import DebugObserver from './components/DebugObserver';
import { Configuracao } from './paginas/Configuracao';
import { Sorteio } from './paginas/Sorteio';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
      <DebugObserver/>
        <Routes>
          <Route path="/" element={<Configuracao/> }/>
          <Route path="/sorteio" element={<Sorteio/> }/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

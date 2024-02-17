import './App.css';
import { useState, useEffect } from 'react'; 
import Home from "./parts/home/home.js";
import PromoPage from './parts/promo/promo.js'; 
import Menu from './parts/menu/menu.js';
import Contact from './parts/contato/contatos.js';
import Cookies from 'js-cookie'; 

function App() {
  const [promocoesSalvas, setPromocoesSalvas] = useState([]);
  const [tituloPromocao, setTituloPromocao] = useState('');

  useEffect(() => {
    const promocoesDoCookie = Cookies.get("produtosPromocao");
    if (promocoesDoCookie) {
      const { produtos, titulo } = JSON.parse(promocoesDoCookie);
      setPromocoesSalvas(produtos); 
      setTituloPromocao(titulo); 
    }
  }, []);
  


  return (
    <div className="App">
      <Home />
      <PromoPage produtosPromocao={promocoesSalvas} tituloPromocao={tituloPromocao} />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import Header from './parts/header/header';
import Home from "./parts/home/home.js";
import PromoPage from './parts/promo/promo.js';
import Menu from './parts/menu/menu.js';
import Contact from './parts/contato/contatos.js';
import Footer from './parts/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Home />
      <PromoPage />
      <Menu />
      < Contact />
    </div>
  );
}

export default App;

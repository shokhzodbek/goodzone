import Carusel1 from './components/fragments/Carusel'
import './App.css';
import Search from './components/fragments/Search';
import ToggleMenu from './components/fragments/ToggleMenu';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import CardItem from './components/fragments/CardItem';
import Banner from './components/fragments/Banner';
import Footer from './components/Footer/Footer';
import News from './components/fragments/News'
import Brands from './components/fragments/Brands';
import OrderPage from './pages/OrderPage';
import ShowOrder from './pages/ShowOrder';
import ProductPage from './pages/ProductPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AboutProduct from './components/AboutProduct/AboutProduct';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <div className="app">
 
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
        <HomePage/>
        </Route>
       
      
        <Route path="/product/:id">
          <ProductPage/>
        </Route>
      </Switch>
     <OrderPage/>
     <Footer/>
     </Router>
     {/* <LoginPage/> */}
    </div>
  );
}

export default App;

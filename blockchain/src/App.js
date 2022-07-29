import logo from './logo.svg';
import './App.css';
import EtheriumDeveloper from './Pages/EtheriumDeveloper';
import MetaverseExpert from './Pages/MetaverseExpert';
import CardanoExpert from './Pages/CardanoExpert';
import Polkadot from './Pages/Polkadot';
import polkadData from "../src/Data/polkaData.js"
import CartPage from './Pages/CartPage';
import MainRoutes from './Pages/MainRoutes/MainRoutes.jsx';

function App() {
  return (
   <>
   <MainRoutes/>
   {/* <EtheriumDeveloper/> */}
   {/* <MetaverseExpert/> */}
   {/* <CardanoExpert/> */}
   
  {/* <CartPage/> */}
  
   {/* <Polkadot/> */}
   </>
  );
}

export default App;

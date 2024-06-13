// Importar el archivo CSS 
import CartWidget from '../cartWidget/CartWidget';
import './navbar.css';


export default function Navbar() {
  return (
    <div className='navbarContainer'>
      <h2>logo</h2>
      <div className='div1'>
       <li>todos</li>
       <li>Tractores</li>
       <li>Cosechadoras</li>
       <li>sembradoras </li>     
     
     </div>
     <CartWidget/>

    </div>
  );
}

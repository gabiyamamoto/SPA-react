import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SESI School</div>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/servicos">Servicos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/extra">Portfolio</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
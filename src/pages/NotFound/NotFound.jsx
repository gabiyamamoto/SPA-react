import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <section className={styles.container}>
            <h1 className={styles.codigo}>404</h1>

            <h2>Página não encontrada</h2>

            <p>
                Parece que esta sala de aula não existe ou foi movida.
            </p>

            <Link to="/" className={styles.botao}>
                Voltar para a Home
            </Link>
        </section>
    );
}

export default NotFound;
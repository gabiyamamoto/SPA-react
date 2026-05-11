import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "Educação", d: "Melhores métodos de ensino já descobertos." },
    { id: 2, t: "Tecnologia", d: "Ferramentas modernas para transformar seu aprendizado." },
    { id: 3, t: "Inovação", d: "Preparando alunos para o futuro digital." }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Bem-vindo à SESI School</h1>
      <p>Transformando o futuro através da educação.</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Card key={item.id} titulo={item.t} descricao={item.d} />
        ))}
      </div>
    </section>
  );
}
export default Home;
import styles from './Sobre.module.css';
import Card from '../../components/Card/Card';

function Sobre() {
  const valores = [
    { id: 1, titulo: "🚀 Missão", descricao: "Promover uma educação de qualidade, incentivando o conhecimento, a criatividade e o desenvolvimento dos alunos para os desafios do futuro." },
    { id: 2, titulo: "👁️ Visão", descricao: "Ser referência em educação inovadora, formando estudantes preparados para transformar a sociedade com responsabilidade e excelência." },
    { id: 3, titulo: "💎 Valores", descricao: "Respeito, ética, inovação, compromisso com a aprendizagem e inclusão." }
  ];

  return (
    <section className={styles.container}>
      <h1>Sobre Nós</h1>
      <p className={styles.descricao}>
        Conectando conhecimento, inovação e futuro em um só lugar.
      </p>

      <div className={styles.mvvGrid}>
        {valores.map(item => (
          <Card
            key={item.id}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default Sobre;
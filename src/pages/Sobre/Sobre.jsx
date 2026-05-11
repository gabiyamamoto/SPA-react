import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre Nós</h1>
      <p className={styles.descricao}>
        Conectando conhecimento, inovação e futuro em um só lugar.
      </p>
      
      <div className={styles.mvvGrid}>
        <div className={styles.item}>
          <h3>🚀 Missão</h3>
          <p>Promover uma educação de qualidade, incentivando o conhecimento, a criatividade e o desenvolvimento dos alunos para os desafios do futuro.</p>
        </div>
        <div className={styles.item}>
          <h3>👁️ Visão</h3>
          <p>Ser referência em educação inovadora, formando estudantes preparados para transformar a sociedade com responsabilidade e excelência.</p>
        </div>
        <div className={styles.item}>
          <h3>💎 Valores</h3>
          <ul>
            <li>Respeito</li>
            <li>Ética</li>
            <li>Inovação</li>
            <li>Compromisso com a aprendizagem</li>
            <li>Inclusão</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Sobre;
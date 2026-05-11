import styles from './Servicos.module.css';

function Servicos() {
  const listaServicos = [
    { id: 1, nome: "Cursos de Programação", desc: "Aulas práticas de desenvolvimento web, mobile e software." },
    { id: 2, nome: "Formação em Tecnologia", desc: "Capacitação completa para o mercado digital." },
    { id: 3, nome: "Mentoria Educacional", desc: "Acompanhamento personalizado para evolução dos alunos." },
    { id: 4, nome: "Workshops e Eventos", desc: "Experiências imersivas com inovação e aprendizado." }
  ];                                      

  return (                              
    <section>
      <h1>Nossos Serviços</h1>
      <div className={styles.lista}>
        {listaServicos.map(s => (
          <div key={s.id} className={styles.servicoCard}>
            <h3>{s.nome}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Servicos;
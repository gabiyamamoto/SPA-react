import styles from './Servicos.module.css';
import Card from '../../components/Card/Card';

function Servicos() {
    const listaServicos = [
        { id: 1, nome: "Ensino Fundamental e Médio", desc: "Educação de qualidade com foco no desenvolvimento acadêmico e pessoal dos alunos." },
        { id: 2, nome: "Laboratórios e Tecnologia", desc: "Ambientes modernos para aulas práticas, inovação e aprendizado tecnológico." },
        { id: 3, nome: "Atividades Esportivas", desc: "Incentivo ao esporte, à saúde e ao trabalho em equipe dentro e fora da escola." },
        { id: 4, nome: "Eventos e Cultura", desc: "Atividades culturais, apresentações e eventos que valorizam a participação dos estudantes." }
    ];

    return (
        <section>
            <h1>Nossos Serviços</h1>
            <div className={styles.lista}>
                {listaServicos.map((s) => (
                    <Card
                        key={s.id}
                        titulo={s.nome}
                        descricao={s.desc}
                    />
                ))}
            </div>
        </section>
    );
}
export default Servicos;
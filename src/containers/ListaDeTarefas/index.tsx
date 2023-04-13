import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const tarefas = [
  {
    titulo: 'estudar typescript',
    descricao: 'ver aula3 da ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar js',
    descricao: 'ver aula4 da ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar react',
    descricao: 'ver aula5 da ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar css',
    descricao: 'ver aula6 da ebac',
    prioridade: 'normal',
    status: 'pendente'
  },
  {
    titulo: 'estudar html',
    descricao: 'ver aula7 da ebac',
    prioridade: 'urgente',
    status: 'concluída'
  }
]

const ListaDeTarefas = () => {
  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map(({ titulo, descricao, prioridade, status }, index) => (
          <li key={index}>
            <Tarefa
              titulo={titulo}
              descricao={descricao}
              prioridade={prioridade}
              status={status}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas

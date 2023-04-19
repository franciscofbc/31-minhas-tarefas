import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.DivContatos>
      <ul>
        {itens.map((itens) => (
          <li key={itens.id}>
            <Contato
              id={itens.id}
              nome={itens.nome}
              email={itens.email}
              telefone={itens.telefone}
            />
          </li>
        ))}
      </ul>
    </S.DivContatos>
  )
}

export default ListaDeContatos

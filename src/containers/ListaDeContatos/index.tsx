import { useDispatch, useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { alteraNome } from '../../store/reducers/filtroContatos'
import * as S from './styles'

const ListaDeContatos = () => {
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { pesquisaNome } = useSelector(
    (state: RootReducer) => state.filtroContatos
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (pesquisaNome !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLowerCase().search(pesquisaNome.toLowerCase()) >= 0
      )
      // return contatosFiltrados
      return contatosFiltrados.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
      })
    }
    // return contatosFiltrados
    return contatosFiltrados.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    })
  }
  const contatosFiltrados = filtraContatos()

  // const contatosOrdenados = [...contatosFiltrados]
  // const ordemAlfabetica = () => {
  //   contatosOrdenados.sort(function (a, b) {
  //     return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
  //   })
  // }

  return (
    <S.DivContatos>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={pesquisaNome}
        onChange={(event) => dispatch(alteraNome(event.target.value))}
      />
      <ul>
        {contatosFiltrados.map((itens) => (
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

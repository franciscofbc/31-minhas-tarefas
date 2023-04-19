import BotaoAdicionar from '../../components/BotaoAdicionar'
import BtnAdd from '../../components/BtnAdd'
import Contato from '../../components/Contato'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      {/* <BarraLateral mostrarFiltros /> */}
      {/* <ListaDeTarefas /> */}

      {/* <BotaoAdicionar /> */}
      <ListaDeContatos />
      <BtnAdd />
    </>
  )
}

export default Home

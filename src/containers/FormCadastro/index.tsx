import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaRegSave } from 'react-icons/fa'

import * as S from './styles'

const FormCadastro = () => {
  const navigate = useNavigate()

  return (
    <S.DivPrincipal>
      <h3>Adicionar Contato</h3>
      <S.Form>
        <S.DivInputs>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Telefone" />
        </S.DivInputs>
        <div>
          <button>
            <FaRegSave />
          </button>
          <button>
            <FaArrowLeft
              onClick={() => {
                navigate('/')
              }}
            />
          </button>
        </div>
      </S.Form>
    </S.DivPrincipal>
  )
}

export default FormCadastro

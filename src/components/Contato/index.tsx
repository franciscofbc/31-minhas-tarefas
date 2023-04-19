import { FaRegTrashAlt, FaEdit, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

import * as S from './styles'

const Contato = () => {
  return (
    <S.Card>
      <S.FlexDiv>
        <S.CampoNome>gabriela blatt</S.CampoNome>
        <div>
          <S.Btn>
            <FaEdit />
          </S.Btn>
          <S.Btn>
            <FaRegTrashAlt />
          </S.Btn>
        </div>
      </S.FlexDiv>
      <S.CamposContato>
        <FaPhoneAlt /> 55.9.8142.6277
      </S.CamposContato>
      <S.CamposContato>
        <FaEnvelope /> fbc991@live.com
      </S.CamposContato>
    </S.Card>
  )
}

export default Contato

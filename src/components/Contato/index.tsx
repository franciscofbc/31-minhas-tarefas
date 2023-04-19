import {
  FaRegTrashAlt,
  FaEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaRegSave
} from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import ContatoClass from '../../models/Contato'
import { remover } from '../../store/reducers/contatos'
import * as S from './styles'

type ContatoClassProps = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email,
  telefone
}: ContatoClassProps) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  return (
    <S.Card>
      <S.FlexDiv>
        <input
          value={nome}
          disabled={!estaEditando}
          onChange={(event) => setNome(event.target.value)}
        />
        <div>
          {estaEditando ? (
            <S.Btn onClick={() => setEstaEditando(false)}>
              <FaRegSave />
            </S.Btn>
          ) : (
            <S.Btn onClick={() => setEstaEditando(true)}>
              <FaEdit />
            </S.Btn>
          )}
          <S.Btn
            onClick={() => {
              dispatch(remover(id))
            }}
          >
            <FaRegTrashAlt />
          </S.Btn>
        </div>
      </S.FlexDiv>
      <S.CamposContato>
        <FaPhoneAlt /> {telefone}
      </S.CamposContato>
      <S.CamposContato>
        <FaEnvelope /> {email}
      </S.CamposContato>
    </S.Card>
  )
}

export default Contato

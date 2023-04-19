import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const DivContatos = styled.div`
  background-color: ${variaveis.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`

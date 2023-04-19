import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const DivContatos = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    list-style: none;
  }
`

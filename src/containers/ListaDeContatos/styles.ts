import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const DivContatos = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;

  input {
    padding: 8px 128px 8px 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: none;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    list-style: none;
  }
`

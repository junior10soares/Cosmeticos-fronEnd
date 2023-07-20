import styled from 'styled-components';
import fundo from '../../assets/fundo.png'

export const ContainerBody = styled.div`
    background: linear-gradient(90deg, #c0a3e4, #fca3cc), url(${fundo});
    background-blend-mode: overlay;
    background-size: cover;
    height: 82.2vh;
`
export const ContainerImg = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center; /* Centralizar itens horizontalmente */
  }

  div{
    display: flex;
    padding: 10px;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    height: auto;
    width: 15.625rem;
    border-radius: 20px;
    margin-top: 5rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding-bottom: 0.938rem;

    img{
        height: 60%;
    }

    button{
        cursor: pointer;
        border-radius: 2px;
        border: none;
        background: #9c67a3;
        color: ${(props) => props.theme.white};
        width: 9.375rem;
        height: auto;
        margin-top: 0.5rem;
    }
    button:hover{
      background: ${(props) => props.theme.purple};
     font-weight: bold;
    }
    span{
      font-weight: bold;
    }
}
 
`

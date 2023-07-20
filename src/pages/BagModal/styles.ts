import { styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog'; // biblioteca modal
import { keyframes } from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  width: 28.125rem;
  height: 56.25rem;
  background: ${(props) => props.theme.white};
  right: 0;
  top: 0;
  padding: 4.5rem 3rem 43rem;
  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.8);

  animation: ${slideFromRight} 0.4s ease-out;

  header{
    font-size: 1.25rem;
    font-weight: bold;
  }
  main{
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      height: 3.125rem;
      width: 3.125rem;
      }
      p{
        font-size: 0.75rem;
      }
      strong{
        font-size: 0.813rem;
      }
  }
`;
export const ContentDiv = styled.div`
    display: flex;
    padding: 0.625rem;
    gap: 1.25rem;
    flex-direction: column;
    margin-top: 1.25rem;
    height: auto;
    border: 1px dashed #9c67a3;
`;

export const ClosedButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  color: #9c67a3;;
  cursor: pointer;

  &:hover{
    color: ${(props) => props.theme.purple};
    font-weight: bold;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  button{
        cursor: pointer;
        border-radius: 2px;
        border: none;
        background: #9c67a3;
        color: ${(props) => props.theme.white};
        height: 3.125rem;
        margin-top: 1.875rem;
    }
    button:hover{
      background: ${(props) => props.theme.purple};
     font-weight: bold;
    }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  height: auto;
  border: 1px dashed #9c67a3;
  margin-top: 1.875rem;
  padding: 0.625rem;
`;

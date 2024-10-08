import styled, { keyframes } from 'styled-components';

const bgAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 100%;
  }
  
  100% {
    background-position: 0 0;
  }
`;

export const InputContainer = styled.div`
  max-width: 450px;
  height: 50px;
  display: flex;

  border: 2px solid transparent;
  border-radius: 8px;

  background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
  background-size: 165%;

  overflow: hidden;

  &:hover,
  &:focus-within {
    animation-name: ${bgAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
`;

export const Link = styled.span`
  ${(props) => props.theme.typography['body']};

  line-height: 46px;
  font-weight: 600;
  padding-left: 24px;

  background-color: ${({ theme }) => theme.colors['bgWhite']};
`;

export const StyledInput = styled.input`
  ${(props) => props.theme.typography['body']};
  font-family: inherit;
  font-weight: 600;

  width: 150px;

  border: none;
  outline: none;

  line-height: 50px;

  background-color: ${({ theme }) => theme.colors['bgWhite']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['placeholder']};
    opacity: 0.5;
  }
`;

export const HeroButton = styled.button`
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  border: none;
  cursor: pointer;
  
  padding: 0 24px;

  color: ${({ theme }) => theme.colors['bgWhite']};
  background: transparent;
}
`;

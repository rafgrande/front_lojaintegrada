import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 5px 10px 0 ${props => props.theme.colors.primary};
`;

export const FormTitle = styled.div`
    font-size: 20px;
    color: ${props => props.theme.colors.black};
    font-weight: 700;
    text-align: center;
    margin: 15px 0;
`;

export const MensageError = styled.div`
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.secondary};
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
    font-weight: 700;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
    color: ${props => props.theme.colors.secondary};

    > svg {
        animation: ${rotate} .5s linear infinite;
    }
`;

export const ContainerInputs = styled.div`
    margin: 20px 0 50px;

    > input {
        margin-bottom: 20px;
    }
`;

export const SignUpLink = styled.div`
    font-size: 12px;
    margin-top: 50px;
`;
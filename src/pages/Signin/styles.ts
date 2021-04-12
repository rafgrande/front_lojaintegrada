import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
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

export const ContainerInputs = styled.div`
    margin: 20px 0 50px;
`;

export const SignUpLink = styled.div`
    font-size: 12px;
    margin-top: 50px;
`;
import styled from 'styled-components';

export const Container = styled.button`
    font-size: 15px;
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    border-radius: 100px;
    font-weight: 700;
    background-color: ${props => props.theme.colors.purple};
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`; 
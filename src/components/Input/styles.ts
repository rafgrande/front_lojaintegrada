import styled from 'styled-components';

export const Container = styled.input`
    width: 100%;
    margin: 5px 0;
    padding: 10px;
    border-bottom: 1px solid ${props => props.theme.colors.black};
    &:focus {
        border-bottom: 1px solid ${props => props.theme.colors.purple};
    }
`; 
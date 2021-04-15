import React, {LabelHTMLAttributes} from 'react'
import styled from 'styled-components';

const Container = styled.label`
    padding-left: 10px;
    font-size: 14px;
`;

type IInputProps = LabelHTMLAttributes<HTMLLabelElement>

const Input: React.FC<IInputProps> = ({ ...rest }) => {
    return (
        <Container {...rest}/>
    )
}

export default Input;
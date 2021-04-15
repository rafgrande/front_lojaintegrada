import React, {LabelHTMLAttributes} from 'react'
import styled from 'styled-components';

const Container = styled.label`
    padding-left: 10px;
    font-size: 14px;
`;

type ILabelProps = LabelHTMLAttributes<HTMLLabelElement>

const Label: React.FC<ILabelProps> = ({ ...rest }) => {
    return (
        <Container {...rest}/>
    )
}

export default Label; 
import React from 'react';
import styled from 'styled-components';

import { useAuth } from '../../context/auth';

const Button = styled.button`
    background-color: transparent;
    color: blue;
    text-decoration: underline;
`;

const Home: React.FC = () => {
    const {signOut} = useAuth();
    return (
        <div>Olá Usuário, <Button onClick={signOut}>sair</Button>.</div>
    )
}

export default Home;